import React from 'react'
import { Btn, ContentBox, ImagePicture, RedHatDisplay } from '../../../components/Styled'
import { FormattedMessage } from 'react-intl'
import './Leidos.scss'
import Download from '@mui/icons-material/Download'

const Leidos = ({ id }) => {
    let pdfLeidos = require('../../../assets/docs/Libros Leídos y recomendaciones Ricardo López Reyero 2024.pdf')
    let leidos = require('../../../assets/img/libros_leidos_Ricardo_Lopez_Reyero.png')

  return (
    <ContentBox
    id={id}
    varmaxwidth = '1268px'
    varwidth = '100%'
    varpadding = '0 0 120px'
    >
        <ContentBox
        className='sectionLeidos'
        varmaxwidth = '100%'
        varwidth = '100%'
        varminheight ='1258px'
        smminheight = '640px'
        vardisplay ='flex'
        varjustifycontent ='space-between'
        varalignitems ='normal'
        >
            <RedHatDisplay
            varfontsize = '26px'
            varweight = '700'
            varcolor = '#232E35'
            vartextalign ='left'
            varpadding = '35px'
            textalignmovil = 'center'
            >
                <FormattedMessage id='downloads.books.title'/>
            </RedHatDisplay>
            <ImagePicture src={leidos} varmaxwidth ='100%' varwidth='450px' vardisplay = 'none' vardisplaymovil= 'block' loading='lazy' />
            <ContentBox
                varmaxwidth = '447px'
                varwidth = '95%'
                varmargin = '0 auto'
                vardisplay = 'flex'
            >
                <RedHatDisplay
                varfontsize = '26px'
                varfontsizemobile = '20px'
                varweight = '500'
                varlineheight ='1.4em'
                varcolor = '#595959'
                varmaxwidth = '100%'
                varwidth = '100%'
                varpadding = '0 0 32px'
                >
                    <FormattedMessage id='downloads.books.description'/>
                </RedHatDisplay>
                <Btn
                backgcolor ='#9DA2EF'
                backgcolorhover = '#585DCC'
                as="a"
                href={pdfLeidos} // Cambia esta ruta por la correcta
                download
                style={{textDecoration: 'none'}}
                varfontsize = '19px'
                vargridgap = '14px'
                varweight = '400'
                varpadding = '16px 26px'
                >
                    <Download />
                    <FormattedMessage id='downloads.books.btnbooks'/>
                </Btn>
            </ContentBox>
            
        </ContentBox>
    </ContentBox>
  )
}

export default Leidos