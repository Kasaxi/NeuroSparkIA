import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import Sections from './components/Sections';
import ContactForm from './components/ContactForm';
import './index.css';

// Configurar URL base da API
axios.defaults.baseURL = process.env.REACT_APP_API_URL || 'http://localhost:5000';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Sections />
      </div>
    </Router>
  );
}

export default App;
