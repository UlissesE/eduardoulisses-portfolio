# design/ — mapa do protótipo

Estes arquivos são o protótipo final do redesign, exportado de um canvas de design do claude.ai. **Eles não rodam fora daquele editor**: são referência para portar para React, não código para copiar.

## Arquivos

| Arquivo | O que é | Rota alvo |
|---|---|---|
| `Portfolio.dc.html` | Home completa | `/` |
| `WineCellar.dc.html` | Missão 01 — Wine Cellar Monitoring | `/missoes/wine-cellar` |
| `ClienteApp.dc.html` | Missão 02 — ClienteApp | `/missoes/clienteapp` |
| `DashFlow.dc.html` | Missão 03 — DashFlow | `/missoes/dashflow` |
| `AlertaSeguro.dc.html` | Missão 04 — Alerta Seguro | `/missoes/alerta-seguro` |
| `assets/EUPS.png` | Apelido manuscrito (PNG transparente), usado como máscara | já existe em `src/assets/images/EUPS.png` |
| `assets/foto.png` | Foto do Eduardo | já existe em `src/assets/images/image.png` |
| `screens/` | Prints de referência (adicionar manualmente) | — |

Links entre arquivos: `Portfolio.dc.html` → rota `/`. `CaseStudy.dc.html` (nome antigo, citado nos links internos) = `WineCellar.dc.html`.

URLs de imagem no formato `/_blob/<id>`:

- `/_blob/e832fa3d2aa724e6646937be19d10b84` = **EUPS.png**
- `/_blob/1e8f5c322a9f76f30b7ca134d6fddd1f` = **foto.png**

## Como ler um `.dc.html`

- `<head>` e `<script src="./support.js">`: runtime do editor. **Ignorar.**
- `<helmet><style>…</style></helmet>`: **todo o CSS** (classes, keyframes, media queries). É a principal fonte de valores exatos.
- Markup dentro de `<x-dc>…</x-dc>`: estrutura e textos. Muitos valores ficam em `style="…"` inline.
- Sintaxe de template:
  - `{{nome}}` → valor vindo de `renderVals()` (vira prop/estado/dado)
  - `<sc-for list="{{items}}" as="item">` → `items.map(item => …)`
  - `<sc-if value="{{cond}}">` → renderização condicional
  - `onClick="{{handler}}"` → handler React
  - `hint-placeholder-*` → ignorar
- `<script type="text/x-dc" data-dc-script data-props='…'>`: a lógica. A `class Component extends DCLogic` traz:
  - `this.state` → `useState`
  - arrays no `constructor` (projetos, certificados) → **mover para `src/data/*.ts`**
  - `renderVals()` → valores derivados
  - `data-props` → valores padrão de tema (ex.: `gold` = `#DFAB75`, `eupsOpacity` = `0.07`)
- Classes CSS do protótipo (`.ps`, `.pc`, `.rp`, `.mnode`…) são nomes curtos de protótipo. Use nomes claros nos componentes, mas preserve os valores.

## Home (`Portfolio.dc.html`) — seções na ordem

| # | id | Seção | Planeta / acento (RGB) | Componentes principais | Busque no arquivo |
|---|---|---|---|---|---|
| — | — | Header + foguete de rolagem | — | `Header`, `ScrollRocket` | `.hdr`, `.rtrack` |
| 1 | `inicio` | Hero | Sol / dourado | `Hero` (eclipse SVG, EUPS mask, `// mission.init`, texto vertical) | `HERO (versão combinada)` |
| 2 | `sobre` | Sobre | Mercúrio · 201,194,178 | `About`, cartões "Em órbita" e "Fora do terminal" | `SOBRE (Mercúrio)`, `.crew` |
| 3 | `formacao` | Formação | Vênus · 210,160,83 | `Education` (timeline) | `FORMAÇÃO (Vênus)` |
| 4 | `experiencia` | Experiência | Terra · 75,148,207 | `Experience` (timeline) | `EXPERIÊNCIA (Terra)` |
| 5 | `habilidades` | Ferramentas | Marte · 224,138,108 | `Tools`, `CodeEditor` (Stack.java), blocos | `FERRAMENTAS (Marte)` |
| 6 | `projetos` | Projetos | Júpiter · 188,143,92 | `Projects` (órbita), `ProjectDialog`, `ArchitectureFlow` | `PROJETOS (Júpiter`, `MODAL DO PROJETO` |
| 7 | `trajetoria` | Trajetória | Saturno · 222,196,140 | `Journey` (data · nó · card) | `TRAJETÓRIA (Saturno)` |
| 8 | `certificados` | Certificações | Urano · 103,195,202 | `Constellation` + `MissionPatch` (insígnias) | `CERTIFICADOS (Urano)`, `.sky`, `.badges` |
| 9 | `contato` | Contato (satélite) | Netuno · 85,127,216 | `Contact` (módulo satélite) | `CONTATO — módulo satélite` |
| — | — | Footer | — | `Footer` | `footer class="ft"` |

Os dados de projetos (`this.projects`, com nós de arquitetura, problema/abordagem/resultado, stack, repo e página) e de certificados (`this.certs`) estão no `<script>` do fim do arquivo.

## Páginas de missão — estrutura comum

Header com "← voltar ao portfólio" e caminho `missions/<arquivo>` · hero com planeta na cor da missão, título, lead e painel de metadados (tipo, status, papel, código) · `01 Contexto` · `02 Arquitetura` (diagrama animado + tabela) · `03 Decisões` (cards decisão/desafio) · `04 Resultado` · `05 Próximos passos / aprendizados` · navegação anterior/próxima.

Blocos específicos:

- Wine Cellar e Alerta Seguro: três estados (OK/Atenção/Crítico); o Alerta Seguro tem LEDs animados e prévia de LCD.
- ClienteApp: diagrama vertical de camadas, equivalências com o Spring.
- DashFlow: fluxo do motor de IA + faixa do domínio Java, status em fases.

Cor de cada missão (RGB): Wine Cellar 214,146,122 · ClienteApp 199,164,119 · DashFlow 129,178,165 · Alerta Seguro 150,168,224.
