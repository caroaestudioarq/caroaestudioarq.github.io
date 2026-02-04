# Estúdio Caroá - Portfolio Website

Website portfólio minimalista para escritório de arquitetura, desenvolvido com Next.js, TypeScript e Tailwind CSS.

## Stack Tecnológica

- **Framework:** Next.js 16 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Deploy:** GitHub Pages

## Estrutura do Projeto

```
├── src/
│   ├── app/                 # Páginas (App Router)
│   │   ├── page.tsx         # Home
│   │   ├── sobre/           # Página Sobre
│   │   ├── interiores/      # Projetos de Interiores
│   │   ├── design/          # Projetos de Design
│   │   ├── mostras/         # Projetos de Mostras
│   │   ├── incorporacao/    # Projetos de Incorporação
│   │   ├── comercial/       # Projetos Comerciais
│   │   ├── contato/         # Página de Contato
│   │   └── projeto/[slug]/  # Página dinâmica de projeto
│   ├── components/          # Componentes reutilizáveis
│   │   ├── Header.tsx       # Menu de navegação
│   │   ├── Footer.tsx       # Rodapé
│   │   ├── Hero.tsx         # Seção hero da home
│   │   ├── ProjectCard.tsx  # Card de projeto
│   │   ├── ProjectGrid.tsx  # Grid de projetos
│   │   ├── ImageGallery.tsx # Galeria com lightbox
│   │   └── ContactForm.tsx  # Formulário de contato
│   └── data/                # Dados estáticos
│       ├── projects.json    # Lista de projetos
│       └── content.json     # Textos institucionais
├── public/
│   └── images/projects/     # Imagens dos projetos
└── .github/workflows/
    └── deploy.yml           # CI/CD para GitHub Pages
```

## Desenvolvimento Local

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run dev

# Abrir http://localhost:3000
```

## Build e Deploy

### Build Local
```bash
npm run build
```
Os arquivos estáticos serão gerados na pasta `out/`.

### Deploy para GitHub Pages

O deploy é automático via GitHub Actions. A cada push na branch `main`, o workflow:

1. Instala as dependências
2. Executa o build
3. Faz deploy para GitHub Pages

**Configuração necessária no GitHub:**
1. Vá em Settings > Pages
2. Em "Build and deployment", selecione "GitHub Actions"

## Personalização

### Adicionar Novos Projetos

Edite o arquivo `src/data/projects.json`:

```json
{
  "id": "nome-projeto",
  "slug": "nome-projeto",
  "title": "Nome do Projeto",
  "category": "interiores",
  "subcategory": "apartamentos",
  "coverImage": "/images/projects/nome-projeto-cover.jpg",
  "description": "Descrição do projeto...",
  "gallery": [
    "/images/projects/nome-projeto-1.jpg",
    "/images/projects/nome-projeto-2.jpg"
  ]
}
```

### Alterar Informações de Contato

Edite o arquivo `src/data/content.json`.

### Adicionar Imagens

Coloque as imagens na pasta `public/images/projects/` e atualize os caminhos no `projects.json`.

## Funcionalidades

- Design minimalista e responsivo
- Menu mobile hamburger
- Grid de projetos com hover effects
- Galeria de imagens com lightbox
- Navegação entre projetos (anterior/próximo)
- Formulário de contato
- SEO otimizado
- Exportação estática para GitHub Pages

## Licença

MIT
