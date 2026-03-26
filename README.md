# Clone da Tela de Perfis Netflix

Projeto front-end simples que replica a tela de seleção de perfis no estilo Netflix, com suporte a tema claro/escuro e layout responsivo.

## Preview

A interface exibe:
- Título "Quem está assistindo?"
- Lista de perfis com imagem e nome
- Botão de alternância de tema (dark/light)

## Funcionalidades

- Estrutura semântica em HTML
- Estilização com CSS responsivo (desktop, tablet e mobile)
- Alternância de tema com JavaScript
- Persistência de tema com `localStorage`

## Tecnologias

- HTML5
- CSS3
- JavaScript (vanilla)

## Estrutura do projeto

```text
.
├── assets/
├── index.html
├── style.css
├── theme.js
└── README.md
```

## Como executar

1. Abra a pasta do projeto no VS Code.
2. Abra o arquivo `index.html` no navegador.

Opcional (recomendado): use a extensão Live Server no VS Code para atualizar automaticamente ao salvar alterações.

## Personalização rápida

- Para trocar nomes e fotos dos perfis, edite os itens em `index.html`.
- Para ajustar cores, fontes e responsividade, altere `style.css`.
- Para mudar a lógica de tema, ajuste `theme.js`.

## Melhorias futuras

- Adicionar animações de hover mais elaboradas
- Melhorar acessibilidade (ex.: textos alternativos nas imagens)
- Criar versão com dados dinâmicos (JSON/API)

## Autor

Projeto desenvolvido para prática de front-end na Imersão Front-End.
