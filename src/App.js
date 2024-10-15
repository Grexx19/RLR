import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home.jsx';
import Descargas from './pages/Descargas.jsx'; // Importar la página Descargas
import { IntlProvider } from 'react-intl';
import esMessages from './locales/es.json';
import enMessages from './locales/en.json';
import MarcasPage from './pages/Marcas.jsx';

const messages = {
  es: esMessages,
  en: enMessages,
};

function App() {
  const [language, setLanguage] = useState('es');

  useEffect(() => {
    const path = window.location.pathname;
    setLanguage(path.startsWith('/en') ? 'en' : 'es');
  }, []);

  const footerRef = useRef(null);

  return (
    <IntlProvider locale={language} messages={messages[language]}>
      <Header footerRef={footerRef} />
      <Routes>
        {/* Ruta para la página principal en español */}
        <Route path="/" element={<Home />} />

        {/* Ruta para la página Descargas en español */}
        <Route path="/descargas" element={<Descargas />} />
        <Route path="/marcas" element={<MarcasPage />} />

        {/* Ruta para la página principal en inglés */}
        <Route path="/en" element={<Home />} />

        {/* Ruta para la página Descargas en inglés */}
        <Route path="/en/descargas" element={<Descargas />} />

        {/* Agrega más rutas si tienes otras páginas */}
        <Route path="/en/marcas" element={<MarcasPage />} />

      </Routes>
      <Footer footerRef={footerRef} />
    </IntlProvider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;