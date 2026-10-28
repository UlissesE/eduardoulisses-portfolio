---
description: Implementa uma etapa do plano de redesign (ex.: /etapa 3)
argument-hint: <número da etapa>
---

Implemente **somente a Etapa $ARGUMENTS** de `docs/PLANO.md`.

1. Leia `CLAUDE.md`, `design/README.md` e `design/TOKENS.md`.
2. Leia o trecho correspondente em `design/*.dc.html` (CSS em `<helmet>`, markup em `<x-dc>`, dados no `<script>`).
3. Em plan mode, liste os arquivos que vai criar ou alterar, as dependências novas (se houver, com justificativa) e as decisões técnicas. Espere minha aprovação.
4. Implemente portando fielmente valores, textos e animações. Não invente conteúdo; mantenha os placeholders `[ ]`.
5. Rode `npm run build` e `npm run lint` e corrija o que quebrar.
6. Termine com:
   - resumo do que foi feito;
   - decisões técnicas explicadas (para eu saber defender em entrevista);
   - placeholders encontrados;
   - o que eu devo conferir no navegador (1440px e ~390px);
   - itens do checklist de `docs/PLANO.md` que esta etapa cobre;
   - sugestão de mensagem de commit.
