# Imersao Front Links - Netflix Clone

Projeto front-end em HTML, CSS e JavaScript que simula:

- Uma tela de seleção de perfis estilo Netflix
- Uma pagina de catalogo com carrosséis dinâmicos
- Persistência de dados com localStorage (tema e perfil ativo)

## Funcionalidades

- Seleção de perfil na pagina inicial
- Salvamento do perfil ativo (nome e imagem) no localStorage
- Exibição do perfil selecionado no topo da pagina de catalogo
- Alternância de tema na tela inicial
- Layout responsivo para desktop e mobile
- Catalogo com categorias renderizadas via JavaScript modular

## Tecnologias

- HTML5
- CSS3
- JavaScript (ES Modules)

## Estrutura do projeto

```text
.
├── assets/
├── index.html
├── index.js
├── style.css
├── theme.js
├── README.md
└── catalogo/
	├── catalogo.html
	├── catalogo.css
	└── js/
		├── data.js
		├── main.js
		├── utils.js
		└── components/
			├── Card.js
			└── Carousel.js
```

## Fluxo de uso

1. Abra `index.html` no navegador.
2. Clique em um perfil.
3. O projeto salva automaticamente no localStorage:
   - `perfilAtivoNome`
   - `perfilAtivoImagem`
4. A pagina `catalogo/catalogo.html` le esses dados e atualiza nome/avatar no cabecalho.

## Como executar localmente

1. Abra a pasta do projeto no VS Code.
2. Inicie com Live Server (recomendado) ou abra `index.html` diretamente no navegador.
3. Navegue para o catalogo clicando em um perfil.

## Onde personalizar

- Perfis da tela inicial: `index.html`
- Logica de persistencia do perfil: `index.js`
- Tema claro/escuro: `theme.js`
- Layout da home: `style.css`
- Layout do catalogo: `catalogo/catalogo.css`
- Dados das categorias e cards: `catalogo/js/data.js`

## Possiveis melhorias

- Melhorar acessibilidade (atributos alt descritivos e foco por teclado)
- Criar fallback visual quando nao houver perfil salvo
- Adicionar busca e filtros no catalogo
- Integrar dados reais via API
