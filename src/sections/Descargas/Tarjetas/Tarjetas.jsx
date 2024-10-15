import React from 'react'
import { Btn, ContentBox, Griditem, Gridwrapper, ImagePicture, RedHatDisplay } from '../../../components/Styled'
import { FormattedMessage } from 'react-intl'
import './Tarjetas.scss'
import { Download } from '@mui/icons-material'

const Tarjetas = () => {
    let tarjetThomas = require('../../../assets/img/Thomas_Alba_Edinson_Ricardo_Lopez_Reyero.png');
    let tarjetCredo = require('../../../assets/img/Credo_del_genio_Ricardo_Lopez_Reyero.png');
    let objetivo = require('../../../assets/img/mi_objetivo_Ricardo_Lopez_Reyero.png')
    let pdfThomas = require('../../../assets/docs/Tarjeta Objetivos - Thomas Alba Edison.pdf')
    let pdfCredo = require('../../../assets/docs/Tarjeta Objetivos - Credo del genio.pdf')
  return (
    <ContentBox
    varmaxwidth = '100%'
    varwidth = '100%'
    varminheight = '665px'
    vardisplay = 'flex'
    className='sectionTarjets'
    varpaddingm = '60px 0'
    >
        <ContentBox
        varmaxwidth = '1200px'
        varwidth = '90%'
        >
            <RedHatDisplay
            varfontsize = '26px'
            varfontsizemobile = '22px'
            varweight = '700'
            varcolor = '#232E35'
            vartextalign ='left'
            varpadding = '0 0 24px'
            textalignmovil = 'center'
            >
                <FormattedMessage id='downloads.cards.title' />
            </RedHatDisplay>
            <Gridwrapper
            varwidth = '98%'
            vargridtemplatecolumns = 'repeat(2, 1fr)'
            columnsMovil = '100%'
            vargridgap = '52px'
            >
                <Griditem
                vardisplayMovil ='flex'
                >
                    <Gridwrapper
                    varwidth = '100%'
                    vargridtemplatecolumns ='repeat(2, 1fr)'
                    columnsMovil = '100%'
                    vargridgap = '16px'
                    varmargin = '0 0 22px'
                    >
                        <Griditem>
                            <ImagePicture src={tarjetThomas} varwidth= '100%' />
                        </Griditem>
                        <Griditem>
                            <ImagePicture src={objetivo} varwidth= '100%' />
                        </Griditem>
                    </Gridwrapper>
                    <Btn
                    backgcolor ='#9DA2EF'
                    backgcolorhover = '#585DCC'
                    as="a"
                    href={pdfThomas} // Cambia esta ruta por la correcta
                    download
                    style={{textDecoration: 'none'}}
                    varfontsize = '19px'
                    vargridgap = '14px'
                    varweight = '400'
                    varpadding = '16px 26px'
                    >
                        <Download />
                        <FormattedMessage id='downloads.cards.btncard' />
                    </Btn>
                </Griditem>
                <Griditem
                vardisplayMovil = 'flex'
                >
                    <Gridwrapper
                    varwidth = '100%'
                    vargridtemplatecolumns ='repeat(2, 1fr)'
                    columnsMovil = '100%'
                    vargridgap = '16px'
                    varmargin = '0 0 22px'
                    >
                        <Griditem>
                            <ImagePicture src={tarjetCredo} varwidth= '100%' />
                        </Griditem>
                        <Griditem>
                            <ImagePicture src={objetivo} varwidth= '100%' />
                        </Griditem>
                    </Gridwrapper>
                    <Btn
                    backgcolor ='#9DA2EF'
                    backgcolorhover = '#585DCC'
                    as="a"
                    href={pdfCredo} // Cambia esta ruta por la correcta
                    download
                    style={{textDecoration: 'none'}}
                    varfontsize = '19px'
                    vargridgap = '14px'
                    varweight = '400'
                    varpadding = '16px 26px'
                    >
                        <Download />
                        <FormattedMessage id='downloads.cards.btncard' />
                    </Btn>
                </Griditem>
            </Gridwrapper>

        </ContentBox>
        
    </ContentBox>
  )
}

export default Tarjetas