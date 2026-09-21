# Desenvolvimento do blog

O site principal continua em HTML estático. Apenas o blog usa layouts Liquid/Jekyll, sem JavaScript adicional. O Pages CMS edita Markdown com metadados YAML em `_posts/`; imagens enviadas pelo painel ficam em `assets/blog/`.

## Ambiente

Instale Ruby compatível com Jekyll 3.10 e Bundler e rode:

```sh
bundle install
bundle exec jekyll serve --unpublished --host 127.0.0.1
```

Abra http://127.0.0.1:4000/blog/. `--unpublished` inclui os rascunhos apenas nessa prévia. A prévia possui `noindex` e identifica os rascunhos na tela.

## Produção

```sh
JEKYLL_ENV=production bundle exec jekyll build --strict_front_matter
python3 scripts/check_blog.py _site
```

Nunca use `--unpublished` na produção. O padrão dos posts é `published: false`; somente artigos com `published: true` são publicados. O artigo de exemplo está deliberadamente desativado.

O plugin `jekyll-paginate`, suportado pelo GitHub Pages, divide o blog em páginas de nove artigos. Não editar manualmente as páginas geradas em `_site/`.

A configuração assume o domínio personalizado na raiz (`baseurl: ""`). A home existente usa caminhos próprios dessa implantação. Não hospedar em um subdiretório de domínio github.io sem revisar os caminhos da home e do conteúdo.

## Verificações antes de publicar

- Geração de produção sem rascunhos.
- Geração de prévia com rascunhos identificados e bloqueada para indexação.
- Artigo com e sem imagem; título longo; listas e links.
- Paginação com mais de nove artigos.
- Links de navegação e contato apontando para a home.
- Blog e artigo em celular e computador, sem rolagem horizontal.
- Login, upload e salvamento pelo Pages CMS após conexão da conta.

O guia editorial está em `GUIA-DO-BLOG.md`.
