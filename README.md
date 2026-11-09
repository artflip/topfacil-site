# TopFácil Alojamentos — versão definitiva

Site institucional e de consulta da TopFácil Alojamentos em Luís Eduardo Magalhães (BA).

## Estrutura

- `/` — página inicial para o público geral (hóspedes, estudantes e trabalhadores). Galeria, acomodações, períodos, localização e consulta de estadia.
- `/empresas/` — página para empresas e equipes (a antiga página inicial publicada), com solução, economia e formulário de proposta.
- `/blog/` — blog em Jekyll (textos em `_posts`, layouts em `_layouts` e `_includes`).
- `assets/` — CSS, JavaScript, imagens e bibliotecas locais (Bootstrap e Lucide em `assets/lib`).
- `_versoes/` — arquivo das versões anteriores. Começa com `_` para não ser publicado pelo Jekyll.
- `docs/` — notas de desenvolvimento e SEO.

Arquivos principais da home: `index.html`, `assets/booking-home.css`, `assets/booking-home.js`.
Arquivos principais da página de empresas: `empresas/index.html`, `assets/experience.css`, `script.js`.

## Prévia local

Página inicial e `/empresas/` são HTML estático e funcionam com qualquer servidor local:

```bash
python3 -m http.server 8000
```

Depois abra `http://127.0.0.1:8000/`.

O blog depende do Jekyll. Para renderizá-lo:

```bash
bundle install
bundle exec jekyll serve
```

## Publicação

O site é publicado pelo GitHub Pages a partir da branch `main` na raiz do repositório, no domínio `topfacilalojamentos.com.br` (arquivo `CNAME`). O Jekyll é executado automaticamente pelo GitHub Pages.

## Observações de conteúdo

- As fotos da home são ilustrativas e estão identificadas como referência; não representam as acomodações reais.
- Tipos de quarto, banheiros e itens incluídos devem ser confirmados pela equipe antes de qualquer alteração de texto.
- Preços e disponibilidade são informados apenas no atendimento, por WhatsApp ou e-mail.
