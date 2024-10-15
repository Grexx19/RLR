import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from "../Styled.module.scss";
import stylesBottom from "./Bottom.module.scss"
import { RedHatDisplay } from '../Styled';

const Bottom = () => {
  let id = require('../../assets/img/Ingenieria_Digital_by_Ricardo_Lopez.png');
  let int = require('../../assets/img/INT_by_Ricardo_Lopez.png');
  let sp = require('../../assets/img/SuperLeads_by_Ricardo_Lopez.png');
  return (
    <div className={stylesBottom.bottonSection}>
      <div className={stylesBottom.container}>
        <div>
          <p className={styles.boldSans}>
            <FormattedMessage
              id="bottom.text"
            />
          </p>
        </div>
       
      <div className={stylesBottom.logos}>
            <a href='https://ingenieriadigital.mx'>
              <img src={id} alt="IngenieriaDigital_RicardoLopezRayero" className={stylesBottom.imgID}/>
              <RedHatDisplay varcolor = 'white' varfontsize = '13px' varpadding= '10px 0 0'>2019</RedHatDisplay>
            </a>
            <a href='https://superleads.mx'>
              <img src={sp} alt="SuperLeads_RicardoLopezRayero" className={stylesBottom.imgSL}/>
              <RedHatDisplay varcolor = 'white' varfontsize = '13px' varpadding= '10px 0 0'>2022</RedHatDisplay>
            </a>
            <a href='https://int.store'>
              <img src={int} alt="Int_RicardoLopezRayero" className={stylesBottom.imgInt}/>
              <RedHatDisplay varcolor = 'white' varfontsize = '13px' varpadding= '10px 0 0'>2022</RedHatDisplay>
            </a>
            
          </div>
    </div>
    </div>
  );
};

export default Bottom;