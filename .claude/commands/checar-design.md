---
description: Compara uma seção implementada com o protótipo em design/ (ex.: /checar-design hero)
argument-hint: <seção ou componente>
---

Compare a implementação de **$ARGUMENTS** com o protótipo em `design/` (veja o mapa em `design/README.md`). Se houver prints em `design/screens/`, use-os como alvo visual.

Não altere código. Liste em uma tabela:

| Item | No design | No código | Diferença | Gravidade |

Verifique: textos (palavra por palavra), cores e opacidades, fontes, tamanhos e pesos, espaçamentos, raios, estados de hover e foco, animações (nome, duração, easing, atraso), comportamento abaixo de 1050px e de 800px, `prefers-reduced-motion` e acessibilidade (semântica, teclado, `aria`, contraste).

No fim, diga quais diferenças são intencionais (as "Correções conhecidas" do `CLAUDE.md`) e quais devem ser corrigidas.
