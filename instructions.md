# Documentação de Desenvolvimento de Software: Très Arquitetura

## 1. Visão Geral do Projeto

O objetivo é desenvolver um website portfólio para um escritório de arquitetura de alto padrão. O site deve transmitir sofisticação, minimalismo e foco visual (imagens dos projetos). A navegação deve ser fluida e a estrutura otimizada para SEO (Search Engine Optimization).

**Nível de Desenvolvimento:** Front-end avançado com gerenciamento de conteúdo estático ou via CMS Headless.
**Estilo Visual:** Minimalista, tipografia limpa, uso de espaço em branco (white space), paleta de cores neutra (preto, branco, cinza), foco em fotografia de alta resolução.

---

## 2. Arquitetura Técnica (Tech Stack)

Para garantir performance, SEO e facilidade de manutenção, recomenda-se a seguinte stack:

* **Framework Principal:** [Next.js](https://nextjs.org/) (React) - Permite renderização estática (SSG) para carregamento instantâneo.
* **Estilização:** [Tailwind CSS](https://tailwindcss.com/) - Para desenvolvimento rápido de layouts responsivos e customizáveis.
* **Linguagem:** TypeScript - Para tipagem segura e melhor manutenção do código.
* **Gerenciamento de Dados:** Arquivos locais (JSON/Markdown) ou CMS Headless (ex: Sanity.io ou Contentful). *Para esta documentação, utilizaremos a abordagem JSON para simplicidade de implementação sem dependências externas.*
* **Formulários:** Integração com serviços como Formspree ou API Routes do Next.js.
* **Deploy:** Vercel ou Netlify.

---

## 3. Estrutura de Pastas e Arquivos

A estrutura do projeto deve seguir o padrão do Next.js (App Router ou Pages Router). Abaixo, a estrutura sugerida:

```
/tresarq-site
├── /components       # Componentes reutilizáveis
│   ├── Layout.tsx    # Wrapper principal (Header + Footer)
│   ├── Header.tsx    # Menu de navegação
│   ├── Footer.tsx    # Rodapé
│   ├── Hero.tsx      # Seção de destaque (Home)
│   ├── ProjectCard.tsx # Card de projeto nas listagens
│   ├── ProjectGrid.tsx # Grid de projetos
│   ├── ImageGallery.tsx # Galeria de imagens (página de detalhes)
│   └── ContactForm.tsx # Formulário de contato
├── /data             # Dados estáticos (simulando banco de dados)
│   ├── projects.json # Lista de projetos (Interiores, Design, etc.)
│   └── content.json  # Textos institucionais (Sobre, Home)
├── /pages            # Rotas da aplicação
│   ├── index.tsx     # Home
│   ├── sobre.tsx     # Página Sobre Nós
│   ├── interiores.tsx # Listagem Interiores
│   ├── design.tsx    # Listagem Design
│   ├── contato.tsx   # Página de Contato
│   └── [category]/[slug].tsx # Página dinâmica de detalhes (Projetos/Produtos)
├── /public           # Assets estáticos (imagens, logos)
└── styles/           # Configurações globais de estilo

```

---

## 4. Design System & Estilização

### Paleta de Cores

Baseado na análise visual (minimalista):

* **Primary:** `#000000` (Texto principal, Bordas)
* **Background:** `#FFFFFF` (Fundo geral)
* **Secondary:** `#666666` (Texto secundário, legendas)
* **Accent:** `#F5F5F5` (Fundo de seções leves ou hover)

### Tipografia

Utilizar fontes sem serifa (Sans Serif) limpas e modernas.

* **Fonte Principal:** *Montserrat*, *Lato* ou *Helvetica Neue*.
* **Tamanhos:**
* H1 (Títulos de Seção): 2.5rem (40px), font-weight: 300 (Light).
* H2 (Subtítulos): 1.5rem (24px), font-weight: 400 (Regular).
* Body (Texto corrido): 1rem (16px), font-weight: 300 (Light).
* Menu: 0.875rem (14px), Uppercase, Letter-spacing: 1px.



---

## 5. Especificação dos Componentes e Páginas

### 5.1. Componente: Layout (Header & Footer)

Deve envolver todas as páginas.

* **Header:**
* **Logo:** Centralizada ou alinhada à esquerda ("TRÈS ARQUITETURA").
* **Menu de Navegação:** Deve conter os links:
* Home, Sobre Nós, Interiores, Design, Mostras, Incorporação, Comercial, Contato.


* **Comportamento:** Fixo no topo (sticky) ou estático. No mobile, transformar em menu "Hambúrguer".
* **Estilo:** Links em caixa baixa ou alta (conforme design original `\interiores` sugere um estilo visual específico, talvez com uma barra antes).


* **Footer:**
* Links rápidos repetindo o menu.
* Texto de Copyright: "© Très Arquitetura 2026. Direitos reservados."
* Créditos: "webdesign | [Seu Nome/Agência]".
* Redes Sociais (Instagram, LinkedIn).



### 5.2. Página: Home (`index.tsx`)

A página inicial funciona como uma vitrine.

* **Hero Section:** Um carrossel de imagens *full-width* ou uma imagem estática de alto impacto de um projeto recente.
* **Destaques:** Grid com 3 ou 4 imagens representativas das categorias principais (Interiores, Design, Incorporação) com links diretos.

### 5.3. Página: Sobre Nós (`sobre.tsx`)

* **Intro:** Texto institucional sobre a história do escritório (fundado em 2015, sócias Fernanda Tegacini, Fernanda Morais e Nathalia Mouco).
* **Seção Tríade:** Três colunas de texto explicando os pilares (baseado no conteúdo extraído):
1. **Projetos:** Foco multidisciplinar, residencial e incorporação.
2. **Obras:** Viabilização da construção, assessoria técnica.
3. **Decoração:** Curadoria de objetos, arte e ambientação.


* **Layout:** Texto justificado à esquerda ou centralizado, com bastante respiro lateral.

### 5.4. Páginas de Listagem (`interiores.tsx`, `design.tsx`, etc.)

Estas páginas seguem um modelo de **Grid de Portfólio**.

* **Componente ProjectGrid:**
* Renderiza uma lista de cards.
* Grid responsivo: 1 coluna (mobile), 2 colunas (tablet), 3 colunas (desktop).


* **Componente ProjectCard:**
* Imagem de capa do projeto.
* Título do projeto (aparece abaixo ou no *hover*).
* Link para a página de detalhe.


* **Filtros (Opcional):** Para a página "Interiores", subcategorias como "Apartamentos" e "Residências" podem ser links no topo que filtram o grid.

### 5.5. Página de Detalhe de Projeto (`[slug].tsx`)

Modelo dinâmico usado para exibir um projeto específico (ex: "Vermont", "Mesa Georgia").

* **Título:** Nome do projeto (H1).
* **Descrição:** Texto descritivo do projeto (ex: conceito, materiais usados).
* **Galeria:**
* Imagens de alta resolução empilhadas verticalmente ou em um grid de alvenaria (Masonry).
* Suporte a *lightbox* (clicar na imagem para ampliar) é recomendado.


* **Navegação:** Botões "Anterior" e "Próximo" projeto.

### 5.6. Página: Contato (`contato.tsx`)

* **Informações:** Endereço, Telefone, E-mail.
* *Dados extraídos:* Rua Eugênio de Medeiros, 639 - Pinheiros, SP. Tel: +55 11 3562.7357.


* **Formulário:**
* Campos: Nome, E-mail, Assunto, Mensagem.
* Checkbox: "Concordo com a política de privacidade".
* Botão: "Enviar".
* Feedback: Mensagem de "Obrigado! Retornaremos em breve" após envio.



---

## 6. Modelo de Dados (JSON Schema)

Crie um arquivo `data/projects.json` para alimentar o site:

```json
[
  {
    "id": "vermont",
    "slug": "vermont",
    "title": "Vermont",
    "category": "interiores",
    "subcategory": "apartamentos",
    "coverImage": "/images/vermont/cover.jpg",
    "description": "Este apartamento tem um layout tradicional. Seguindo um conceito mais clássico...",
    "gallery": [
      "/images/vermont/img1.jpg",
      "/images/vermont/img2.jpg"
    ]
  },
  {
    "id": "mesa-georgia",
    "slug": "mesa-georgia",
    "title": "Mesa Georgia",
    "category": "design",
    "coverImage": "/images/design/georgia.jpg",
    "description": "Peça desenhada com traços singulares...",
    "gallery": []
  }
]

```

---

## 7. Instruções Passo-a-Passo para Implementação

1. **Setup Inicial:**
```bash
npx create-next-app@latest tresarq-site --typescript --tailwind --eslint
cd tresarq-site

```


2. **Configuração de Fontes:**
No arquivo `layout.tsx` (ou `_app.tsx`), importe a fonte escolhida do Google Fonts.
3. **Criação de Componentes:**
* Crie o `Header` com a navegação responsiva.
* Crie o `ProjectCard` recebendo props de imagem e título.


4. **Implementação de Rotas:**
* Crie as páginas estáticas (`sobre.tsx`, `contato.tsx`) e preencha com o texto extraído.
* Na página `interiores.tsx`, importe o JSON de dados, filtre por `category: "interiores"` e mapeie para o componente `ProjectGrid`.


5. **Páginas Dinâmicas:**
* Crie a rota `/pages/projeto/[slug].tsx`.
* Use `getStaticPaths` para gerar as rotas baseadas no JSON.
* Use `getStaticProps` para buscar os dados do projeto específico baseado no `slug`.


6. **Estilização Fina:**
* Aplique espaçamentos generosos (`p-10`, `m-8` no Tailwind).
* Garanta que as imagens tenham `object-fit: cover` para manter o alinhamento.


7. **Formulário:**
* No `ContactForm.tsx`, configure o envio para um endpoint (ex: API Route que dispara e-mail ou serviço de terceiros). Implemente validação básica dos campos.


8. **Deploy:**
* Página para o github pages(github.io)