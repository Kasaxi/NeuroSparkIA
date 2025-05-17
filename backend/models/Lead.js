const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Schema para os leads/inscrições do formulário
const leadSchema = new Schema({
  name: {
    type: String,
    required: [true, 'Nome é obrigatório'],
    trim: true
  },
  email: {
    type: String,
    required: [true, 'Email é obrigatório'],
    trim: true,
    lowercase: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor, forneça um email válido']
  },
  phone: {
    type: String,
    required: [true, 'Telefone é obrigatório'],
    trim: true
  },
  service: {
    type: String,
    required: [true, 'Serviço é obrigatório'],
    enum: ['ia-personalizada', 'automacao', 'analise', 'consultoria']
  },
  message: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    enum: ['novo', 'contatado', 'em_negociacao', 'convertido', 'perdido'],
    default: 'novo'
  },
  consentLGPD: {
    type: Boolean,
    default: true,
    required: [true, 'Consentimento LGPD é obrigatório']
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Middleware para atualizar o campo updatedAt antes de salvar
leadSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Lead', leadSchema);
