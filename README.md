# TopFácil Alojamentos - Site Institucional

Site moderno e responsivo para a TopFácil Alojamentos, empresa especializada em alojamentos profissionais em Luís Eduardo Magalhães - BA.

## 🚀 Características

- **Design Moderno**: Interface limpa e profissional
- **Totalmente Responsivo**: Otimizado para mobile, tablet e desktop
- **Performance Otimizada**: Carregamento rápido e SEO-friendly
- **Acessibilidade**: Seguindo as melhores práticas de acessibilidade web
- **Fácil Manutenção**: Código limpo e bem organizado

## 📁 Estrutura do Projeto

```
topfacil-site/
├── index.html          # Página principal
├── styles.css          # Estilos CSS
├── script.js           # JavaScript interativo
├── README.md           # Este arquivo
└── assets/             # Pasta para imagens e recursos
    └── favicon.ico     # Ícone do site
```

## 🎨 Design System

### Cores
- **Primária**: Azul escuro (#1e3a8a) - Transmite confiança e seriedade
- **Secundária**: Cinza (#64748b) - Neutralidade e sofisticação
- **Acento**: Azul médio (#3b82f6) - Destaque e interação
- **Branco**: (#ffffff) - Limpeza e clareza

### Tipografia
- **Fonte Principal**: Inter (Google Fonts)
- **Hierarquia**: Tamanhos bem definidos para diferentes níveis de informação

## 📱 Seções do Site

1. **Header/Navegação**: Menu fixo com navegação suave
2. **Hero Section**: Apresentação principal com call-to-action
3. **Destaques**: Cards com informações principais
4. **Quem Somos**: História e propósito da empresa
5. **Alojamentos**: Detalhes da estrutura e infraestrutura
6. **Locação de Máquinas**: Serviço adicional
7. **Expansão**: Planos futuros da empresa
8. **Contato**: Formulário e informações de contato
9. **Footer**: Links e informações complementares

## ⚙️ Funcionalidades

### JavaScript
- Menu mobile responsivo
- Scroll suave entre seções
- Formulário de contato funcional
- Animações de scroll
- Botão WhatsApp flutuante
- Botão "Voltar ao topo"
- Validação de formulários
- Formatação automática de telefone

### CSS
- Design mobile-first
- Grid e Flexbox para layouts
- Animações CSS
- Variáveis CSS para fácil customização
- Media queries para responsividade

## 🚀 Como Usar

### 1. Visualização Local
```bash
# Navegue até a pasta do projeto
cd topfacil-site

# Abra o arquivo index.html no navegador
open index.html
```

### 2. Deploy no GitHub Pages

1. Crie um repositório no GitHub
2. Faça upload dos arquivos do projeto
3. Vá em Settings > Pages
4. Selecione a branch main
5. O site estará disponível em: `https://seu-usuario.github.io/seu-repositorio`

### 3. Deploy em Outros Serviços

#### Vercel
```bash
# Instale o Vercel CLI
npm i -g vercel

# Deploy
vercel
```

#### Netlify
- Arraste a pasta do projeto para o Netlify
- Ou conecte com seu repositório GitHub

## 🔧 Personalização

### Alterando Cores
Edite as variáveis CSS no arquivo `styles.css`:

```css
:root {
    --primary-color: #1e3a8a;    /* Cor principal */
    --secondary-color: #64748b;  /* Cor secundária */
    --accent-color: #3b82f6;     /* Cor de destaque */
}
```

### Adicionando Imagens
1. Crie uma pasta `assets/images/`
2. Adicione suas imagens
3. Substitua os placeholders no HTML:

```html
<!-- Antes -->
<div class="hero-placeholder">
    <i class="fas fa-building"></i>
    <p>Imagem do alojamento</p>
</div>

<!-- Depois -->
<img src="assets/images/hero-image.jpg" alt="Alojamento TopFácil" class="hero-image">
```

### Configurando WhatsApp
Edite o link do WhatsApp no arquivo `index.html`:

```html
<a href="https://wa.me/5500000000000" class="whatsapp-btn" target="_blank">
```

Substitua `5500000000000` pelo número real (formato: código do país + DDD + número).

### Configurando Formulário de Contato
Para tornar o formulário funcional, você pode usar:

#### EmailJS
1. Crie uma conta em [emailjs.com](https://www.emailjs.com/)
2. Configure o template de e-mail
3. Adicione o código no `script.js`:

```javascript
// No evento submit do formulário
emailjs.send('service_id', 'template_id', {
    name: name,
    email: email,
    phone: phone,
    message: message
});
```

#### Formspree
1. Crie uma conta em [formspree.io](https://formspree.io/)
2. Adicione o action no formulário:

```html
<form action="https://formspree.io/f/seu-form-id" method="POST">
```

## 📊 SEO e Performance

### Meta Tags
O site já inclui meta tags básicas para SEO:
- Title otimizado
- Description
- Keywords
- Viewport para mobile

### Performance
- CSS e JS minificados (recomendado para produção)
- Imagens otimizadas
- Lazy loading implementado
- Debounce em eventos de scroll

## 🔍 Testes

### Responsividade
Teste o site em diferentes dispositivos:
- Mobile (320px - 768px)
- Tablet (768px - 1024px)
- Desktop (1024px+)

### Navegadores
Testado e compatível com:
- Chrome (recomendado)
- Firefox
- Safari
- Edge

## 📝 Próximos Passos

### Melhorias Sugeridas
1. **Galeria de Fotos**: Adicionar fotos reais dos alojamentos
2. **Blog/Notícias**: Seção para atualizações da empresa
3. **Depoimentos**: Testemunhos de clientes
4. **Mapa Interativo**: Localização no Google Maps
5. **Chat Online**: Integração com chat ao vivo
6. **Analytics**: Google Analytics para métricas

### Integrações Futuras
- Google Analytics
- Google Maps
- Facebook Pixel
- Chat ao vivo
- Sistema de reservas online

## 🛠️ Manutenção

### Atualizações Regulares
- Verificar links quebrados
- Atualizar informações de contato
- Adicionar novas fotos
- Revisar conteúdo

### Backup
- Mantenha backup do código
- Use controle de versão (Git)
- Faça backup das imagens

## 📞 Suporte

Para dúvidas ou suporte técnico:
- **E-mail**: contato@topfacilalojamentos.com.br
- **WhatsApp**: (XX) XXXX-XXXX

## 📄 Licença

Este projeto foi desenvolvido especificamente para a TopFácil Alojamentos. Todos os direitos reservados.

---

**Desenvolvido com ❤️ para TopFácil Alojamentos**
## Blog com Jekyll e Pages CMS

O blog usa o visual do site e fica em `/blog/`. A configuração do painel está em `.pages.yml`, os artigos em `_posts/` e os modelos em `_layouts/`.

- [Guia de administração para a equipe](docs/GUIA-DO-BLOG.md)
- [Ambiente local e validação](docs/DESENVOLVIMENTO-BLOG.md)

O artigo de exemplo é um rascunho e não é incluído na publicação padrão.
