# Projeto NeuroSpark IA

Este é o projeto completo da NeuroSpark IA, uma consultoria especializada em soluções de inteligência artificial para empresas. O projeto consiste em um site One Page moderno e um sistema de captura de leads com banco de dados.

## Estrutura do Projeto

O projeto está organizado em duas partes principais:

```
neurospark-projeto-completo/
├── frontend/           # Código do site em React
│   ├── src/            # Código-fonte do React
│   ├── public/         # Arquivos públicos
│   └── package.json    # Dependências do frontend
│
└── backend/            # API e servidor Node.js/Express
    ├── models/         # Modelos de dados MongoDB
    ├── routes/         # Rotas da API
    ├── middleware/     # Middlewares (autenticação, etc.)
    ├── utils/          # Utilitários (exportação CSV, etc.)
    ├── server.js       # Arquivo principal do servidor
    ├── package.json    # Dependências do backend
    ├── .env            # Variáveis de ambiente configuradas
    └── .env.example    # Modelo para variáveis de ambiente
```

## Requisitos

- Node.js 14+ e npm
- MongoDB (local ou Atlas)
- Conta de email para envio de notificações

## Configuração e Instalação

### Frontend

1. Navegue até a pasta do frontend:
   ```
   cd frontend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. Crie um arquivo `.env` na raiz do frontend com:
   ```
   REACT_APP_API_URL=http://localhost:5000
   ```

4. Inicie o servidor de desenvolvimento:
   ```
   npm start
   ```

### Backend

1. Navegue até a pasta do backend:
   ```
   cd backend
   ```

2. Instale as dependências:
   ```
   npm install
   ```

3. O arquivo `.env` já está incluído com configurações padrão para desenvolvimento:
   ```
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/neurospark
   JWT_SECRET=neurospark_secret_key_2025
   EMAIL_USER=contato@neurospark.ia
   EMAIL_PASS=sua_senha_de_email_aqui
   NODE_ENV=development
   ```
   
   Você deve editar este arquivo para incluir suas próprias credenciais antes de executar o projeto.

4. Inicie o servidor:
   ```
   npm start
   ```

## Funcionalidades

### Frontend
- Site One Page responsivo
- Formulário de contato integrado com backend
- Animações modernas
- Design atraente com paleta de cores personalizada

### Backend
- API RESTful para captura de leads
- Banco de dados MongoDB para armazenamento
- Envio automático de emails de confirmação
- Painel administrativo para gestão de leads
- Exportação de dados para CSV
- Autenticação JWT para acesso seguro

## Deploy

Para fazer o deploy do projeto, consulte o arquivo `TUTORIAL-DEPLOY.md` incluído neste pacote.

## Créditos

Desenvolvido por Manus AI para NeuroSpark IA.
