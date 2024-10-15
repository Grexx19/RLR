import React from 'react'
import Hero from '../sections/Descargas/Hero/Hero'
import Tarjetas from '../sections/Descargas/Tarjetas/Tarjetas'
import { ContentBox } from '../components/Styled'
import Leidos from '../sections/Descargas/Leidos/Leidos'
import Atajos from '../sections/Descargas/Atajos/Atajos'
import Audios from '../sections/Descargas/Audios/Audios'
import Cuadros from '../sections/Descargas/Cuadros/Cuadros'
import Habladores from '../sections/Descargas/Habladores/Habladores'
import Bottom from '../sections/Descargas/Bottom/Bottom'

const Descargas = () => {
  return (
    <ContentBox
    varwidth = '100%'
    varmaxwidth = '100%'
    vardisplay = 'flex'
    >
        <Hero />
        <Tarjetas />
        <Leidos />
        <Atajos />
        <Audios />
        <Cuadros />
        <Habladores />
        <Bottom />
    </ContentBox>
  )
}

export default Descargas