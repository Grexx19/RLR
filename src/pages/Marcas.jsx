import React, { Suspense } from 'react'
import Marcas from '../sections/Descargas/Marcas/Marcas'
import { ContentBox } from '../components/Styled'

const MarcasPage = () => {
  return (
    <ContentBox 
    vardisplaymovil='flex'>
      <Suspense fallback={<div>Cargando...</div>}>
        <Marcas />
      </Suspense>
    </ContentBox>
  )
}

export default MarcasPage