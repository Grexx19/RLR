import React from 'react';
import { Btn } from './Styled';
import './Style.scss'

const ShareButton = () => {
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: document.title, // Título de la página
          text: '¡Echa un vistazo a esta página!', // Texto que acompañará al enlace
          url: window.location.href, // URL actual de la página
        });
        console.log('Contenido compartido exitosamente');
      } catch (error) {
        console.error('Error al compartir:', error);
      }
    } else {
      alert('La funcionalidad de compartir no está disponible en este navegador');
    }
  };

  return (
    <Btn onClick={handleShare} varmargin='30px auto' varsmmargin='10px auto 0'>
      Compartir Web
    </Btn>
  );
};

export default ShareButton;