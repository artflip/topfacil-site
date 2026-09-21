"""Check generated blog HTML and local links; no third-party dependencies."""
import argparse
import json
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit


class Page(HTMLParser):
    def __init__(self):
        super().__init__()
        self.refs = []
        self.h1s = 0
        self.canonical = []
        self.noindex = False
        self.schema = []
        self.in_schema = False

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'h1':
            self.h1s += 1
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical.append(attrs.get('href'))
        if tag == 'meta' and attrs.get('name') == 'robots':
            self.noindex = 'noindex' in attrs.get('content', '')
        if tag == 'script' and attrs.get('type') == 'application/ld+json':
            self.in_schema = True
        for key in ('href', 'src'):
            if key in attrs and not (tag == 'link' and attrs.get('rel') == 'canonical'):
                self.refs.append(attrs[key])

    def handle_data(self, data):
        if self.in_schema:
            self.schema.append(data)

    def handle_endtag(self, tag):
        if tag == 'script':
            self.in_schema = False


parser = argparse.ArgumentParser()
parser.add_argument('destination')
parser.add_argument('--preview', action='store_true')
args = parser.parse_args()
root = Path(args.destination).resolve()
assert (root / 'index.html').is_file(), 'Home missing'
assert (root / 'CNAME').read_text().strip() == 'topfacilalojamentos.com.br'
assert (root / 'blog/index.html').is_file(), 'Blog missing'
assert '/blog/' in (root / 'index.html').read_text(), 'Home has no blog link'
for excluded in ('docs', 'scripts', 'Gemfile', 'Gemfile.lock', '.pages.yml', '_posts', '_config.yml'):
    assert not (root / excluded).exists(), f'Internal file exposed: {excluded}'
example = root / 'blog/como-planejar-o-alojamento-da-sua-equipe/index.html'
assert example.exists() == args.preview, 'Draft visibility does not match build type'
for file in (root / 'blog').rglob('*.html'):
    content = file.read_text()
    parsed = Page()
    parsed.feed(content)
    assert parsed.h1s == 1, f'{file}: expected one h1'
    assert len(parsed.canonical) == 1, f'{file}: canonical missing'
    assert parsed.noindex == args.preview, f'{file}: wrong indexing rules'
    assert '{{' not in content and '{%' not in content, f'{file}: unrendered template'
    if parsed.schema:
        schema = json.loads(''.join(parsed.schema))
        assert schema['@type'] == 'BlogPosting'
    for ref in parsed.refs:
        url = urlsplit(ref)
        if url.scheme or url.netloc or not url.path:
            continue
        target = root / unquote(url.path).lstrip('/') if url.path.startswith('/') else file.parent / unquote(url.path)
        assert target.exists(), f'{file}: broken local reference: {ref}'
    if not args.preview:
        assert 'Rascunho' not in content, f'{file}: draft leaked'
print(f'PASS: generated blog, internal links, metadata and draft isolation ({"preview" if args.preview else "production"}).')
