const express = require('express');
const router = express.Router();
const Lead = require('../models/Lead');
const { check, validationResult } = require('express-validator');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Configuração do transporter para envio de emails
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// @route   POST api/leads
// @desc    Registrar um novo lead
// @access  Public
router.post(
  '/',
  [
    check('name', 'Nome é obrigatório').not().isEmpty(),
    check('email', 'Por favor, inclua um email válido').isEmail(),
    check('phone', 'Telefone é obrigatório').not().isEmpty(),
    check('service', 'Serviço é obrigatório').isIn(['ia-personalizada', 'automacao', 'analise', 'consultoria']),
    check('consentLGPD', 'Consentimento LGPD é obrigatório').equals('true')
  ],
  async (req, res) => {
    // Validar inputs
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, phone, service, message, consentLGPD } = req.body;

    try {
      // Criar novo lead
      const lead = new Lead({
        name,
        email,
        phone,
        service,
        message,
        consentLGPD: true
      });

      // Salvar lead no banco de dados
      await lead.save();

      // Enviar email de confirmação
      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Recebemos sua solicitação - NeuroSpark IA',
        html: `
          <h2>Olá ${name},</h2>
          <p>Recebemos sua solicitação de consultoria em ${service}.</p>
          <p>Um de nossos especialistas entrará em contato com você em breve através do telefone ${phone}.</p>
          <p>Agradecemos seu interesse em nossos serviços!</p>
          <br>
          <p><strong>NeuroSpark IA</strong></p>
          <p>Transformando negócios com inteligência artificial</p>
        `
      };

      // Enviar email de forma assíncrona (não bloqueia a resposta)
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log('Erro ao enviar email:', error);
        } else {
          console.log('Email enviado:', info.response);
        }
      });

      // Enviar email para a equipe
      const teamMailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER,
        subject: 'Novo Lead - NeuroSpark IA',
        html: `
          <h2>Novo Lead Registrado</h2>
          <p><strong>Nome:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Telefone:</strong> ${phone}</p>
          <p><strong>Serviço:</strong> ${service}</p>
          <p><strong>Mensagem:</strong> ${message || 'Não informada'}</p>
          <p><strong>Data:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        `
      };

      // Enviar email para equipe de forma assíncrona
      transporter.sendMail(teamMailOptions);

      res.status(201).json({ 
        success: true, 
        message: 'Solicitação recebida com sucesso!',
        data: lead 
      });
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Erro no servidor');
    }
  }
);

// @route   GET api/leads
// @desc    Obter todos os leads (para o painel administrativo)
// @access  Private (será protegido por autenticação)
router.get('/', async (req, res) => {
  try {
    const leads = await Lead.find().sort({ createdAt: -1 });
    res.json(leads);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Erro no servidor');
  }
});

// @route   GET api/leads/:id
// @desc    Obter lead por ID
// @access  Private
router.get('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    
    if (!lead) {
      return res.status(404).json({ msg: 'Lead não encontrado' });
    }
    
    res.json(lead);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Lead não encontrado' });
    }
    res.status(500).send('Erro no servidor');
  }
});

// @route   PUT api/leads/:id
// @desc    Atualizar status do lead
// @access  Private
router.put('/:id', async (req, res) => {
  try {
    const { status } = req.body;
    
    // Verificar se o status é válido
    if (!['novo', 'contatado', 'em_negociacao', 'convertido', 'perdido'].includes(status)) {
      return res.status(400).json({ msg: 'Status inválido' });
    }
    
    const lead = await Lead.findByIdAndUpdate(
      req.params.id,
      { status, updatedAt: Date.now() },
      { new: true }
    );
    
    if (!lead) {
      return res.status(404).json({ msg: 'Lead não encontrado' });
    }
    
    res.json(lead);
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Lead não encontrado' });
    }
    res.status(500).send('Erro no servidor');
  }
});

// @route   DELETE api/leads/:id
// @desc    Deletar um lead
// @access  Private (admin only)
router.delete('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    
    if (!lead) {
      return res.status(404).json({ msg: 'Lead não encontrado' });
    }
    
    await lead.remove();
    
    res.json({ msg: 'Lead removido' });
  } catch (err) {
    console.error(err.message);
    if (err.kind === 'ObjectId') {
      return res.status(404).json({ msg: 'Lead não encontrado' });
    }
    res.status(500).send('Erro no servidor');
  }
});

module.exports = router;
