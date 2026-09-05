# Conversa+

Uma aplicação de chat em tempo real desenvolvida como um projeto Full Stack, com autenticação, comunicação instantânea, compartilhamento de mídia e personalização da experiência do usuário.

## Sobre o projeto

O Conversa+ é uma plataforma de comunicação em tempo real que permite aos usuários trocar mensagens, compartilhar imagens e vídeos e acompanhar a presença de outros usuários online.

O projeto foi desenvolvido com uma arquitetura separando frontend e backend, utilizando WebSockets para comunicação em tempo real e MongoDB para persistência dos dados.

## Funcionalidades

* Chat em tempo real
* Autenticação e gerenciamento de usuários
* Indicador de usuários online
* Envio e recebimento instantâneo de mensagens
* Compartilhamento de imagens e vídeos
* Upload e otimização de arquivos de mídia
* WebSockets utilizando Socket.io
* Temas claro e escuro
* 11 temas de interface
* 13 wallpapers personalizados
* Efeitos sonoros opcionais para o teclado
* Persistência de mensagens no MongoDB
* Webhooks para sincronização de dados
* Cron Jobs para tarefas automatizadas
* Middleware para autenticação e processamento de requisições
* Upload e gerenciamento de arquivos
* Aplicação preparada para deploy
* Interface responsiva

## Tecnologias utilizadas

### Frontend

* React
* Tailwind CSS
* Hero UI
* Zustand
* Socket.io Client

### Backend

* Node.js
* Express.js
* MongoDB
* Socket.io
* Clerk
* ImageKit

### Infraestrutura

* MongoDB Atlas
* Render
* ImageKit

## Arquitetura

O projeto é dividido em duas aplicações principais:

```text
chat
├── frontend
│   ├── React
│   ├── Tailwind CSS
│   ├── Zustand
│   └── Socket.io Client
│
└── backend
    ├── Node.js
    ├── Express.js
    ├── MongoDB
    ├── Socket.io
    ├── Clerk
    └── ImageKit
```

A comunicação em tempo real é realizada através do Socket.io, enquanto o MongoDB é responsável pelo armazenamento dos dados da aplicação.

## Variáveis de ambiente

### Backend

Crie um arquivo `.env` dentro da pasta `backend`:

```env
PORT=<your_port>
NODE_ENV=<development_or_production>

MONGO_URI=<your_mongodb_connection_string>

CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
CLERK_SECRET_KEY=<your_clerk_secret_key>
CLERK_WEBHOOK_SIGNING_SECRET=<your_clerk_webhook_signing_secret>

IMAGEKIT_PRIVATE_KEY=<your_imagekit_private_key>

FRONTEND_URL=<your_frontend_url>
```

### Frontend

Crie um arquivo `.env` dentro da pasta `frontend`:

```env
VITE_CLERK_PUBLISHABLE_KEY=<your_clerk_publishable_key>
```

## Instalação

Clone o repositório e instale as dependências do frontend e backend.

```bash
git clone <repository-url>

cd conversa+
```

### Backend

```bash
cd backend
npm install
npm run dev
```

### Frontend

Em outro terminal:

```bash
cd frontend
npm install
npm run dev
```

Depois, acesse a aplicação através da URL disponibilizada pelo Vite.

## Deploy

A aplicação pode ser executada em produção utilizando:

* Frontend: Render
* Backend: Render
* Database: MongoDB Atlas

## Objetivos do projeto

O Conversa+ foi desenvolvido para colocar em prática conceitos de desenvolvimento Full Stack, incluindo construção de APIs, autenticação, banco de dados, comunicação em tempo real, gerenciamento de arquivos, WebSockets e deploy de aplicações.

O projeto também serviu como oportunidade para trabalhar com uma arquitetura mais próxima de aplicações utilizadas em ambientes reais de produção.
