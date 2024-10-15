import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from "../../components/Styled.module.scss";
import stylesIntroduction from "./Introduccion.module.scss";
import { ContentBox, ImagePicture, RedHatDisplay } from '../../components/Styled';

const Introduccion = () => {
let id = require('../../assets/img/Ingenieria_Digital_by_Ricardo_Lopez.png');
let superleads = require('../../assets/img/SuperLeads_by_Ricardo_Lopez.png');
let int = require('../../assets/img/INT_by_Ricardo_Lopez.png');
let rlrmovil = require('../../assets/img/rlrmovil.png');

  return (
    <div className={stylesIntroduction.introduccionSection}>
      
        <ContentBox
        varmaxwidth= '1248px'
        varwidth= '100%'
        varpadding = '0 0 27px'
        vardisplaymovil = 'flex'
        >
          <div className={stylesIntroduction.container}>
          <div className={styles.columnsAboveTitle}>
            <div className={styles.littleLine}/>
            <div>
              <p className={styles.AboveTitleP}>
              <FormattedMessage
                id="introduction.nameis"
              />
            </p>
            </div>
          </div>
          <div>
            <p className={styles.nameSans}>
              <FormattedMessage
                id="introduction.name"
              />
            </p>
            
            <p className={styles.textSans}>
              <FormattedMessage
                id="introduction.abovetitle"
                defaultMessage="<p style={{ whiteSpace: 'pre-line' }}><strong>Ingeniero  |  Consultor digital  |  INT lover</strong></p>"
                values={{ p: (chunks) => <p>{chunks}</p> }}
              />
            </p>
            <ContentBox
            vardisplaymovil = 'block'
            vardisplay = 'none'
            varmargin = '19px 0 0'
            >
              <ImagePicture src={rlrmovil} varwidth='100%' alt='ricardo_lopez_reyero' />
            </ContentBox>
          </div>
          <div className={stylesIntroduction.contenText}>
            <p className={styles.descriptionRobotoP}>
              <FormattedMessage
                id="introduction.description.contenido"
                values={{
                  link1: <a href="https://ingenieridigital.mx" className={stylesIntroduction.enlace}>IngenieriaDigital.mx</a>,
                  link2: <a href="https://superleads.mx" className={stylesIntroduction.enlace}>SuperLeads.mx</a>,
                  strong: (chunks) => <strong>{chunks}</strong>,
                  br: <br />
                }}
              />
            </p>
          </div>
          <div className={stylesIntroduction.contentProyectos}>
            <a href='https://ingenieriadigital.mx'>
              <img src={id} alt="IngenieriaDigital_RicardoLopezRayero" className={stylesIntroduction.imgID}/>
              <RedHatDisplay varcolor = 'white' varfontsize = '13px' varpadding= '10px 0 0'>2019</RedHatDisplay>
            </a>
            <a href='https://superleads.mx'>
              <img src={superleads} alt="SuperLeads_RicardoLopezRayero" className={stylesIntroduction.imgSL}/>
              <RedHatDisplay varcolor = 'white' varfontsize = '13px' varpadding= '10px 0 0'>2022</RedHatDisplay>
            </a>
            <a href='https://int.store'>
              <img src={int} alt="Int_RicardoLopezRayero" className={stylesIntroduction.imgInt}/>
              <RedHatDisplay varcolor = 'white' varfontsize = '13px' varpadding= '10px 0 0'>2022</RedHatDisplay>
            </a>
          </div>
          <RedHatDisplay
            varfontsize = '12.26px'
            varcolor = '#fff'
            vartextalign = 'left'
            varpadding = '48px 0 30px'
          >
            <FormattedMessage id='introduction.updated' />
          </RedHatDisplay>
          </div>
        </ContentBox>
        
    </div>
  );
};

export default Introduccion;