import React from 'react';
import { motion } from 'framer-motion';
import { FaBrain, FaRobot, FaChartLine, FaLightbulb, FaCogs, FaDatabase } from 'react-icons/fa';
import { InView } from 'react-intersection-observer';
import logo from '../assets/logo.png';

const Hero = () => {
  return (
    <section id="inicio" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-r from-primary to-dark">
      <div className="absolute inset-0 bg-dark opacity-70"></div>
      <div className="container-custom relative z-10 py-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Consultoria em IA para Impulsionar Seu Negócio
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Transforme sua empresa com soluções inteligentes e personalizadas de Inteligência Artificial
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#contato" className="btn-primary text-lg px-8 py-3 bg-secondary hover:bg-secondary/90">
                Agende uma Consultoria Gratuita
              </a>
            </motion.div>
            <div className="mt-8 flex items-center">
              <div className="bg-white/20 p-2 rounded-full">
                <FaLightbulb className="text-secondary text-xl" />
              </div>
              <p className="ml-3 text-white/80 italic">
                <span className="font-bold text-secondary">Tempo limitado:</span> Diagnóstico gratuito para os 10 primeiros clientes do mês
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-xl animate-pulse-slow"></div>
              <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-2xl">
                <div className="flex justify-center mb-6">
                  <FaBrain className="text-8xl text-secondary" />
                </div>
                <h3 className="text-2xl font-bold text-white text-center mb-4">Potencialize seus resultados</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-white/90">
                    <span className="bg-secondary/20 p-1 rounded-full mr-2">
                      <FaChartLine className="text-secondary" />
                    </span>
                    Aumento de produtividade
                  </li>
                  <li className="flex items-center text-white/90">
                    <span className="bg-secondary/20 p-1 rounded-full mr-2">
                      <FaCogs className="text-secondary" />
                    </span>
                    Automação de processos
                  </li>
                  <li className="flex items-center text-white/90">
                    <span className="bg-secondary/20 p-1 rounded-full mr-2">
                      <FaDatabase className="text-secondary" />
                    </span>
                    Análise preditiva de dados
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

const About = () => {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <section ref={ref} id="sobre" className="section-padding bg-white">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Sobre Nós</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto">
                Somos uma equipe apaixonada por tecnologia, dedicada a implementar soluções de IA que transformam negócios.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaBrain className="text-3xl text-primary" />
                </div>
                <h3 className="text-xl font-bold text-dark text-center mb-3">Expertise Técnica</h3>
                <p className="text-dark/70 text-center">
                  Nossa equipe é formada por especialistas com mais de 10 anos de experiência em IA e aprendizado de máquina.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaLightbulb className="text-3xl text-secondary" />
                </div>
                <h3 className="text-xl font-bold text-dark text-center mb-3">Abordagem Inovadora</h3>
                <p className="text-dark/70 text-center">
                  Combinamos conhecimento técnico com visão estratégica para criar soluções verdadeiramente transformadoras.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-dark/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <FaRobot className="text-3xl text-dark" />
                </div>
                <h3 className="text-xl font-bold text-dark text-center mb-3">Resultados Comprovados</h3>
                <p className="text-dark/70 text-center">
                  Já ajudamos mais de 50 empresas a aumentar sua eficiência e lucratividade através da IA.
                </p>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

const Services = () => {
  const services = [
    {
      title: "Implementação de IA Personalizada",
      description: "Desenvolvemos soluções de IA sob medida para as necessidades específicas do seu negócio, garantindo máxima eficiência e resultados.",
      icon: <FaBrain className="text-4xl text-white" />,
      color: "bg-primary",
      topics: [
        "Chatbots e assistentes virtuais inteligentes",
        "Sistemas de reconhecimento de imagem e voz",
        "Algoritmos de aprendizado de máquina personalizados",
        "Integração de IA com sistemas existentes",
        "Desenvolvimento de APIs de IA para aplicações"
      ]
    },
    {
      title: "Automação de Processos Empresariais",
      description: "Automatizamos tarefas repetitivas e processos complexos, liberando sua equipe para focar no que realmente importa.",
      icon: <FaCogs className="text-4xl text-white" />,
      color: "bg-secondary",
      topics: [
        "Automação de fluxos de trabalho administrativos",
        "Processamento inteligente de documentos",
        "Automação de atendimento ao cliente",
        "Otimização de processos de RH e financeiros",
        "Monitoramento e relatórios automatizados"
      ]
    },
    {
      title: "Análise Preditiva de Dados",
      description: "Transformamos seus dados em insights valiosos, permitindo decisões estratégicas baseadas em previsões precisas.",
      icon: <FaDatabase className="text-4xl text-white" />,
      color: "bg-dark",
      topics: [
        "Previsão de tendências de mercado",
        "Análise de comportamento do consumidor",
        "Detecção de fraudes e anomalias",
        "Otimização de estoque e cadeia de suprimentos",
        "Modelos preditivos para tomada de decisão"
      ]
    }
  ];

  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <section ref={ref} id="servicos" className="section-padding bg-gray-50">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Nossos Serviços</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto">
                Oferecemos soluções completas de IA para transformar seu negócio e impulsionar seus resultados.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <div className={`${service.color} p-6 flex justify-center`}>
                    {service.icon}
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-dark mb-3">{service.title}</h3>
                    <p className="text-dark/70 mb-4">{service.description}</p>
                    
                    <div className="mt-4 mb-4">
                      <h4 className="text-sm font-semibold text-dark/80 mb-2">O que oferecemos:</h4>
                      <ul className="space-y-2">
                        {service.topics.map((topic, i) => (
                          <li key={i} className="flex items-start">
                            <span className={`${service.color} bg-opacity-20 p-1 rounded-full mr-2 mt-0.5`}>
                              <svg className="w-3 h-3 text-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </span>
                            <span className="text-sm text-dark/80">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-4 text-primary font-medium flex items-center"
                    >
                      Saiba mais
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      quote: "A NeuroSpark IA revolucionou nossa operação com soluções inteligentes e eficazes. Conseguimos reduzir custos em 30% e aumentar a produtividade em 45%.",
      author: "Maria Silva",
      position: "CEO, TechSolutions",
      image: "https://randomuser.me/api/portraits/women/1.jpg"
    },
    {
      quote: "Implementamos o sistema de análise preditiva da NeuroSpark e os resultados superaram todas as expectativas. Nossa capacidade de previsão de demanda melhorou 80%.",
      author: "João Oliveira",
      position: "Diretor de Operações, LogisTech",
      image: "https://randomuser.me/api/portraits/men/2.jpg"
    },
    {
      quote: "A automação de processos desenvolvida pela equipe da NeuroSpark transformou completamente nosso departamento de atendimento ao cliente.",
      author: "Ana Costa",
      position: "Gerente de Atendimento, ServicePlus",
      image: "https://randomuser.me/api/portraits/women/3.jpg"
    }
  ];

  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <section ref={ref} id="depoimentos" className="section-padding bg-primary/5">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">O Que Nossos Clientes Dizem</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
              <p className="text-lg text-dark/80 max-w-3xl mx-auto">
                Veja como nossas soluções de IA estão transformando negócios e gerando resultados reais.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                      <img src={testimonial.image} alt={testimonial.author} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <p className="text-dark/80 italic text-center mb-6">"{testimonial.quote}"</p>
                  <div className="text-center">
                    <h4 className="font-bold text-dark">{testimonial.author}</h4>
                    <p className="text-dark/60 text-sm">{testimonial.position}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-16 text-center"
            >
              <p className="text-lg text-dark/80 mb-8">
                Junte-se a mais de 50 empresas que já transformaram seus negócios com nossas soluções de IA.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a href="#contato" className="btn-primary text-lg px-8 py-3">
                  Seja o Próximo Caso de Sucesso
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      )}
    </InView>
  );
};

const Contact = () => {
  return (
    <InView threshold={0.25}>
      {({ ref, inView }) => (
        <section ref={ref} id="contato" className="section-padding bg-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Entre em Contato</h2>
              <div className="w-20 h-1 bg-secondary mx-auto mb-6"></div>
              <p className="text-lg text-white/80 max-w-3xl mx-auto">
                Estamos prontos para transformar seu negócio com soluções de IA personalizadas.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-8 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg">
                  <h3 className="text-2xl font-bold text-white mb-6">Agende uma Consultoria Gratuita</h3>
                  <p className="text-white/80 mb-8">
                    Preencha o formulário abaixo e nossa equipe entrará em contato em até 24 horas.
                  </p>
                  
                  {/* Substituindo o formulário pelo componente ContactForm */}
                  <ContactForm />
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="hidden md:block"
              >
                <div className="relative">
                  <div className="absolute -inset-4 bg-secondary/20 rounded-full blur-xl animate-pulse-slow"></div>
                  <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-2xl">
                    <div className="flex justify-center mb-6">
                      <FaLightbulb className="text-6xl text-secondary" />
                    </div>
                    <h3 className="text-2xl font-bold text-white text-center mb-4">Por que escolher a NeuroSpark IA?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <p className="text-white/90">Equipe com mais de 10 anos de experiência em IA</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <p className="text-white/90">Soluções personalizadas para seu negócio</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <p className="text-white/90">Acompanhamento contínuo e suporte técnico</p>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-secondary/20 p-1 rounded-full mr-3 mt-1">
                          <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </span>
                        <p className="text-white/90">ROI comprovado em todos os projetos</p>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-white/10 rounded-lg">
                      <p className="text-white/80 text-center italic">
                        "Transforme seu negócio hoje e esteja à frente da concorrência com soluções de IA de ponta."
                      </p>
                    </div>
                    
                    <div className="mt-8 space-y-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">WhatsApp</p>
                          <p className="text-white font-medium">(73) 98254-5000</p>
                        </div>
                      </div>
                      
                      <div className="flex items-center">
                        <div className="w-12 h-12 bg-secondary/20 rounded-full flex items-center justify-center mr-4">
                          <svg className="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-white/60 text-sm">Email</p>
                          <p className="text-white font-medium">contato@neurospark.ia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      )}
    </InView>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark py-12 border-t border-white/10">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center mb-4">
              <img src={logo} alt="NeuroSpark IA" className="h-12" />
              <span className="ml-2 font-bold text-xl text-white">NeuroSpark IA</span>
            </div>
            <p className="text-white/70 text-sm text-center md:text-left">
              Transformando negócios através de soluções inteligentes e personalizadas de IA.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 10.054 10.054 0 01-3.127 1.184 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="text-white/70 hover:text-primary transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
            </div>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4">Serviços</h4>
            <ul className="space-y-2">
              <li><a href="#servicos" className="text-white/70 hover:text-primary transition-colors">Implementação de IA</a></li>
              <li><a href="#servicos" className="text-white/70 hover:text-primary transition-colors">Automação de Processos</a></li>
              <li><a href="#servicos" className="text-white/70 hover:text-primary transition-colors">Análise Preditiva</a></li>
              <li><a href="#servicos" className="text-white/70 hover:text-primary transition-colors">Consultoria em IA</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4">Links Úteis</h4>
            <ul className="space-y-2">
              <li><a href="#inicio" className="text-white/70 hover:text-primary transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-white/70 hover:text-primary transition-colors">Sobre Nós</a></li>
              <li><a href="#depoimentos" className="text-white/70 hover:text-primary transition-colors">Depoimentos</a></li>
              <li><a href="#contato" className="text-white/70 hover:text-primary transition-colors">Contato</a></li>
            </ul>
          </div>
          
          <div className="text-center md:text-left">
            <h4 className="text-white font-bold mb-4">Contato</h4>
            <ul className="space-y-2">
              <li className="flex items-center justify-center md:justify-start text-white/70">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (73) 98254-5000
              </li>
              <li className="flex items-center justify-center md:justify-start text-white/70">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                contato@neurospark.ia
              </li>
              <li className="flex items-center justify-center md:justify-start text-white/70">
                <svg className="w-5 h-5 mr-2 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                São Paulo, SP - Brasil
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} NeuroSpark IA. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Política de Privacidade</a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Termos de Uso</a>
            <a href="#" className="text-white/60 hover:text-primary text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Sections = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default Sections;
