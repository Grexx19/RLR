import React from 'react'
import { ContentBox, ImagePicture, RedHatDisplay, Btn, Gridwrapper, Griditem } from '../../../components/Styled'
import habladoresImg1 from '../../../assets/img/piense_y_hagase_rico.png';
import habladoresImg2 from '../../../assets/img/desea_en_grande.png';
import habladoresImg3 from '../../../assets/img/gozo_mi_trabajo.png'
import habladoresImg4 from '../../../assets/img/leo_todos_los_dias.png'
import habladoresImg5 from '../../../assets/img/soy_mas_listo_de_lo_que_pienso.png';
import habladoresImg6 from '../../../assets/img/soy_el_guardian_de_mi_tiempo.png';
import habladoresImg7 from '../../../assets/img/do_the_hard_thing.png';
import urlBtn1 from '../../../assets/img/habladores_piense_y_hagase_rico_ricardo_lopez_reyero.png';
import urlBtn2 from '../../../assets/img/habladores_desea_en_grande_ricardo_lopez_reyero.png';
import urlBtn3 from '../../../assets/img/habladores_gozo_mi_trabajo_ricardo_lopez_reyero.png';
import urlBtn4 from '../../../assets/img/habladores_leo_todos_los_dias_ricardo_lopez_reyero.png';
import urlBtn5 from '../../../assets/img/habladores_soy_el_guardian_de_mi_tiempo_ricardo_lopez_reyero.png';
import urlBtn6 from '../../../assets/img/habladores_soy_el_guardian_de_mi_tiempo_ricardo_lopez_reyero.png';
import urlBtn7 from '../../../assets/img/habladores_do_the_hard_thing_ricardo_lopez_reyero.png';
import { FormattedMessage } from 'react-intl';
import { Download } from '@mui/icons-material';

const images = [
  {
    id: 1,
    imgAudio: habladoresImg1,
    urlBtn: urlBtn1,
  },
  {
    id: 2,
    imgAudio: habladoresImg2,
    urlBtn: urlBtn2,
  },
  {
    id: 3,
    imgAudio: habladoresImg3,
    urlBtn: urlBtn3,
  },
  {
    id: 4,
    imgAudio: habladoresImg4,
    urlBtn: urlBtn4,
  },
  {
    id: 5,
    imgAudio: habladoresImg5,
    urlBtn: urlBtn5,
  },
  {
    id: 6,
    imgAudio: habladoresImg6,
    urlBtn: urlBtn6,
  },
  {
    id: 7,
    imgAudio: habladoresImg7,
    urlBtn: urlBtn7,
  },
]
const Habladores = () => {
  return (
    <ContentBox
    varmaxwidth = '1440px'
    varwidth = '100%'
    vardisplay = 'flex'
    varpadding ='20px 0 100px'
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
        textalignmovil = 'center'
        >
          <FormattedMessage id='downloads.habladores.title'/>
      </RedHatDisplay>
      <Gridwrapper
        varmaxwidth = '1200px'
        varwidth = '100%'
        vargridtemplatecolumns = 'repeat(3, 1fr)'
        columnsMovil ='100%'
        vargridgap = '60px 29px'
        varmargin = '56px 0 0'
        marginMovil ='34px 0 0'
        gridgapTablet ='30px'
      >
        {images.map((image) => (
          <Griditem key={image.id} vardisplayMovil ='flex'>
            <ImagePicture src={image.imgAudio} varmaxwidth = '327px' varwidth= '100%' />
            <Btn
            varmargin = '21px 0 0'
            backgcolor ='#9DA2EF'
            backgcolorhover = '#585DCC'
            varfontsize = '19px'
            vargridgap = '14px'
            varweight = '400'
            varpadding = '16px 26px'
            varfontsizemobile ='16px'
            varsmmargin ='15px 0 0'
            as="a"
            href= {image.urlBtn} // Cambia esta ruta por la correcta
            download
            style={{textDecoration: 'none'}}
            >
              <Download />
              <FormattedMessage id='downloads.habladores.btn' />
            </Btn>
          </Griditem>
        ))}
      </Gridwrapper> 
    </ContentBox>
  )
}

export default Habladores