import React from 'react'
import { Btn, ContentBox, Griditem, Gridwrapper, ImagePicture, RedHatDisplay } from '../../../components/Styled'
import { FormattedMessage } from 'react-intl'
import Download from '@mui/icons-material/Download'

const Atajos = () => {
    let FormulaImg = require('../../../assets/img/Fórmula para la confianza en mí mismo.png')
    let mastermindImg = require('../../../assets/img/Directrices_del_mastermind_neville_goddard.png')
    let Formula = require('../../../assets/zips/Formula para la confianza en mi mismo.zip')
    let mastermind = require('../../../assets/docs/MasterMind.pdf')

  return (
    <ContentBox
    varmaxwidth ='1440px'
    varwidth = '100%'
    vardisplay = 'flex'
    varmargin = '100px 0 120px'
    varmarginmovil = '40px 0 60px'
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
            <FormattedMessage id='downloads.atajos.title' />
        </RedHatDisplay>
        <Gridwrapper
        varmaxwidth ='1022px'
        varwidth = '100%'
        vargridtemplatecolumns = 'repeat(2, 1fr)'
        columnsMovil = '100%'
        vargridgap = '15%'
        varmargin = '32px 0 0px'
        gridgapTablet = '35px'
        movilWidth = '87%'
        >
            <Griditem
            vardisplay = 'flex'
            >
                <ImagePicture src={FormulaImg} varmaxwidth = '432px' varwidth = '100%' />
                <Btn
                varmargin = '26px 0 0'
                backgcolor ='#9DA2EF'
                backgcolorhover = '#585DCC'
                varfontsize = '20px'
                vargridgap = '14px'
                varweight = '500'
                varfontsizemobile ='16px'
                varsmmargin ='15px 0 0'
                as="a"
                href={Formula} // Cambia esta ruta por la correcta
                download
                style={{textDecoration: 'none'}}
                >
                    <Download />
                    <FormattedMessage id='downloads.cards.btncard' />
                </Btn>
            </Griditem>
            <Griditem
            vardisplay = 'flex'
            >
                <ImagePicture src={mastermindImg} varmaxwidth = '432px' varwidth = '100%' />
                <Btn
                varmargin = '26px 0 0'
                backgcolor ='#9DA2EF'
                backgcolorhover = '#585DCC'
                varfontsize = '20px'
                vargridgap = '14px'
                varweight = '500'
                varfontsizemobile ='16px'
                varsmmargin ='15px 0 0'
                as="a"
                href={mastermind} // Cambia esta ruta por la correcta
                download
                style={{textDecoration: 'none'}}
                >
                    <Download />
                    <FormattedMessage id='downloads.cards.btncard' />
                </Btn>
            </Griditem>
        </Gridwrapper>
    </ContentBox>
  )
}

export default Atajos