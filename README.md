# Williane Monteiro Studio — Landing Page

Landing page premium para o Williane Monteiro Studio (Designer & Penteadista Profissional),
construída com React + Vite + Tailwind CSS v4 + Framer Motion, mobile-first.

**Direção visual:** editorial de luxo em tema escuro — fundo quase preto quente,
tipografia serifada em itálico, acentos em terracota/cobre/rosé, orbes de gradiente
como atmosfera, textura de grão sutil, título do Hero com revelação letra a letra,
parallax discreto na imagem de reflexo e uma faixa de texto em movimento (marquee)
entre o Hero e a seção Sobre.

## Como rodar o projeto

```bash
npm install
npm run dev        # ambiente de desenvolvimento (http://localhost:5173)
npm run build      # gera a versão de produção em /dist
npm run preview    # serve a versão de produção localmente
```

## Onde editar as informações principais

- `src/data/config.js` — nome, WhatsApp, Instagram, links do menu
- `src/data/prices.js` — todos os valores (sobrancelhas, penteados, babyliss)
- `src/data/services.js` — índice de categorias exibido na seção "Serviços"

**Importante:** antes de publicar, insira o link real do WhatsApp em
`whatsappUrl` (formato `https://wa.me/55DDDNUMERO`) e o link do Instagram em
`instagramUrl`, dentro de `src/data/config.js`. Esses valores alimentam o
header, o CTA final, o rodapé e o botão flutuante do WhatsApp.

## Substituindo as imagens

As imagens atuais em `public/assets/images/` são placeholders gerados
(gradientes com o nome do arquivo). Basta substituir cada arquivo pelo mesmo
nome e caminho para que as fotos reais apareçam automaticamente.

**Inventário exato de imagens usado no projeto** (ajustado para a quantidade
de fotos reais que você tem hoje):

```
hero/capa.jpg          → foto de capa (usada no Hero E na seção "Sobre Mim")
hero/reflexo.jpg       → foto decorativa de fundo/reflexo, atrás do Hero

eyebrows/designer-henna.jpg       → Designer com Henna — R$ 40,00
eyebrows/designer-feminino.jpg    → Designer Feminino — R$ 30,00
eyebrows/designer-masculino.jpg   → Designer Masculino — R$ 25,00
eyebrows/so-henna.jpg             → Só Henna — R$ 20,00

hairstyles/basico-pequeno.jpg     → Penteado Básico, cabelo pequeno — R$ 60,00
hairstyles/basico-medio.jpg       → Penteado Básico, cabelo médio — R$ 70,00
hairstyles/basico-grande.jpg      → Penteado Básico, cabelo grande — R$ 80,00

hairstyles/elaborado-01.jpg       → foto de portfólio (Penteados Elaborados)
hairstyles/elaborado-02.jpg       → foto de portfólio (Penteados Elaborados)
hairstyles/elaborado-03.jpg       → foto de portfólio (Penteados Elaborados)
hairstyles/elaborado-04.jpg       → foto de portfólio (Penteados Elaborados)
hairstyles/elaborado-05.jpg       → foto de portfólio (Penteados Elaborados)
                                     — valores (R$70/80/90) ficam em texto,
                                       ao lado das fotos, não sobre a imagem

hairstyles/babyliss.jpg           → única foto do Babyliss (valores no texto ao lado)
```

Não existe mais uma aba "Meus Trabalhos" separada — as seções de Sobrancelhas
e Penteados, com fotos e valores lado a lado, já cumprem esse papel de
portfólio. A foto de capa (`hero/capa.jpg`) aparece uma única vez, no Hero;
a seção "Sobre Mim" não usa foto própria, apenas texto.

Onde a quantidade de fotos corresponde exatamente à quantidade de valores
(Sobrancelhas, Penteado Básico), o preço fica sobreposto na própria imagem.
Onde isso não é possível (Elaborados e Babyliss, com menos fotos do que
tamanhos de preço), o valor aparece em uma pequena lista de texto ao lado das
fotos, na mesma seção — nunca em um bloco de "Valores" à parte. Para alterar
um valor, edite `src/data/prices.js`, que alimenta automaticamente todas as
legendas e listas de preço.

Recomenda-se converter as fotos finais para `.webp` ou `.avif` para melhor
performance (o projeto já está preparado para lazy loading e dimensões
consistentes, evitando layout shift).

## Estrutura

```
src/
├── components/       # Header, Hero, Marquee, About, Services (índice enxuto),
│                      # Eyebrows, Hairstyles, Policy, PaymentMethods,
│                      # BookingCTA, Footer, WhatsappFloat, GradientOrb,
│                      # GrainOverlay, Reveal (helper de animação)
├── data/              # config.js, prices.js, services.js (índice)
├── assets/            # logo e imagens usadas via import
└── App.jsx / main.jsx / index.css
```

**Nota sobre a seção "Serviços":** ela funciona como um índice enxuto
(Sobrancelhas / Penteados / Epilação) que leva às seções detalhadas — as
fotos e valores de cada categoria aparecem uma única vez, nas seções
dedicadas (`Eyebrows.jsx` e `Hairstyles.jsx`), evitando repetir a mesma
imagem e o mesmo preço em dois lugares da página.

## Identidade visual

Paleta escura derivada da logo (fundo quase preto, terracota, cobre, rosé,
creme quente para textos/headings). Tipografia: Cormorant Garamond (títulos,
com uso de itálico como assinatura) + Manrope (textos), carregadas via Google
Fonts em `index.html`.

**Elementos de assinatura:**
- Reflexo — imagem decorativa deslocada para a lateral no Hero, com parallax
  sutil ao rolar (`Hero.jsx`, usa `useScroll`/`useTransform` do Framer Motion)
- Título do Hero com revelação letra a letra (kinetic type)
- `Marquee.jsx` — faixa de texto em loop contínuo entre o Hero e o Sobre
- `GradientOrb.jsx` — formas abstratas em gradiente usadas como atmosfera de
  fundo em várias seções (sem ilustrações)
- `GrainOverlay.jsx` — textura de grão fixa sobre toda a página
- CTA final invertido (`BookingCTA.jsx`) — único bloco claro sobre o fundo
  escuro, criando um momento de destaque antes do rodapé

## Acessibilidade e performance

- HTML semântico, H1 único, aria-labels nos botões de ícone
- `prefers-reduced-motion` respeitado (desativa animações automaticamente)
- Imagens fora do Hero usam `loading="lazy"`; a imagem do Hero usa
  `fetchpriority="high"` para otimizar o LCP
- Foco de teclado visível em toda a página
