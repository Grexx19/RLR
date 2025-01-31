import React from 'react'
import { ContentBox, RedHatDisplay } from '../../../components/Styled'
import { FormattedMessage } from 'react-intl'
import './Bottom.scss'
import ShareButton from '../../../components/ShareButton'

const Bottom = ({ id }) => {
  return (
    <ContentBox
    id={id}
    varmaxwidth= '100%'
    varwidth= '100%'
    className='backg'
    vardisplay= 'flex'
    varminheight= '404px'
    smminheight = '310px'
    >
        <ContentBox
        varmaxwidth= '1163px'
        varwidth= '90%'
        >
            <RedHatDisplay
            varfontsize = '50px'
            varcolor = '#fff'
            varweight = '600'
            varlineheight = '1.3em'
            varfontstyle = 'italic'
            varfontsizemobile ='24px'
            movillineheight ='1.6em'
            >
                <FormattedMessage 
                 id='downloads.bottom.frase'
                 values={{
                  br: <br />,
                }} />
            </RedHatDisplay>
            <ShareButton />
        </ContentBox>
    </ContentBox>
  )
}

export default Bottom