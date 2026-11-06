# AGENTS.md

Portfólio estático em HTML/CSS/JS (Davi Miguel). Sem passo de build, sem package.json, sem testes, sem CI.

## Estrutura
Todo o fonte fica em `portifolio/`:
- 6 páginas HTML: `index`, `sobre`, `projetos`, `habilidades`, `certificacoes`, `contato`
- `css/style.css`, `js/main.js`, `assets/logo.png`
- `Curriculo_Davi_Miguel.pdf` (arquivo para download do currículo — substitua pelo PDF real se houver)
Ponto de entrada: `portifolio/index.html`.
As páginas se referenciam umas às outras e aos assets com caminhos relativos — todos resolvidos dentro de `portifolio/`. Mantenha os arquivos nessa pasta ou ajuste os caminhos se mover algo.

## Como visualizar
Abra `portifolio/index.html` diretamente no navegador. Não é necessário servidor de desenvolvimento, instalação nem build.

## Idioma
Todo o conteúdo e os atributos `lang` estão em português (`pt-BR`).

## Tema
O botão claro/escuro grava `data-theme="dark"` ou `"light"` em `<html>` e persiste no `localStorage` com a chave `dm-theme`. Use as variáveis CSS existentes `--*` em `:root` / `[data-theme="dark"]` em vez de cores fixas.

## Animações
Elementos com a classe `.reveal` aparecem com fade-in via IntersectionObserver (adiciona `.in` quando entram na área visível), com fallback em `window.load`. Não remova `.reveal` de conteúdos que devem ser animados.

## Filtros (projetos e certificações)
Páginas `projetos.html` e `certificacoes.html` contêm botões `.filter-chip` com `data-category`. O JS em `js/main.js` esconde/mostra cards com `[data-category]` conforme o filtro selecionado ("Todos" mostra tudo). Ao adicionar novos cards, inclua o atributo `data-category` com a categoria correspondente.

## Páginas e conteúdo
- `projetos.html`: destaque do Éden (sistema de gestão condominial — módulo de ocorrências: morador registra, síndico gerencia; inclui login, documentos e landing page) + grid de cards agrupados por categoria (Tecnologia, Edição, UI/UX, Criação). Vídeos de edição linkados ao Google Drive.
- `certificacoes.html`: 12 cards de certificações filtráveis por Tecnologia, Desenvolvimento Profissional e Pessoal e Design. Quando "Todas" está ativo, a listagem aparece em ordem aleatória. Clicar em uma categoria mostra apenas ela; clicar novamente (ou em "Todas") retorna a todos em ordem aleatória.

## Botão "Baixar currículo"
Aponta para `Curriculo_Davi_Miguel.pdf` com atributo `download`. Coloque o PDF real nessa pasta para o download funcionar.

## Pontos de atenção
- `index.html` (linha 12) referencia o favicon `assets/minhamarca-removebg-preview.png`, que não existe (o asset real é `assets/logo.png`). Link quebrado pré-existente.
- Contato usa apenas links `mailto:` — não há backend de formulário.
- As fontes carregam do CDN do Google Fonts (requer rede).
- `projetos.html` linka para uma demo externa em `eden.gabsprojects.uk/...`.

## Comandos
Nenhum. Não há toolchain de teste/lint/build. Não invente comandos `npm` nem CI.
