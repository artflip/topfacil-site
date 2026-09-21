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
| Telefone e WhatsApp | Ainda são exemplos: `(XX) XXXX-XXXX` e `5500000000000`; precisam dos dados reais |
| Formulário | Integração Formspree presente; entrega de mensagens não testada para evitar envio real |
| Títulos visíveis | Carrossel tem três H1; revisar hierarquia e destacar serviço/cidade no título principal |
| Promessas de economia | Texto e calculadora usam percentuais e premissas que precisam de validação comercial e explicação |
| Imagens | Slides de aproximadamente 289 KB, 1,19 MB e 706 KB; otimizar e medir desempenho em celular |

## Próximas prioridades

1. Acompanhar o processamento da indexação do blog e artigo e os relatórios do Search Console.
2. Corrigir contatos com dados fornecidos pelo responsável; confirmar endereço, serviços, capacidade e fotos antes de criar dados estruturados de negócio local.
3. Conferir e ajustar redirecionamento HTTP → HTTPS preservando caminho e parâmetros.
4. Medir desempenho móvel e reduzir imagens grandes; revisar carrossel e acessibilidade.
5. Melhorar o conteúdo comercial com informações reais de estrutura, localização e contratação; revisar premissas da calculadora.
6. Planejar artigos úteis ligados às dúvidas dos clientes e acompanhar impressões, cliques e indexação no Search Console.

## Validação local

Build Jekyll 3.10 de produção e de prévia. Verificação de links e metadados do blog, XML do sitemap e URLs esperadas. O primeiro artigo agora é tratado corretamente como publicado nas verificações e no guia. O sitemap omite posts marcados como rascunho, inclusive em prévias com `--unpublished`.

Referência: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
