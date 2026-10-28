# CLAUDE.md — Portfólio de Eduardo Ulisses (redesign "EUPS")

Este arquivo é lido em toda sessão. Siga-o antes de qualquer outra suposição.

## O projeto

- Portfólio pessoal de **Eduardo Ulisses** (GitHub `UlissesE`), estudante de Engenharia de Software (FIAP, 4º semestre) e estagiário de tecnologia (Dados & Automação) na bp bioenergy.
- **Objetivo:** conseguir entrevistas para **estágio em desenvolvimento backend Java** na Grande São Paulo.
- **Público:** recrutadores (30–60 s no site) e tech leads (querem ver raciocínio de engenharia: arquitetura, decisões, trade-offs).
- **Idioma:** português do Brasil. Versão em inglês é opcional e fica para o fim.
- Em andamento: **redesign completo** com tema sci-fi espacial ("viagem pelo sistema solar"). "EUPS" é o apelido do Eduardo e aparece como marca d'água no hero.

## Stack e comandos

- Vite 7 · React 19 · TypeScript ~5.9 · Tailwind CSS v4 (`@tailwindcss/vite`) · Motion 12 (`motion/react`) · lucide-react.
- Roteamento: **ainda não existe**. Será adicionado na Etapa 8 (páginas de missão em `/missoes/:slug`).
- Deploy: Vercel (SPA → precisa de rewrite para as rotas).
- Comandos: `npm run dev` · `npm run build` (inclui `tsc -b`) · `npm run lint` · `npm run preview`.
- Dependências do layout antigo (`gsap`, `hamburger-react`, `react-icons`, componentes em `src/components/reactBits/`) **só podem ser removidas depois que nada mais depender delas**.

## Fonte da verdade do design

O design final está em **`design/`** (exportado de um protótipo no claude.ai). Leia **`design/README.md`** antes de implementar qualquer seção: ele explica o formato dos arquivos `.dc.html`, mapeia seções → arquivos → componentes e lista os assets.

- Home: `design/Portfolio.dc.html`
- Missões: `design/WineCellar.dc.html`, `design/ClienteApp.dc.html`, `design/DashFlow.dc.html`, `design/AlertaSeguro.dc.html`
- Tokens (cores, fontes, escalas, animações): `design/TOKENS.md`
- Plano por etapas e checklist de tudo que existe no design: `docs/PLANO.md`

**Porte fielmente.** Cores, textos, tamanhos, espaçamentos e animações vêm do `.dc.html`. Não "melhore" o visual por conta própria. Se algo no design parecer errado, aponte e pergunte antes de mudar. As exceções já aprovadas estão em "Correções conhecidas", abaixo.

## Regras de trabalho

1. **Uma etapa do `docs/PLANO.md` por vez.** Não adiante etapas nem faça "o site inteiro".
2. Comece cada etapa em **plan mode**: diga quais arquivos vai criar/alterar e por quê, e espere aprovação.
3. **Nunca invente conteúdo** sobre o Eduardo (experiências, datas, números, links, papéis). Textos entre colchetes no design, como `[MÊS]` ou `[link da credencial]`, são placeholders: mantenha-os como estão e liste-os no fim da etapa.
4. **Conteúdo fica em dados, não em componentes:** projetos, certificados, timeline e textos repetidos vão para `src/data/*.ts`, com tipos.
5. Ao terminar uma etapa: rode `npm run build` e `npm run lint` e corrija os erros. Depois resuma o que foi feito, as decisões técnicas (o Eduardo precisa saber explicá-las em entrevista) e o que ele deve conferir visualmente.
6. Não afirme que algo "está igual ao design" sem ter comparado. Diga o que o Eduardo deve checar no navegador (desktop 1440px e celular ~390px).
7. Commits pequenos, um por etapa ou sub-etapa, com mensagens claras em português (ex.: `feat(hero): eclipse, EUPS e animação de entrada`).
8. Responda em português do Brasil. Termos técnicos podem ficar em inglês.

## Arquitetura alvo

```
src/
  styles/         tokens (@theme), CSS global, keyframes compartilhados
  data/           projects.ts, certs.ts, timeline.ts, site.ts (tipados)
  components/
    layout/       Header, Footer, ScrollRocket, Starfield
    ui/           CodeLabel, Planet, Button, Chip, CodeEditor, ArchitectureFlow, MissionPatch…
  sections/       Hero, About, Education, Experience, Tools, Projects, Journey, Certifications, Contact
  pages/          Home, MissionPage, NotFound
```

- `PlanetSection` é o layout de duas colunas (texto + planeta, lados alternados) usado pela maioria das seções.
- `ArchitectureFlow` é **um único componente** reutilizado no modal de projetos e nas páginas de missão.
- `MissionPage` é **um único template** alimentado por `data/projects.ts`. As particularidades de cada missão viram blocos opcionais.

## Requisitos não negociáveis

- **Acessibilidade (WCAG 2.2 AA):** HTML semântico, foco visível, tudo operável por teclado, contraste ≥ 4.5:1 (o design já passa; não escureça textos), `alt` em imagens com conteúdo, `aria-hidden` em decoração, áreas de toque ≥ 44px.
- **`prefers-reduced-motion`:** desliga todas as animações contínuas e de entrada.
- **Performance:** animações só com `transform`/`opacity` quando possível. Pausar animações infinitas fora da tela (IntersectionObserver). Imagens otimizadas e lazy abaixo da dobra. Fontes self-hosted (`@fontsource`, licença OFL).
- Sem dependências novas sem justificar o motivo e o peso.

## Correções conhecidas (aplicar na implementação)

O protótipo tem limitações que o código deve resolver:

- **Menu mobile:** no protótipo, a nav some abaixo de 800px sem alternativa. Implementar um menu acessível (botão com `aria-expanded`, fecha com Esc e ao clicar num link).
- **Modal de projeto:** usar `<dialog>` nativo (`showModal`), com foco no primeiro elemento, Esc fecha e o foco volta para o card de origem.
- **Órbita de projetos:** pausar também em hover e quando um card recebe foco. Manter o botão pausar/retomar.
- Texto que precisa ser lido deve ter no mínimo 12px; 11px só em decoração.
- "Contato ↗" na nav é âncora interna: use "↓" ou nenhuma seta.

## Decisões em aberto (perguntar ao Eduardo; não decidir sozinho)

- Linha de contexto no hero ("Estudante de Eng. de Software (FIAP) · buscando estágio em backend · São Paulo") e "Disponível para estágio" no header.
- Botão de Currículo no header.
- Lista de projetos no celular no lugar da órbita.
- Controle global "reduzir animações".
- Certificações: por ora **manter as duas versões** (constelação e insígnias), decisão do Eduardo.
