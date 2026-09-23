# TopFácil Alojamentos

Site em HTML e Jekyll, com experiência vertical responsiva, blog e formulário Formspree.

- `index.html`, `assets/experience.css`: apresentação.
- `assets/form.css`, `script.js`: formulário por etapas.
- `assets/navigation.js`: navegação, histórico e parallax.
- `assets/blog.css`, `_layouts/`, `_includes/`: blog e navegação compartilhada.
- `assets/lib/`: Bootstrap e Lucide locais, com licenças.

## Publicação

GitHub Pages acompanha a branch main. Metatag de verificação do Google, CNAME, sitemap e robots.txt devem ser preservados.

## Verificação local

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
python3 scripts/check_blog.py _site
```

A integração Formspree foi testada com respostas simuladas, sem envio real. Dados do formulário são preservados no sessionStorage da aba durante a navegação e apagados após envio confirmado.

Consulte `docs/GUIA-DO-BLOG.md`, `docs/SEO.md` e `docs/PUBLICACAO-V4.md`.
