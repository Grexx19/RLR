import React from 'react'
import { ContentBox, Griditem, Gridwrapper, ImagePicture, RedHatDisplay } from '../../../components/Styled'
import FrecuenciaImg from '../../../assets/img/Frecuencia_296Hz_x.png';
import ImaginationImg from '../../../assets/img/Imagination_Bob_Proctor.png';
import Thewill from '../../../assets/img/The_will_Bob_Proctor.png'
import PercepcionImg from '../../../assets/img/Percepcion_Bob_Proctor.png'
import Audio1 from '../../../assets/Audios/Frecuencia 396Hz.MP3';
import Audio2 from '../../../assets/Audios/Imagination - Bob Proctor.mp3';
import Audio3 from "../../../assets/Audios/The Will  - Bob Proctol.mp3";
import Audio4 from "../../../assets/Audios/Percepcion - Bob Proctol.mp3";
import Mundointerno from '../../../assets/img/Mundo_interno_vs_mundo_externo_neville_goddard.png';
import Audio5 from "../../../assets/Audios/Mundo interno vs Mundo externo - Neville Goddard.mpeg";
import atusordenes from '../../../assets/img/A_tus_ordenes_neville_goddard.png';
import Audio6 from "../../../assets/Audios/A tus ordenes by Neville Goddard.m4a";
import imaginacionDespierta from '../../../assets/img/Imaginacion_despierta_neville_goddard.png';
import Audio7 from "../../../assets/Audios/Imaginacio╠ün despierta por Neville Goddard.m4a";
import './Audios.scss'
import { FormattedMessage } from 'react-intl';
import 'react-h5-audio-player/lib/styles.css';
import AudioPlayer from 'react-h5-audio-player';

const audios = [
  {
    id: 1,
    audioUrl: Audio1,
    imgAudio: FrecuenciaImg,
  },
  {
    id: 2,
    audioUrl: Audio2,
    imgAudio: ImaginationImg,
  },
  {
    id: 3,
    audioUrl: Audio3,
    imgAudio: Thewill,
  },
  {
    id: 4,
    audioUrl: Audio4,
    imgAudio: PercepcionImg,
  },
  {
    id: 5,
    audioUrl: Audio5,
    imgAudio: Mundointerno,
  },
  {
    id: 6,
    audioUrl: Audio6,
    imgAudio: atusordenes,

  },
  {
    id: 7,
    audioUrl: Audio7,
    imgAudio: imaginacionDespierta,
  },
]
const Audios = () => {
  return (
    <ContentBox
    varmaxwidth = '1440px'
    varwidth = '100%'
    vardisplay = 'flex'
    varpadding ='20px 0 120px'
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
          <FormattedMessage id='downloads.audios.title'/>
      </RedHatDisplay>
      <Gridwrapper
        varmaxwidth = '1204px'
        varwidth = '100%'
        vargridtemplatecolumns = 'repeat(3, 1fr)'
        columnsMovil = 'repeat(2, 1fr)'
        vargridgap = '56px 9%'
        varmargin = '56px 0 0'
        movilWidth ='90%'
        gridgapTablet ='20px 20px'
        marginMovil = '32px 0 0'
      >
        {audios.map((audio) => (
          <Griditem key={audio.id} vardisplay= 'flex'>
            <ImagePicture src={audio.imgAudio} varmaxwidth = '327px' varwidth= '100%' />
            {/* <audio className='custom-audio' controls>
              <source src={audio.audioUrl} type="audio/mp3" />
              Tu navegador no soporta la reproducción de audio.
            </audio> */}
            <AudioPlayer
              src={audio.audioUrl}
              onPlay={e => console.log("onPlay")}
              customAdditionalControls={[]}
              customVolumeControls={[]}
              customProgressBarSection={['CURRENT_TIME', 'PROGRESS_BAR', 'DURATION']}
              style={{
                backgroundColor: '#9DA2EF',
                color: '#fff',
                borderRadius: '8px',
              }}
            />
          </Griditem>
        ))}
      </Gridwrapper> 
    </ContentBox>
  )
}

export default Audios