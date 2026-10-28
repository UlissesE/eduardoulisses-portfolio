# Tokens do design

Valores extraídos do protótipo (`design/Portfolio.dc.html` e páginas de missão). Em caso de dúvida, o `.dc.html` prevalece.

## Cores base

| Token | Valor | Uso |
|---|---|---|
| `bg` | `#08090b` | fundo de toda a página |
| `surface` | `#0e0f12` / `#101218` / `#121316` | cards, editor, nós de diagrama |
| `text` | `#f3f1ec` | texto principal e títulos |
| `text-body` | `#c9c5bd` | parágrafos de destaque |
| `text-muted` | `#a7aaae` | parágrafos comuns (8,5:1) |
| `text-subtle` | `#a2a3a1` | 2ª linha dos títulos h2 |
| `mono-muted` | `#8f959c` / `#9aa0a6` | rótulos mono secundários (≥ 6,5:1) |
| `label` | `#c2a886` | rótulos `// SEÇÃO` |
| `gold` | `#DFAB75` | ponto do logo, acentos do hero, EUPS |
| `btn` / `btn-border` / `btn-text` / `btn-hover` | `#e8c8a4` / `#e3be94` / `#211b16` / `#ffdfbc` | botão primário |
| `line` / `line-strong` | `#ffffff12` / `#ffffff24` | bordas e divisórias |
| `ok` | `#b5c8a1` | status "concluído", pontos "ao vivo" |
| `running` | `#8fc1ea` | status "em andamento" |
| `contact-btn` / texto | `#c7d6e6` / `#141a22` | botão primário do contato |
| Emissores | AWS `#F2A33A` · FIAP `#EE5A86` | insígnias de certificação |

## Acento por seção (RGB, usado como `rgba(var(--a), α)`)

Sobre `201,194,178` · Formação `210,160,83` · Experiência `75,148,207` · Ferramentas `224,138,108` · Projetos `188,143,92` · Trajetória `222,196,140` · Certificações `103,195,202` · Contato `85,127,216`.

Hover padrão de card/bloco: fundo `rgba(acc, .14)` e borda `rgba(acc, .45)`.

## Cards em órbita (gradientes radiais, `circle at 30% 20%`)

`orbit` `#4f566c → #181e2b → #0a0d14` · `cosmos` `#7d6346 → #2a2018 → #110e0b` · `trajectory` `#456b64 → #132e2a → #091411` · `ember` `#7a4a40 → #2b1714 → #120a09`.

As superfícies de cada planeta (Mercúrio a Netuno) são gradientes CSS em `.mercury`, `.venus` etc. no `<helmet>` do `Portfolio.dc.html`. Copie-os exatamente.

## Tipografia (Google Fonts, licença OFL; preferir `@fontsource`)

| Papel | Família | Pesos |
|---|---|---|
| Títulos (h1–h3), logo | Space Grotesk | 400, 500, 600, 700 |
| Texto | DM Sans | 300, 400, 500, 600, 700 |
| Rótulos, código, botões "função()" | JetBrains Mono | 400, 500 |

| Elemento | Tamanho | Outros |
|---|---|---|
| h1 hero | `clamp(52px, 8.4vw, 124px)` | peso 500, line-height 1, letter-spacing −.06em |
| h2 seção | `clamp(30px, 3.1vw, 45px)` | peso 400, lh 1.25, ls −1.7px; 2ª linha em `text-subtle` |
| h2 página de missão (h1) | `clamp(48px, 7.4vw, 104px)` | peso 500, lh .95, ls −.055em |
| Corpo | 16–17px | lh 1.75–1.85 |
| Rótulo mono | 12px | ls 1.2px (mínimo 12px para texto lido) |
| Logo "eu." | 34px | peso 700, ls −3px |

## Layout

- Seção de planeta: `padding: 105px 8%`, grid `1fr 1fr`, `gap: 8%`, `min-height: 640px`. Planeta com até 480px, lados alternados.
- Páginas de missão: container `max-width: 1100px`, `padding: 0 24px`, seções com 90px de distância.
- Header: 84px, sticky, `rgba(8,9,11,.82)` + `backdrop-filter: blur(12px)`.
- Breakpoints do protótipo: `1050px` (órbita menor) e `800px` (uma coluna, nav escondida → **implementar menu**).
- Raios: escala recomendada **4 / 10 / 20 / 999** (o protótipo varia entre 3–12px; unificar).

## Animações (keyframes do protótipo)

| Nome | O que faz | Duração |
|---|---|---|
| `rise` | entrada: translateY(24px) + blur(8px) → 0 | 1.2s, cubic-bezier(.16,.8,.2,1), atrasos escalonados |
| `drift` | estrelas do hero se deslocam | 180s linear ∞ |
| `eglow` | eclipse pulsa a opacidade | 12s ∞ |
| `pdrift` | planetas flutuam 12px | 12s ∞ |
| `oturn` | rotação de órbita (rotor + contrarrotação dos cards) | 80s (projetos) · 40s (mini órbita) |
| `mpk` / `pk` / `vpk` | pacote de luz percorre um fio do diagrama | 2.2–2.8s, atraso de meio ciclo no 2º pacote |
| `twinkle` | estrela da constelação pisca | 3.2s ∞ |
| `cruise` | satélite do contato balança | 7s ∞ |
| `warp` | rastros horizontais no contato | 1.1–2.4s ∞ |
| `thrust` | chama do foguete / propulsores | .4–.7s alternate ∞ |
| `live` / `live3` | pulso dos pontos "ao vivo" | 2.2–2.4s ∞ |
| `blink` | cursor do terminal e do cargo | 1–1.2s steps ∞ |
| `fly` | foguete desce com a rolagem | `animation-timeline: scroll(root)` |
| `reveal` | seção aparece ao entrar na tela | `animation-timeline: view()` (com fallback) |

Todas desligam com `prefers-reduced-motion: reduce`.
