const createCsvWriter = require('csv-writer').createObjectCsvWriter;
const Lead = require('../models/Lead');
const path = require('path');
const fs = require('fs');

// Função para exportar leads para CSV
module.exports = async (req, res) => {
  try {
    // Buscar todos os leads
    const leads = await Lead.find().sort({ createdAt: -1 });
    
    // Definir diretório para exportação
    const exportDir = path.join(__dirname, '../exports');
    
    // Criar diretório se não existir
    if (!fs.existsSync(exportDir)) {
      fs.mkdirSync(exportDir);
    }
    
    // Definir nome do arquivo
    const fileName = `leads_export_${Date.now()}.csv`;
    const filePath = path.join(exportDir, fileName);
    
    // Configurar CSV Writer
    const csvWriter = createCsvWriter({
      path: filePath,
      header: [
        { id: 'name', title: 'Nome' },
        { id: 'email', title: 'Email' },
        { id: 'phone', title: 'Telefone' },
        { id: 'service', title: 'Serviço' },
        { id: 'message', title: 'Mensagem' },
        { id: 'status', title: 'Status' },
        { id: 'createdAt', title: 'Data de Criação' },
        { id: 'updatedAt', title: 'Última Atualização' }
      ]
    });
    
    // Formatar dados para CSV
    const records = leads.map(lead => {
      return {
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        service: lead.service,
        message: lead.message || '',
        status: lead.status,
        createdAt: new Date(lead.createdAt).toLocaleString('pt-BR'),
        updatedAt: new Date(lead.updatedAt).toLocaleString('pt-BR')
      };
    });
    
    // Escrever CSV
    await csvWriter.writeRecords(records);
    
    // Enviar arquivo para download
    res.download(filePath, fileName, (err) => {
      if (err) {
        console.error('Erro ao fazer download do arquivo:', err);
        return res.status(500).send('Erro ao fazer download do arquivo');
      }
      
      // Remover arquivo após download
      fs.unlinkSync(filePath);
    });
  } catch (err) {
    console.error('Erro ao exportar leads:', err.message);
    res.status(500).send('Erro no servidor');
  }
};
