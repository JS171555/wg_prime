<div align="center">
  <img src="assets/brand/wg-prime-horizontal-escuro.svg" alt="WG Prime" width="280" />

  # WG Prime — Fornos & Churrasqueiras

  **Site institucional para apresentar equipamentos em aço inox e facilitar pedidos de orçamento pelo WhatsApp.**

  [![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
  [![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=222222)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
  [![Font Awesome](https://img.shields.io/badge/Font%20Awesome-528DD7?style=for-the-badge&logo=fontawesome&logoColor=white)](https://fontawesome.com/)
</div>

---

## Sobre o projeto

A WG Prime é um site estático, responsivo e em português, desenvolvido com HTML, CSS e JavaScript. A página apresenta a churrasqueira de volante, os fornos de pizza, o grill elevatório e a coifa em inox, além de uma galeria, informações sobre a marca e chamadas para contato.

Os links de orçamento abrem conversas no WhatsApp com mensagens específicas para cada produto. O site também inclui navegação móvel, suporte a movimento reduzido e animações opcionais com GSAP e ScrollTrigger.

## Pré-requisitos

- Navegador moderno.
- Conexão com a internet para carregar Google Fonts, Font Awesome, GSAP e ScrollTrigger por CDN.
- Python 3, opcional, para iniciar um servidor local simples.

Não há instalação de pacotes nem etapa de build: o projeto pode ser servido diretamente como arquivos estáticos.

## Como executar

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/JS171555/wg_prime.git
cd wg_prime
```

Você pode abrir `index.html` diretamente no navegador. Para servir o site localmente, execute:

```bash
python3 -m http.server 8000
```

Depois, acesse [http://localhost:8000](http://localhost:8000).

## Configuração do WhatsApp

Edite `js/config.js` para alterar o número e as mensagens usadas nos botões de orçamento:

```js
window.WG_CONFIG = {
  whatsappNumber: "5511999999999", // código do país + DDD + número, somente dígitos
  messages: {
    geral: "Olá! Conheci a WG Prime pelo site e gostaria de solicitar um orçamento.",
    volante: "Tenho interesse na churrasqueira de volante.",
    forno: "Gostaria de informações sobre os fornos de pizza.",
    grill: "Gostaria de informações sobre o Grill Elevatório.",
    coifa: "Gostaria de informações sobre a coifa em inox."
  }
};
```

O JavaScript associa cada botão ao tipo de mensagem correspondente. O número configurado atualmente é um dado de contato do negócio; confirme-o antes de publicar uma cópia ou fazer alterações.

## Conteúdo e imagens

Os arquivos visuais ficam em `assets/`. As imagens usadas pelo HTML devem manter os caminhos referenciados em `index.html`.

| Conteúdo | Caminhos esperados |
| --- | --- |
| Logotipos e ícone | `assets/brand/wg-prime-horizontal-claro.svg`, `assets/brand/wg-prime-horizontal-escuro.svg` e `assets/brand/wg-prime-icone.svg` |
| Vídeos | `assets/videos/wg-prime.mp4`, `assets/videos/churrasqueira-volante.mp4` e `assets/videos/forno-pizza.mp4` |
| Detalhes da churrasqueira | `assets/images/products/churrasqueira-volante/detalhe-01.png`, `detalhe-02.png` e `detalhe-03.png` |
| Grill elevatório | `assets/images/products/grill-elevatorio/principal.jpg` |
| Coifa em inox | `assets/images/products/coifa-inox/principal.jpg` |
| Forno de pizza | `assets/images/products/fornos-pizza/principal.jpg` (referência prevista; adicione o arquivo ao incluir uma imagem estática para esse produto) |
| Galeria | `assets/images/gallery/galeria-01.jpg` até `galeria-06.jpg` (referências previstas no HTML) |
| Compartilhamento social | `assets/images/brand/og-image.jpg` (imagem Open Graph referenciada no HTML; idealmente 1200 × 630 px) |

Se um arquivo não estiver disponível, alguns elementos exibem um placeholder. Verifique os caminhos e os nomes dos arquivos ao substituir ou adicionar imagens.

## Estrutura do projeto

```text
wg_prime/
├── assets/
│   ├── brand/                 # Logotipos SVG e ícone
│   ├── images/                # Imagens dos produtos e galeria
│   └── videos/                # Vídeos usados nas seções do site
├── css/
│   └── style.css              # Estilos, layout responsivo e identidade visual
├── js/
│   ├── config.js              # Número e mensagens do WhatsApp
│   └── main.js                # Interações, menu, links e animações opcionais
├── index.html                 # Página principal
└── README.md
```

## Tecnologias e recursos

- **HTML5** para a estrutura semântica da página.
- **CSS3** para identidade visual, layouts responsivos e estados de interação.
- **JavaScript** sem frameworks para menu, navegação e geração dos links do WhatsApp.
- **Font Awesome 6** para ícones da interface.
- **GSAP 3 e ScrollTrigger** para animações opcionais; o conteúdo permanece acessível sem essas bibliotecas.
- **Google Fonts** com as famílias Fraunces e Manrope.

## Identidade visual

A paleta principal usa laranja `#E24D13` e marrom `#3A2E28`, complementados por creme `#F6F1EA` e areia `#E9E1D6`. As cores e tipografia do site estão definidas em `css/style.css`.

## Publicação

Por ser um site estático, pode ser publicado em qualquer serviço que hospede arquivos HTML, CSS, JavaScript e mídia. Em hospedagem por subpasta, confira se os caminhos relativos dos recursos continuam válidos.

---

<div align="center">
  Feito para apresentar a WG Prime e aproximar clientes do próximo projeto gourmet.
</div>
