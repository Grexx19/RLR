import React from 'react';
import PropTypes from 'prop-types';

import stylesG from "./Styled.module.scss";

const LanguageSelector = ({ currentLocale, handleLanguageChange }) => {
  return (
    <div>
      <select value={currentLocale} onChange={(e) => handleLanguageChange(e.target.value)} className={stylesG.customSelect}>
        <option value="en">En</option>
        <option value="es">Es</option>
      </select>
    </div>
  );
};

LanguageSelector.propTypes = {
  currentLocale: PropTypes.string.isRequired,
  handleLanguageChange: PropTypes.func.isRequired,
};

export default LanguageSelector;