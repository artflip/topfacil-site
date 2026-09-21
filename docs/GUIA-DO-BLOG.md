# Blog TopFácil — guia da equipe

## O que cada ferramenta faz

- **Pages CMS:** painel para escrever e editar artigos pelo navegador.
- **Jekyll:** transforma os artigos em páginas do site.
- **GitHub:** guarda o conteúdo e o histórico de alterações.
- **GitHub Pages:** hospeda as páginas no domínio da TopFácil.

O blog ficará em https://topfacilalojamentos.com.br/blog/. Cada artigo terá seu próprio endereço, como `/blog/como-planejar-o-alojamento-da-sua-equipe/`.

## Situação desta entrega

Blog publicado em 21/09/2026 em https://topfacilalojamentos.com.br/blog/. O Pages CMS está conectado ao repositório `artflip/topfacil-site`, branch `main`. A leitura e o salvamento foram testados pelo painel com a conta `arturflipp`. O primeiro artigo, “Como planejar o alojamento da sua equipe”, está publicado (`published: true`) e aparece no site público.

Acesso direto aos artigos: https://app.pagescms.org/artflip/topfacil-site/main/collection/posts. Para publicar, abra ou crie um artigo, revise, ative **Publicar no site** e clique em **Save**. A atualização é automática após a conclusão do GitHub Pages.

## Primeira conexão do painel

A primeira conexão já foi concluída. Para entrar novamente ou configurar outra conta autorizada:

1. Acesse https://app.pagescms.org/.
2. Entre com sua conta GitHub.
3. Autorize o aplicativo Pages CMS para **somente `artflip/topfacil-site`**. Caso o GitHub solicite uma autorização do dono da conta, essa etapa precisa ser feita por ele.
4. Abra o repositório e selecione a versão de trabalho correta. Para o uso normal, será a versão configurada para publicar o site.
5. O painel lerá o arquivo `.pages.yml` e mostrará **Artigos do blog** e a biblioteca de imagens.

Não é preciso criar uma nova configuração pelo painel: ela já acompanha este projeto. O acesso de escrita de uma ferramenta ao GitHub não instala automaticamente o Pages CMS; são autorizações separadas.

## Criar um artigo

1. Abra **Artigos do blog** e crie um novo item.
2. Preencha título, resumo, data, autor e categoria.
3. Se desejar, adicione uma imagem de capa e descreva seu conteúdo no campo de descrição da imagem.
4. Escreva o texto no editor. Use subtítulos, listas e links quando ajudarem a leitura.
5. Deixe **Publicar no site** desligado e salve para manter o artigo como rascunho.
6. Revise o texto e a imagem. Quando estiver pronto, ligue **Publicar no site** e salve.
7. Aguarde a conclusão da atualização no GitHub Pages e confira o endereço público.

Salvar com **Publicar no site** ligado na versão que alimenta o site inicia a atualização pública; não há uma aprovação adicional automática. Enquanto a equipe estiver aprendendo, mantenha o controle desligado até concluir a revisão.

Rascunho significa que o artigo não aparece no site. Se o repositório for público, o arquivo de rascunho continua visível no GitHub; não use esse espaço para informações confidenciais.

Use a data atual ou uma data passada. Uma data futura não agenda a publicação sozinha: o artigo só poderá aparecer em uma nova geração do site após essa data.

## Editar ou retirar um artigo

- **Editar:** abra o artigo, altere os campos e salve. Se estiver publicado, o site será atualizado.
- **Retirar do site:** desligue **Publicar no site** e salve. Seu endereço deixará de ter uma página após a atualização.
- Evite renomear o arquivo de um artigo já publicado, pois isso pode mudar o endereço e quebrar links compartilhados. Mudar apenas o título não exige renomear o arquivo.
- O histórico do GitHub permite recuperar versões anteriores.

## Imagens

Use JPG, PNG ou WebP, de preferência com até 1600 pixels de largura e tamanho abaixo de 400 KB. O painel não comprime as imagens automaticamente. Uma imagem horizontal funciona melhor como capa. Sem capa, o blog exibe um cartão com a identidade TopFácil.

## Outras pessoas da equipe

A configuração inicial usa login com GitHub. Depois de conectar o painel, configure os acessos dos demais editores no Pages CMS conforme as opções disponíveis para a conta. Não compartilhe sua senha pessoal. Convites e permissões devem ser testados com a conta de quem vai editar antes de entregar a operação.

## Referência para futuras alterações no blog

1. Revisar a prévia local do blog e do artigo de exemplo.
2. Aprovar o visual e decidir se o exemplo será publicado ou substituído por outro texto.
3. Enviar as mudanças para uma proposta de alteração no GitHub, mantendo a publicação principal intacta até a aprovação.
4. Confirmar a origem de publicação em **Settings → Pages**. Esta configuração é compatível com Jekyll nativo, publicando a partir da raiz da branch escolhida. Se o repositório usar um fluxo personalizado, adaptar esse fluxo antes da publicação.
5. Integrar as mudanças aprovadas e acompanhar a geração no GitHub Pages.
6. Conectar o Pages CMS, criar um rascunho de teste, verificar imagem e edição, e só então realizar uma publicação autorizada.

## Referências

- Pages CMS: https://pagescms.org/docs/quick-start/
- GitHub Pages com Jekyll: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll
