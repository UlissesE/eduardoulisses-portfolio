# Plano de implementação — Portfólio EUPS (design → código)

Repositório: `UlissesE/eduardoulisses-portfolio` (Vite + React 19 + TypeScript + Tailwind v4 + Motion, deploy na Vercel).
Fonte da verdade do design: os arquivos `design/*.dc.html` (exportados do canvas "Portfólio EUPS — Protótipo").

---

## Princípios

1. **O design entra no repositório antes de qualquer código.** O Claude Code não enxerga o canvas do claude.ai; ele enxerga arquivos. Com `design/` no repo, todo pedido pode apontar para o trecho exato.
2. **Uma etapa por branch/PR (ou por commit), sempre revisável.** Nada de "faz o site inteiro".
3. **Portar, não reinventar.** Cores, textos, tamanhos e animações vêm do `.dc.html`. Mudanças de design são decisões suas, feitas de propósito.
4. **Conteúdo separado de componente.** Projetos, certificados e timeline viram dados tipados; os componentes só renderizam.
5. **Você precisa conseguir explicar cada decisão em entrevista.** Peça ao Claude Code para justificar escolhas e leia os diffs.

---

## Etapa 0 — Preparação (sem código de UI)

- Criar a branch `redesign/eups`.
- Descompactar o kit (`eups-redesign-kit.zip`) na raiz do repo → `CLAUDE.md`, `design/`, `docs/PLANO.md`, `.claude/commands/`.
  - `design/Portfolio.dc.html` → home
  - `design/WineCellar.dc.html`, `ClienteApp.dc.html`, `DashFlow.dc.html`, `AlertaSeguro.dc.html` → páginas de missão
  - `design/assets/EUPS.png` e `foto.png` (já existem em `src/assets/images/` como `EUPS.png` e `image.png`)
  - Nos `.dc.html`, `/_blob/e832fa3d…` = **EUPS.png** e `/_blob/1e8f5c32…` = **foto.png**. `CaseStudy.dc.html` = Wine Cellar.
- Tirar screenshots de cada prancheta no canvas (desktop 1440 e celular ~390) → `design/screens/`. Servem de alvo visual.
- Conferir o `CLAUDE.md` (já pronto no kit) e ajustar se quiser.
- Inventário: o checklist do fim deste documento é a lista de tudo que precisa existir. Marque conforme avançar.
- Commit: `chore: adiciona design de referência e guia do redesign`.

> Em cada etapa seguinte, use `/etapa <n>` no Claude Code. Para revisar uma seção pronta, use `/checar-design <seção>`.

## Etapa 1 — Fundação

- **Tokens** no Tailwind v4 (`@theme`): fundo `#08090b`, texto `#f3f1ec`, dourado `#DFAB75`, botão `#e8c8a4`, cinzas de texto, e o acento RGB de cada seção (Mercúrio, Vênus, Terra, Marte, Júpiter, Saturno, Urano, Netuno + uma cor por missão).
- **Fontes:** Space Grotesk (títulos), DM Sans (texto), JetBrains Mono (rótulos/código). Preferir `@fontsource` (self-host, sem request ao Google) — todas OFL.
- **CSS global:** reset, campo de estrelas, keyframes compartilhados (rise, twinkle, drift, oturn, pk), regra global de `prefers-reduced-motion`.
- **Estrutura de pastas** sugerida: `components/layout`, `components/ui` (CodeLabel, Planet, Button, Chip…), `sections/`, `pages/`, `data/` (projects.ts, certs.ts, timeline.ts com tipos).
- Limpar dependências que o design novo não usa (ex.: componentes ReactBits, `hamburger-react`) — só depois que nada depender delas.

## Etapa 2 — Esqueleto e componentes base

- `Header` (logo "eu.", nav, "Disponível para novas órbitas") **com menu mobile acessível** (o protótipo não tem), `Footer`, `ScrollRocket`.
- `PlanetSection` (props: planeta, acento, lado do planeta) — a maioria das seções usa o mesmo layout de duas colunas.
- `Planet` (superfícies CSS de cada planeta), `CodeLabel` (`// SOBRE MIM` + `about.ts`).
- Navegação por âncoras com `scroll-padding-top` para o header fixo.

## Etapa 3 — Hero

- Eclipse (SVG → componente ou arquivo em `public/`), órbitas, estrelas com drift.
- EUPS via `mask-image` sobre o PNG (permite trocar a cor pelo token).
- Título, linha `</> Desenvolvedor backend · Java` com cursor, botão `explorarProjetos()`, `// mission.init` no canto, texto vertical "UMA JORNADA EM CONSTANTE EXPANSÃO", "role para explorar".
- Animação de entrada (CSS ou Motion).

## Etapa 4 — Seções de conteúdo

- **Sobre:** foto em arco, textos, cartão "Em órbita agora" (mini órbita com Spring Boot/Oracle/DDD, pausa no hover) e "Fora do terminal".
- **Formação** e **Experiência:** timeline do Make (bp com as duas entregas).
- **Ferramentas:** editor `Stack.java` com builder (componente `CodeEditor` com destaque por spans) + blocos `server/`, `interface/`, `infra/`, `automation/`.
- **Trajetória (Saturno):** timeline com data | nó | card.

## Etapa 5 — Projetos

- Sistema orbital com os 4 cards girando e botão pausar/retomar.
- **Modal com `<dialog>` nativo** (melhoria sobre o protótipo: foco preso, Esc fecha, foco volta ao card).
- `ArchitectureFlow` (nós + fios com pacotes animados), reutilizado no modal e nas páginas de missão.
- Tudo alimentado por `data/projects.ts`.
- Atenção à acessibilidade: cards em movimento precisam continuar alcançáveis por teclado; considerar pausar a órbita ao focar.

## Etapa 6 — Certificações

- **Constelação:** estrelas como `<button>`, linhas SVG do grupo acendem, painel de detalhe.
- **Insígnias:** componente `MissionPatch` (SVG com nome em arco, cor por emissor, giro no hover).
- As duas versões ficam; dados vêm de `data/certs.ts`.

## Etapa 7 — Contato (satélite)

- Módulo com painéis solares, telemetria `contato.sh`, boot do terminal, e-mail, botões LinkedIn/GitHub/Currículo, propulsores, rastros de warp, Netuno ao fundo.

## Etapa 8 — Páginas de missão

- Adicionar roteamento (ex.: React Router) com `/missoes/:slug`.
- **Um template `MissionPage`** alimentado por dados (hero com planeta, painel de metadados, seções 01–05, diagrama, tabela, decisões, resultado, navegação anterior/próxima). As particularidades (estados do Alerta Seguro, camadas do ClienteApp, status por fases do DashFlow) viram blocos opcionais.
- Restauração de scroll ao trocar de página; página 404.
- Configurar rewrites na Vercel para as rotas do SPA.

## Etapa 9 — Animações e performance

- Scroll-driven (foguete, reveal) com `animation-timeline` + fallback; ou Motion `useScroll` se preferir suporte amplo.
- Pausar animações fora da tela (IntersectionObserver) — a página tem muitas animações infinitas.
- Imagens otimizadas (foto em WebP/AVIF com tamanhos), lazy loading abaixo da dobra.
- Meta: Lighthouse ≥ 90 em Performance e Acessibilidade.

## Etapa 10 — Responsivo e acessibilidade

- Testar 390, 768, 1024, 1440 contra os screenshots.
- Contraste (texto ≥ 4.5:1), foco visível, navegação completa por teclado (órbita, constelação, modal), `alt` nas imagens, decorativos com `aria-hidden`.
- `prefers-reduced-motion` desliga tudo que se move.

## Etapa 11 — Conteúdo real

Preencher todos os `[ ]`: mês da Global Solution e linha do Skillswap; papel no Wine Cellar e no Alerta Seguro; respostas das tabelas "por que essa escolha"; desafios; screenshots reais; anos e links de verificação dos certificados; repositório do DashFlow; PDF do currículo.

## Etapa 12 — SEO, deploy e README

- `<title>`, meta description, Open Graph com imagem, favicon, sitemap.
- Preview da Vercel na branch → revisar no celular → merge na `main`.
- README do repo explicando arquitetura e decisões (o portfólio também é um projeto avaliado).
- Opcional depois: versão em inglês (i18n).

---

## Como usar o Claude Code em cada etapa

1. Abrir o repo no Claude Code e usar **plan mode** antes de cada etapa.
2. Pedido modelo: *"Leia `CLAUDE.md` e a seção X de `design/Portfolio.dc.html`. Implemente só a Etapa N do plano. Porte fielmente cores, textos e animações. Não invente conteúdo. Ao final rode build e lint e me explique as decisões."*
3. Comparar o resultado com o screenshot da etapa (`npm run dev`).
4. Revisar o diff, fazer commit com mensagem clara, marcar o checklist.
5. Só então seguir para a próxima etapa.

---

## Checklist — inventário do design (nada pode ficar de fora)

**Global**
- [ ] Header: logo "eu.", nav (Sobre mim, Formação, Projetos, Trajetória, Contato ↗), "Disponível para novas órbitas" com ponto pulsando
- [ ] Foguete de rolagem fixo à direita, com chama animada
- [ ] Campo de estrelas contínuo
- [ ] Footer: "eu.", © 2026, "De volta ao Sol ↑"
- [ ] Reveal das seções ao rolar
- [ ] `prefers-reduced-motion`

**Hero**
- [ ] Eclipse com brilho pulsando · órbitas · estrelas em drift
- [ ] EUPS mascarado, inclinado, opacidade ~0.07
- [ ] Linha superior "~/eduardo-ulisses / portfolio" e "SISTEMA ONLINE · BASE: TERRA"
- [ ] "O PRÓXIMO PASSO É SEMPRE ALÉM" · nome · `</> Desenvolvedor backend · Java` com cursor
- [ ] Botão `explorarProjetos()` · `// mission.init` no canto · texto vertical · "role para explorar"

**Sobre (Mercúrio)**
- [ ] Foto em arco · textos
- [ ] Cartão "Em órbita agora" com mini órbita girando (pausa no hover)
- [ ] Cartão "Fora do terminal · modo descanso" com ícones

**Formação (Vênus) · Experiência (Terra)**
- [ ] Timelines com cards e hover no acento da seção
- [ ] bp: duas entregas

**Ferramentas (Marte)**
- [ ] Editor `Stack.java` (builder, numeração de linhas, cores de sintaxe, barra de status)
- [ ] Blocos server/ interface/ infra/ automation/ com chips

**Projetos (Júpiter)**
- [ ] 4 cards em órbita com contrarrotação · botão pausar/retomar
- [ ] Modal: planeta no cabeçalho, status, caminho do arquivo, diagrama animado, problema/abordagem/resultado, tags, `abrirMissão()`, repositório
- [ ] "Explorar no GitHub"

**Trajetória (Saturno)**
- [ ] 3 marcos com data | nó | card · marco atual pulsando

**Certificações (Urano)**
- [ ] Constelação: estrelas piscando, linhas do grupo acendem, painel de detalhe
- [ ] Insígnias: patches com nome em arco, giro no hover, "verificar ↗"

**Contato (Netuno)**
- [ ] Satélite flutuando, painéis solares, telemetria `contato.sh`, boot, e-mail, 3 botões, prompt com cursor, propulsores, rastros de warp

**Páginas de missão (×4)**
- [ ] Wine Cellar · ClienteApp · DashFlow · Alerta Seguro
- [ ] Planeta na cor da missão, metadados, seções 01–05, diagrama animado, navegação anterior/próxima
