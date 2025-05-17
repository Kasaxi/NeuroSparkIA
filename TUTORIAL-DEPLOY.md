# Tutorial Detalhado: Deploy Gratuito do Site NeuroSpark IA

Este tutorial irá guiá-lo através do processo completo de deploy do site NeuroSpark IA, incluindo:

1. Frontend React na Vercel
2. Backend Node.js/Express no Render
3. Banco de dados MongoDB no Atlas

## Parte 1: Configuração do MongoDB Atlas

### Passo 1: Criar uma conta no MongoDB Atlas

1. Acesse [MongoDB Atlas](https://www.mongodb.com/cloud/atlas/register)
2. Clique em "Try Free" e preencha o formulário de registro
3. Você pode se registrar com Google, GitHub ou criar uma conta com email

### Passo 2: Criar um cluster gratuito

1. Após o login, clique em "Build a Database"
2. Selecione o plano "FREE" (Shared)
3. Escolha um provedor de nuvem (AWS, Google Cloud ou Azure) - qualquer um funciona bem
4. Selecione uma região próxima ao Brasil (como N. Virginia ou São Paulo, se disponível)
5. Clique em "Create Cluster" (a criação pode levar alguns minutos)

### Passo 3: Configurar acesso ao banco de dados

1. No menu lateral, vá para "Database Access" sob "Security"
2. Clique em "Add New Database User"
3. Escolha "Password" como método de autenticação
4. Defina um nome de usuário e senha (anote-os, você precisará depois)
5. Em "Database User Privileges", selecione "Read and Write to Any Database"
6. Clique em "Add User"

### Passo 4: Configurar acesso à rede

1. No menu lateral, vá para "Network Access" sob "Security"
2. Clique em "Add IP Address"
3. Para desenvolvimento, você pode clicar em "Allow Access from Anywhere" (0.0.0.0/0)
4. Para produção, é recomendável limitar aos IPs do Render
5. Clique em "Confirm"

### Passo 5: Obter a string de conexão

1. No menu lateral, vá para "Database" sob "Deployment"
2. Clique em "Connect" no seu cluster
3. Selecione "Connect your application"
4. Copie a string de conexão fornecida
5. Substitua `<password>` pela senha do usuário que você criou
6. Substitua `<dbname>` por "neurospark" ou outro nome de sua preferência

## Parte 2: Deploy do Backend no Render

### Passo 1: Preparar o código para deploy

1. Certifique-se de que seu arquivo `.env` está configurado corretamente:
   ```
   PORT=5000
   MONGODB_URI=sua_string_de_conexao_mongodb
   JWT_SECRET=seu_segredo_jwt
   EMAIL_USER=seu_email
   EMAIL_PASS=sua_senha_de_email
   NODE_ENV=production
   ```

2. Adicione um script "start" no seu `package.json`:
   ```json
   "scripts": {
     "start": "node server.js",
     "dev": "nodemon server.js"
   }
   ```

3. Certifique-se de que seu servidor está configurado para usar a porta fornecida pelo ambiente:
   ```javascript
   const PORT = process.env.PORT || 5000;
   ```

### Passo 2: Criar uma conta no Render

1. Acesse [Render](https://render.com/)
2. Clique em "Sign Up" e crie uma conta (você pode usar GitHub para agilizar)

### Passo 3: Criar um novo Web Service

1. Após o login, clique em "New +" e selecione "Web Service"
2. Conecte sua conta GitHub ou faça upload do código diretamente
3. Se usar GitHub, selecione o repositório do backend

### Passo 4: Configurar o Web Service

1. Dê um nome ao seu serviço (ex: "neurospark-backend")
2. Região: escolha a mais próxima do Brasil
3. Branch: main (ou a branch que contém seu código)
4. Runtime: Node
5. Build Command: `npm install`
6. Start Command: `npm start`
7. Plano: Free

### Passo 5: Configurar variáveis de ambiente

1. Expanda a seção "Advanced"
2. Clique em "Add Environment Variable"
3. Adicione todas as variáveis do seu arquivo `.env`:
   - `MONGODB_URI` (string de conexão do MongoDB Atlas)
   - `JWT_SECRET` (uma string aleatória para segurança)
   - `EMAIL_USER` (email para envio de notificações)
   - `EMAIL_PASS` (senha do email ou senha de app)
   - `NODE_ENV` (defina como "production")

4. Clique em "Create Web Service"

### Passo 6: Verificar o deploy

1. Aguarde o processo de build e deploy (pode levar alguns minutos)
2. Quando estiver pronto, você verá um URL (ex: https://neurospark-backend.onrender.com)
3. Teste a API acessando `https://neurospark-backend.onrender.com/api/leads` (deve retornar um erro de autenticação, o que é normal)

## Parte 3: Deploy do Frontend na Vercel

### Passo 1: Preparar o código para deploy

1. Crie um arquivo `.env.production` na raiz do projeto frontend com:
   ```
   REACT_APP_API_URL=https://seu-backend.onrender.com
   ```

2. Atualize o arquivo `package.json` para incluir:
   ```json
   "homepage": ".",
   ```

### Passo 2: Criar uma conta na Vercel

1. Acesse [Vercel](https://vercel.com/signup)
2. Clique em "Sign Up" e crie uma conta (recomendado usar GitHub)

### Passo 3: Importar o projeto

1. Após o login, clique em "Add New..." e selecione "Project"
2. Conecte sua conta GitHub ou faça upload do código diretamente
3. Se usar GitHub, selecione o repositório do frontend

### Passo 4: Configurar o projeto

1. Nome do projeto: "neurospark-ia" (ou outro de sua preferência)
2. Framework Preset: Create React App
3. Root Directory: ./ (ou a pasta onde está o código do frontend)
4. Build Command: deixe o padrão (`npm run build`)
5. Output Directory: deixe o padrão (`build`)

### Passo 5: Configurar variáveis de ambiente

1. Expanda a seção "Environment Variables"
2. Adicione a variável:
   - Nome: `REACT_APP_API_URL`
   - Valor: URL do seu backend (ex: https://neurospark-backend.onrender.com)

3. Clique em "Deploy"

### Passo 6: Verificar o deploy

1. Aguarde o processo de build e deploy (geralmente é rápido)
2. Quando estiver pronto, você verá um URL (ex: https://neurospark-ia.vercel.app)
3. Acesse o URL para verificar se o site está funcionando corretamente

## Parte 4: Testando a Integração Completa

### Passo 1: Testar o formulário de contato

1. Acesse seu site na Vercel
2. Vá até a seção de contato
3. Preencha o formulário com dados de teste
4. Envie o formulário
5. Verifique se aparece a mensagem de sucesso

### Passo 2: Verificar o registro no banco de dados

1. Acesse o MongoDB Atlas
2. Vá para "Browse Collections" no seu cluster
3. Verifique se os dados do formulário foram registrados na coleção "leads"

### Passo 3: Verificar o recebimento de emails

1. Verifique a caixa de entrada do email que você usou no formulário
2. Deve haver um email de confirmação da NeuroSpark IA
3. Verifique também a caixa de entrada do email configurado para receber notificações

## Parte 5: Configuração do Painel Administrativo (Opcional)

### Passo 1: Criar um usuário administrador

1. Use uma ferramenta como Postman ou Insomnia
2. Faça uma requisição POST para `https://seu-backend.onrender.com/api/users`
3. No corpo da requisição, envie:
   ```json
   {
     "name": "Admin",
     "email": "seu-email@exemplo.com",
     "password": "sua-senha",
     "role": "admin"
   }
   ```

### Passo 2: Acessar o painel administrativo

Para implementar um painel administrativo completo, você precisaria desenvolver uma interface frontend adicional. Isso pode ser feito como uma extensão futura do projeto.

## Considerações Finais

### Limitações dos planos gratuitos

1. **Render**: O plano gratuito "hiberna" após 15 minutos de inatividade, o que pode causar um atraso na primeira requisição
2. **MongoDB Atlas**: Limite de 512MB de armazenamento
3. **Vercel**: Sem limitações significativas para sites estáticos

### Manutenção

1. Monitore regularmente o uso do banco de dados
2. Faça backups periódicos dos dados
3. Considere migrar para planos pagos se o tráfego aumentar significativamente

### Segurança

1. Nunca compartilhe suas credenciais de banco de dados
2. Considere adicionar reCAPTCHA ao formulário para evitar spam
3. Implemente rate limiting no backend para prevenir ataques

### Próximos passos

1. Implementar um painel administrativo completo
2. Adicionar análise de dados e relatórios
3. Integrar com ferramentas de marketing por email
4. Implementar um sistema de CRM mais robusto

Espero que este tutorial seja útil! Se tiver dúvidas durante o processo de deploy, não hesite em entrar em contato.
