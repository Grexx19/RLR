import React, { useState, useEffect } from 'react';
import { RedHatDisplay } from './Styled';

const VisitCounter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const response = await fetch('/api/visit-counter.php');
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        console.error('Error al obtener el conteo:', error);
      }
    };

    fetchCount();
  }, []);

  return (
    <div>
      <RedHatDisplay varcolor='transparent' varweight ='500'>Visitantes: {count}</RedHatDisplay>
    </div>
  );
};

export default VisitCounter;