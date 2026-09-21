# SEO TopFácil — diagnóstico e implantação

Inspeção e publicação em 21/09/2026. Pacote publicado no commit `5e3fc20f061f0461fb33d252fe968d315b5a6294`.

## Search Console

Propriedade verificada: `https://topfacilalojamentos.com.br/` (prefixo de URL), na conta escolhida pelo usuário, artur12filipe@gmail.com. Antes do cadastro, o Google informou que não havia propriedades nem verificações pendentes nessa conta. A propriedade cobre a home, o blog e os artigos em HTTPS no domínio sem www.

Método confirmado pelo Google: metatag `google-site-verification` na home publicada. Não remover a metatag depois da confirmação. Nenhuma alteração de DNS foi feita.

Resultado confirmado no Search Console:

- Propriedade verificada por Tag HTML na conta escolhida pelo usuário.
- Sitemap enviado e **Processado**, com **3 páginas encontradas** em 21/09/2026.
- Home já indexada; solicitação de atualização aceita pelo Google.
- Blog detectado, ainda não indexado; solicitação de indexação aceita pelo Google.
- Primeiro artigo detectado, ainda não indexado; solicitação de indexação aceita pelo Google.
- Metatag, canonical, sitemap XML e robots.txt conferidos no site público. A resposta pública de robots.txt inclui a declaração do sitemap.
- Relatórios gerais ainda em processamento. O Google indica consultar novamente em aproximadamente um dia. Solicitação não garante indexação nem posição.

## Resultado da inspeção

| Item | Estado observado / ação |
| --- | --- |
| Home, blog e primeiro artigo | Respostas HTTP 200 no domínio HTTPS |
| Indexação do blog/artigo | HTML publicado sem `noindex`, com canonical |
| Sitemap | Retornava 404; preparado template Jekyll que inclui home, blog e posts publicados automaticamente |
| Canonical da home | Ausente; adicionado endereço HTTPS sem www |
| Título e descrição da home | Preparados com serviço e cidade por extenso |
| Compartilhamento da home | Preparados metadados Open Graph |
| www | Redireciona 301 para domínio sem www |
| HTTP | Retorna 200; ainda precisa redirecionar para HTTPS na camada de hospedagem/Cloudflare |
| Telefone e WhatsApp | Atualizados para `(77) 99856-0022` e `https://wa.me/5577998560022`, conforme imagem fornecida pelo responsável |
| Formulário | Integração Formspree presente; entrega de mensagens não testada para evitar envio real |
| Títulos visíveis | Carrossel tem três H1; revisar hierarquia e destacar serviço/cidade no título principal |
| Promessas de economia | Texto e calculadora usam percentuais e premissas que precisam de validação comercial e explicação |
| Imagens | Slides WebP responsivos: 201 KB no total no celular (antes 2,18 MB; redução de 90,8%); versões desktop totalizam 791 KB |

## Próximas prioridades

1. Acompanhar o processamento da indexação do blog e artigo e os relatórios do Search Console.
2. Confirmar endereço, serviços, capacidade e fotos antes de criar dados estruturados de negócio local.
3. Conferir e ajustar redirecionamento HTTP → HTTPS preservando caminho e parâmetros.
4. Medir desempenho móvel e reduzir imagens grandes; revisar carrossel e acessibilidade.
5. Melhorar o conteúdo comercial com informações reais de estrutura, localização e contratação; revisar premissas da calculadora.
6. Planejar artigos úteis ligados às dúvidas dos clientes e acompanhar impressões, cliques e indexação no Search Console.

## Validação local

Build Jekyll 3.10 de produção e de prévia. Verificação de links e metadados do blog, XML do sitemap e URLs esperadas. O primeiro artigo agora é tratado corretamente como publicado nas verificações e no guia. O sitemap omite posts marcados como rascunho, inclusive em prévias com `--unpublished`.

Referência: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap

## WhatsApp e desempenho — 21/09/2026

WhatsApp atualizado no contato e botão flutuante. Fotos convertidas para WebP em 800 px (celular) e 1920 px (computador), preservando os originais. Pré-carregamento da primeira foto conforme a tela; imagem da estrutura e logo de rodapé com carregamento adiado. Dimensões explícitas nas imagens para reservar espaço. Build de produção e links do blog validados; prévia conferida em 390 e 1366 px, sem rolagem horizontal e com as imagens corretas em cada tamanho. A redução é de bytes de imagem, não uma medição de tempo de carregamento ou pontuação Lighthouse.

HTTPS já funciona. Redirecionamento HTTP → HTTPS pendente de login do responsável na Cloudflare; o painel abriu na tela de login. Não foi alterado DNS, modo SSL nem HSTS. Após login, conferir certificados, subdomínios e regras existentes antes de ativar redirecionamento no escopo do site.
