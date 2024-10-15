import React from 'react'
import { Btn, ContentBox, Griditem, Gridwrapper, ImagePicture, RedHatDisplay } from '../../../components/Styled'
import { FormattedMessage } from 'react-intl'
import Download from '@mui/icons-material/Download'

const Marcas = () => {
    let id = require('../../../assets/img/IngenieriaDigital_marcas_Ricardo_Lopez_Reyero.png')
    let int = require('../../../assets/img/INT_marcas_Ricardo_Lopez_Reyero.png')
    let sp = require('../../../assets/img/SuperLeads_marcas_Ricardo_Lopez_Reyero.png')
    let zipid = require('../../../assets/zips/Ingenieria Digital.zip')
    let zipint = require('../../../assets/zips/INT Imgagen.zip')
    let zipsp = require('../../../assets/zips/SuperLeads.zip')

  return (
    <ContentBox
        varmaxwidth = '1440px'
        varwidth = '100%'
        maxwidhtMovil ='80%'
        smminheight = '1301px'
        varpadding = '100px 0 10px'
    >
        <RedHatDisplay
            varfontsize = '26px'
            varweight = '700'
            varcolor = '#232E35'
            vartextalign ='left'
            varpadding = '0px'
            varmaxwidth = '1190px'
            varwidth = '100%'
            varmargin = '0 auto'
            maxwidthmovil = '90%'
            textalignmovil = 'center'
        >
            <FormattedMessage id='downloads.marcas.title' />
        </RedHatDisplay>
        <Gridwrapper
        varmaxwidth = '1312px'
        varwidth = '100%'
        vargridtemplatecolumns = 'repeat(3, 1fr)'
        columnsMovil ='100%'
        vargridgap = '6.8%'
        varmargin = '52px 0'
        >
            <Griditem
            vardisplay = 'flex'
            alignItems ='end'
            fdirectionmovil = 'row-reverse'
            >
                <ImagePicture src={id} 
                varmaxwidth = '378px'
                varwidth = '100%' 
                />
                <Btn
                varmargin = '56px 0 0'
                varsmmargin = '0px -124px 0 0'
                backgcolor ='#9DA2EF'
                backgcolorhover = '#585DCC'
                varfontsize = '20px'
                vargridgap = '14px'
                varweight = '500'
                varfontsizemobile ='16px'
                as="a"
                href={zipid} // Cambia esta ruta por la correcta
                download
                style={{textDecoration: 'none'}}
                >
                    <Download />
                    <FormattedMessage id='downloads.marcas.btn' />
                </Btn>
            </Griditem>
            <Griditem
                vardisplay = 'flex'
                alignItems ='end'
                fdirectionmovil = 'row-reverse'
            >
                <ImagePicture src={sp} 
                varmaxwidth = '378px'
                varwidth = '100%' 
                />
                <Btn
                varmargin = '56px 0 0'
                varsmmargin = '0px -124px 0 0'
                backgcolor ='#9DA2EF'
                backgcolorhover = '#585DCC'
                varfontsize = '20px'
                vargridgap = '14px'
                varweight = '500'
                varfontsizemobile ='16px'

                as="a"
                href={zipsp} // Cambia esta ruta por la correcta
                download
                style={{textDecoration: 'none'}}
                >
                    <Download />
                    <FormattedMessage id='downloads.marcas.btn' />
                </Btn>
            </Griditem>
            <Griditem
                vardisplay = 'flex'
                alignItems ='end'
                fdirectionmovil = 'row-reverse'
            >
                <ImagePicture src={int} 
                varmaxwidth = '378px'
                varwidth = '100%' 
                />
                <Btn
                varmargin = '56px 0 0'
                backgcolor ='#9DA2EF'
                backgcolorhover = '#585DCC'
                varfontsize = '20px'
                vargridgap = '14px'
                varweight = '500'
                varsmmargin = '0px -124px 0 0'
                varfontsizemobile ='16px'
                as="a"
                href={zipint} // Cambia esta ruta por la correcta
                download
                style={{textDecoration: 'none'}}
                >
                    <Download />
                    <FormattedMessage id='downloads.marcas.btn' />
                </Btn>
            </Griditem>
        </Gridwrapper>
    </ContentBox>
  )
}

export default Marcas