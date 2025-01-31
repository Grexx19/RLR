import React, { useEffect, lazy, Suspense } from 'react';
import { useLocation } from 'react-router-dom';
import { ContentBox } from '../components/Styled';
import Hero from '../sections/Descargas/Hero/Hero';
const Tarjetas = lazy(() => import('../sections/Descargas/Tarjetas/Tarjetas'));
const Leidos = lazy(() => import('../sections/Descargas/Leidos/Leidos'));
const Atajos = lazy(() => import('../sections/Descargas/Atajos/Atajos'));
const Audios = lazy(() => import('../sections/Descargas/Audios/Audios'));
const Cuadros = lazy(() => import('../sections/Descargas/Cuadros/Cuadros'));
const Habladores = lazy(() => import('../sections/Descargas/Habladores/Habladores'));
const Bottom = lazy(() => import('../sections/Descargas/Bottom/Bottom'));

const Descargas = () => {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <ContentBox varwidth="100%" varmaxwidth="100%" vardisplay="flex">
      <Suspense fallback={<div>Cargando...</div>}>
        <Hero id="hero" />
        <Tarjetas id="tarjetas-objetivos" />
        <Leidos id="libros-leidos" />
        <Atajos id="atajos-para-la-abundancia" />
        <Audios id="audios" />
        <Cuadros id="cuadros-explicativos" />
        <Habladores id="habladores" />
        <Bottom id="compartir" />
      </Suspense>
    </ContentBox>
  );
};

export default Descargas;