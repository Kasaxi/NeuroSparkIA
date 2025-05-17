import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container-custom flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <img src={logo} alt="NeuroSpark IA" className="h-10 md:h-12" />
          <span className={`ml-2 font-bold text-xl ${scrolled ? 'text-primary' : 'text-white'}`}>NeuroSpark IA</span>
        </motion.div>

        {/* Desktop Menu */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="hidden md:flex space-x-8"
        >
          <Link to="inicio" smooth={true} duration={500} className={`cursor-pointer font-medium hover:text-primary transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
            Início
          </Link>
          <Link to="sobre" smooth={true} duration={500} className={`cursor-pointer font-medium hover:text-primary transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
            Sobre Nós
          </Link>
          <Link to="servicos" smooth={true} duration={500} className={`cursor-pointer font-medium hover:text-primary transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
            Serviços
          </Link>
          <Link to="depoimentos" smooth={true} duration={500} className={`cursor-pointer font-medium hover:text-primary transition-colors ${scrolled ? 'text-dark' : 'text-white'}`}>
            Depoimentos
          </Link>
          <Link to="contato" smooth={true} duration={500} className="btn-primary">
            Fale Conosco
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={toggleMobileMenu}
            className={`focus:outline-none ${scrolled ? 'text-primary' : 'text-white'}`}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-lg"
        >
          <div className="container-custom py-4 flex flex-col space-y-4">
            <Link 
              to="inicio" 
              smooth={true} 
              duration={500} 
              className="text-dark hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Início
            </Link>
            <Link 
              to="sobre" 
              smooth={true} 
              duration={500} 
              className="text-dark hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sobre Nós
            </Link>
            <Link 
              to="servicos" 
              smooth={true} 
              duration={500} 
              className="text-dark hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link 
              to="depoimentos" 
              smooth={true} 
              duration={500} 
              className="text-dark hover:text-primary transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Depoimentos
            </Link>
            <Link 
              to="contato" 
              smooth={true} 
              duration={500} 
              className="btn-primary inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Fale Conosco
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
