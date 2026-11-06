# AGENTS.md

Portfólio estático em HTML/CSS/JS (Davi Miguel). Sem passo de build, sem package.json, sem testes, sem CI.

## Estrutura
- Todo o fonte fica em `portifolio/`: 5 páginas HTML (`index`, `sobre`, `projetos`, `habilidades`, `contato`) + `css/style.css` + `js/main.js` + `assets/logo.png`.
- Ponto de entrada: `portifolio/index.html`.
- As páginas se referenciam umas às outras e aos assets com caminhos relativos (`sobre.html`, `css/style.css`, `js/main.js`, `assets/logo.png`) — todos resolvidos dentro de `portifolio/`. Mantenha os arquivos nessa pasta ou ajuste os caminhos se mover algo.

## Como visualizar
Abra `portifolio/index.html` diretamente no navegador. Não é necessário servidor de desenvolvimento, instalação nem build. Um servidor estático funciona, mas é opcional.

## Idioma
Todo o conteúdo e os atributos `lang` estão em português (`pt-BR`).

## Tema
O botão claro/escuro grava `data-theme="dark"` ou `"light"` em `<html>` e persiste no `localStorage` com a chave `dm-theme`. Use as variáveis CSS existentes `--*` em `:root` / `[data-theme="dark"]` em vez de cores fixas.

## Animações
Elementos com a classe `.reveal` aparecem com fade-in via IntersectionObserver (adiciona `.in` quando entram na área visível), com fallback em `window.load`. Não remova `.reveal` de conteúdos que devem ser animados.

## Pontos de atenção
- `index.html` (linha 12) referencia o favicon `assets/minhamarca-removebg-preview.png`, que não existe (o asset real é `assets/logo.png`). Link quebrado pré-existente.
- Contato usa apenas links `mailto:` — não há backend de formulário.
- As fontes carregam do CDN do Google Fonts (requer rede).
- `projetos.html` linka para uma demo externa em `eden.gabsprojects.uk/...`.

## Comandos
Nenhum. Não há toolchain de teste/lint/build. Não invente comandos `npm` nem CI.
