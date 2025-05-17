const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');

// Carregar variáveis de ambiente
dotenv.config();

// Inicializar Express
const app = express();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());

// Conectar ao MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('MongoDB Conectado'))
.catch(err => {
  console.error('Erro ao conectar ao MongoDB:', err.message);
  process.exit(1);
});

// Definir rotas
app.use('/api/leads', require('./routes/leads'));
app.use('/api/users', require('./routes/users'));

// Rota para exportação de leads em CSV
app.get('/api/export/leads', require('./utils/exportLeads'));

// Servir arquivos estáticos em produção
if (process.env.NODE_ENV === 'production') {
  // Definir pasta estática
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Definir porta
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
