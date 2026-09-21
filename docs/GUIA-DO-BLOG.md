# Blog TopFácil — guia da equipe

## O que cada ferramenta faz

- **Pages CMS:** painel para escrever e editar artigos pelo navegador.
- **Jekyll:** transforma os artigos em páginas do site.
- **GitHub:** guarda o conteúdo e o histórico de alterações.
- **GitHub Pages:** hospeda as páginas no domínio da TopFácil.

O blog ficará em https://topfacilalojamentos.com.br/blog/. Cada artigo terá seu próprio endereço, como `/blog/como-planejar-o-alojamento-da-sua-equipe/`.

## Situação desta entrega

A configuração foi preparada localmente para revisão. O exemplo está como rascunho (`published: false`): não aparece na geração de produção. A conexão do Pages CMS e a publicação no GitHub ainda precisam ser concluídas após a revisão.

## Primeira conexão do painel

Depois de aprovar o blog e disponibilizar sua configuração no GitHub:

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

## Revisão e publicação inicial

1. Revisar a prévia local do blog e do artigo de exemplo.
2. Aprovar o visual e decidir se o exemplo será publicado ou substituído por outro texto.
3. Enviar as mudanças para uma proposta de alteração no GitHub, mantendo a publicação principal intacta até a aprovação.
4. Confirmar a origem de publicação em **Settings → Pages**. Esta configuração é compatível com Jekyll nativo, publicando a partir da raiz da branch escolhida. Se o repositório usar um fluxo personalizado, adaptar esse fluxo antes da publicação.
5. Integrar as mudanças aprovadas e acompanhar a geração no GitHub Pages.
6. Conectar o Pages CMS, criar um rascunho de teste, verificar imagem e edição, e só então realizar uma publicação autorizada.

## Referências

- Pages CMS: https://pagescms.org/docs/quick-start/
- GitHub Pages com Jekyll: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll
