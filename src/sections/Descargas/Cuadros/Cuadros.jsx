import React from 'react'
import { ContentBox, ImagePicture, RedHatDisplay, Btn } from '../../../components/Styled'
import { FormattedMessage } from 'react-intl'
import Download from '@mui/icons-material/Download'

const Cuadros = ({ id }) => {
  let Deseaengrande = require('../../../assets/img/Piensa_en_grande_persevera_agradece.png')
  let cuadro2 = require('../../../assets/img/cuadro2.png')
  let cuadro3 = require('../../../assets/img/Mismo_lugar_diferente_perspectiva.png')
  let cuadro4 = require('../../../assets/img/Haz_lo_que_ves_confia_en_ti.png')
  let cuadro5 = require('../../../assets/img/Desear_Escribir_Visualizar_Imaginar_Manifestar_Percibir.png')
  let cuadro6 = require('../../../assets/img/Niveles_de_conciencia.png')
  let cuadro7 = require('../../../assets/img/Activos_del_ser_humano.png')
  let cuadro8 = require('../../../assets/img/Mapa_mental_int.png')
  let cuadro9 = require('../../../assets/img/Mapa_int.png')
  let cuadros = require('../../../assets/zips/Cuadros Explicativos.zip')

  return (
    <ContentBox
    id={id}
    varmaxwidth = '1440px'
    varwidth = '100%'
    vardisplay = 'flex'
    varpadding ='20px 0 120px'
    maxwidhtMovil = '94%'
    varpaddingm = '20px 0 60px'
    >
      <RedHatDisplay
        varfontsize = '26px'
        varweight = '700'
        varcolor = '#232E35'
        vartextalign ='left'
        varpadding = '0px'
        varmaxwidth = '1190px'
        varwidth = '100%'
        varfontsizemobile = '24px'
        textalignmovil = 'center'
        >
          <FormattedMessage id='downloads.cuadros.title'/>
      </RedHatDisplay>
      <ContentBox
      varmaxwidth = '1168px'
      varwidth = '100%'
      >
        <ImagePicture src={Deseaengrande} varwidth= '1161px' varmaxwidth= '100%' varmargin='57px 0 0px' varmarginmovil='32px 0 0' alt='Desea en grande_persevers_agradece' loading='lazy'/>
        <ImagePicture src={cuadro2} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0'  varmarginmovil='22px 0 0' alt='Eres_mucho_mas_inteligente_de_lo_que_crees' loading='lazy'/>
        <ImagePicture src={cuadro3} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0' varmarginmovil='22px 0 0' alt='mismo_lugar_diferente_perspectiva' loading='lazy'/>
        <ImagePicture src={cuadro4} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0' varmarginmovil='22px 0 0' alt='haz_mas_de_lo_que_ves' loading='lazy'/>
        <ImagePicture src={cuadro5} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0' varmarginmovil='22px 0 0' alt='mapa_espiritual_fisico' loading='lazy'/>
        <ImagePicture src={cuadro6} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0' varmarginmovil='22px 0 0' alt='mapa_niveles_de_conciencia' loading='lazy'/>
        <ImagePicture src={cuadro7} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0' varmarginmovil='22px 0 0' alt='mapa_activos_del_ser_humano' loading='lazy'/>
        <ImagePicture src={cuadro8} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0' varmarginmovil='22px 0 0' alt='mapa_int' loading='lazy'/>
        <ImagePicture src={cuadro9} varwidth= '1161px' varmaxwidth= '100%' varmargin='69px 0 0' varmarginmovil='22px 0 0' alt='mapa_int' loading='lazy'/>
      </ContentBox>
      <Btn
      varmargin = '81px 0 0'
      backgcolor ='#9DA2EF'
      backgcolorhover = '#585DCC'
      varfontsize = '20px'
      vargridgap = '14px'
      varweight = '500'
      varsmmargin = '40px 0 0'
      varfontsizemobile ='16px'
      as="a"
      href={cuadros} // Cambia esta ruta por la correcta
      download
      style={{textDecoration: 'none'}}
      >
        <Download />
        <FormattedMessage id='downloads.cuadros.btndescarga' />
      </Btn>
    </ContentBox>
  )
}

export default Cuadros