# SEO TopFácil — diagnóstico e implantação

Inspeção em 21/09/2026. Alterações deste pacote ainda precisam ser publicadas.

## Search Console

Propriedade iniciada: `https://topfacilalojamentos.com.br/` (prefixo de URL), na conta escolhida pelo usuário, artur12filipe@gmail.com. Antes do cadastro, o Google informou que não havia propriedades nem verificações pendentes nessa conta. A propriedade cobre a home, o blog e os artigos em HTTPS no domínio sem www.

Método preparado: metatag `google-site-verification` na home. A verificação ainda não foi concluída: o código precisa estar publicado antes de clicar em Verificar. Não remover a metatag depois da confirmação. Nenhuma alteração de DNS foi feita.

Após aprovação e publicação:

1. Conferir a metatag no HTML público da home.
2. Confirmar que `/sitemap.xml` retorna XML com home, blog e artigos publicados.
3. Conferir `/robots.txt` público: há uma camada Cloudflare e a resposta atual é gerenciada por ela. Confirmar que a declaração do sitemap aparece após a implantação.
4. No Search Console, concluir a verificação pela opção Tag HTML.
5. Enviar `sitemap.xml` na seção Sitemaps.
6. Inspecionar home, blog e primeiro artigo. Solicitar indexação quando necessário. Registrar o resultado; solicitação não garante indexação nem posição.

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

1. Finalizar Search Console, sitemap e inspeção de URLs após publicar este pacote.
2. Corrigir contatos com dados fornecidos pelo responsável; confirmar endereço, serviços, capacidade e fotos antes de criar dados estruturados de negócio local.
3. Conferir e ajustar redirecionamento HTTP → HTTPS preservando caminho e parâmetros.
4. Medir desempenho móvel e reduzir imagens grandes; revisar carrossel e acessibilidade.
5. Melhorar o conteúdo comercial com informações reais de estrutura, localização e contratação; revisar premissas da calculadora.
6. Planejar artigos úteis ligados às dúvidas dos clientes e acompanhar impressões, cliques e indexação no Search Console.

## Validação local

Build Jekyll 3.10 de produção e de prévia. Verificação de links e metadados do blog, XML do sitemap e URLs esperadas. O primeiro artigo agora é tratado corretamente como publicado nas verificações e no guia. O sitemap omite posts marcados como rascunho, inclusive em prévias com `--unpublished`.

Referência: https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
