# WG Prime — site (HTML + CSS + JS)

## Rodar
Abra `index.html` no navegador, ou: `python3 -m http.server 8000` e acesse http://localhost:8000
(GSAP, Font Awesome e Google Fonts carregam via CDN — precisa de internet.)

## WhatsApp
`js/config.js` → `whatsappNumber` e `messages` (uma mensagem por produto). Todos os botões usam isso.

## Imagens (substitua/adicione, mesmo nome, .jpg)
- assets/images/products/churrasqueira-volante/ → hero.jpg (4:5), principal.jpg (5:4), detalhe-01.jpg, detalhe-02.jpg, detalhe-03.jpg (1:1)
- assets/images/products/fornos-pizza/principal.jpg (4:3)
- assets/images/products/grill-elevatorio/principal.jpg (4:3)
- assets/images/products/coifa-inox/principal.jpg (4:3)
- assets/images/gallery/galeria-01.jpg … galeria-06.jpg
- assets/images/brand/og-image.jpg (1200×630, compartilhamento social)
Sem a foto, aparece um placeholder com o caminho do arquivo.

## Marca
Logos SVG extraídas de WG-logo.pdf (sem redesenho) em assets/brand/. Cores: laranja #E24D13, marrom #3A2E28.
Complementares: creme #F6F1EA, areia #E9E1D6, laranja-escuro #C23F0B (fundo de botões, contraste AA com texto branco).
