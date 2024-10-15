import React from 'react';
import LanguageSelector from '../LanguageSelector';

const MenuIdioma = ({ currentLocale, handleLanguageChange }) => {
  return (  
    <LanguageSelector currentLocale={currentLocale} handleLanguageChange={handleLanguageChange} />
  );
};

export default MenuIdioma;