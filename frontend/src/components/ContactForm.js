import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    consentLGPD: true
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const { name, email, phone, service, message, consentLGPD } = formData;

  const onChange = e => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      
      const body = JSON.stringify(formData);
      
      // Enviar dados para a API
      const res = await axios.post('http://localhost:5000/api/leads', body, config);
      
      // Mostrar mensagem de sucesso
      setSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
        consentLGPD: true
      });
      
      // Resetar mensagem de sucesso após 5 segundos
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
      
    } catch (err) {
      setError(
        err.response && err.response.data.errors 
          ? err.response.data.errors[0].msg 
          : 'Ocorreu um erro ao enviar sua solicitação. Por favor, tente novamente.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form className="space-y-6" onSubmit={onSubmit}>
      {success && (
        <div className="bg-green-500/20 border border-green-500/50 text-white p-4 rounded-lg mb-4">
          Sua solicitação foi enviada com sucesso! Em breve entraremos em contato.
        </div>
      )}
      
      {error && (
        <div className="bg-red-500/20 border border-red-500/50 text-white p-4 rounded-lg mb-4">
          {error}
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-white/80 mb-2 text-sm">Nome completo</label>
        <input 
          type="text" 
          id="name"
          name="name"
          value={name}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          placeholder="Seu nome completo"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-white/80 mb-2 text-sm">Email</label>
        <input 
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          placeholder="seu.email@exemplo.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="phone" className="block text-white/80 mb-2 text-sm">Telefone</label>
        <input 
          type="tel"
          id="phone"
          name="phone"
          value={phone}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          placeholder="(00) 00000-0000"
          required
        />
      </div>
      
      <div>
        <label htmlFor="service" className="block text-white/80 mb-2 text-sm">Serviço desejado</label>
        <select 
          id="service"
          name="service"
          value={service}
          onChange={onChange}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          required
        >
          <option value="" className="bg-dark">Selecione um serviço</option>
          <option value="ia-personalizada" className="bg-dark">Implementação de IA Personalizada</option>
          <option value="automacao" className="bg-dark">Automação de Processos Empresariais</option>
          <option value="analise" className="bg-dark">Análise Preditiva de Dados</option>
          <option value="consultoria" className="bg-dark">Consultoria em IA</option>
        </select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-white/80 mb-2 text-sm">Observações</label>
        <textarea 
          id="message"
          name="message"
          value={message}
          onChange={onChange}
          rows="4" 
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-secondary/50"
          placeholder="Conte-nos mais sobre suas necessidades..."
        ></textarea>
      </div>
      
      <div className="flex items-start">
        <input
          type="checkbox"
          id="consentLGPD"
          name="consentLGPD"
          checked={consentLGPD}
          onChange={onChange}
          className="mt-1 mr-2"
          required
        />
        <label htmlFor="consentLGPD" className="text-white/70 text-sm">
          Concordo com o tratamento dos meus dados conforme a Lei Geral de Proteção de Dados (LGPD).
        </label>
      </div>
      
      <button
        type="submit"
        disabled={loading}
        className={`btn-primary bg-primary hover:bg-primary/90 w-full flex items-center justify-center ${loading ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {loading ? (
          <>
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Enviando...
          </>
        ) : 'Solicitar Consultoria Gratuita'}
      </button>
      
      <div className="mt-8 pt-8 border-t border-white/10">
        <p className="text-white/80 text-center mb-4">Ou entre em contato diretamente:</p>
        
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <a
            href="https://wa.me/5573982545000?text=Olá!%20Gostaria%20de%20agendar%20uma%20consultoria%20gratuita."
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary bg-secondary hover:bg-secondary/90 flex items-center justify-center flex-1"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            WhatsApp
          </a>
          
          <a
            href="mailto:contato@neurospark.ia"
            className="btn-primary bg-primary/80 hover:bg-primary flex items-center justify-center flex-1"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Email
          </a>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
