import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from "../../components/Styled.module.scss";
import "./Documentales.scss"
import { RedHatDisplay } from '../../components/Styled';
import VideoGrid from './Videos';

const Documentales = () => {
  return (
    <div className='documentalesSection'>
      <div className='titleContent'>
        <div className={styles.columnsAboveTitle}>
         <div className={styles.littleLinePurple}/>
         <div>
            <p className={styles.AboveTitle}>
              <FormattedMessage
                id="documentales.title"
              />
            </p>
         </div>
        </div>
        <div className='divSpace'>
          <RedHatDisplay
          varfontsize = '26px'
          varweight = '700'
          vartextalign = 'left'
          varfontsizemobile = '20px'
          >
              <FormattedMessage
                id="documentales.subtitle"
              />
          </RedHatDisplay>
        </div>
      </div>
      <VideoGrid />
    </div>
  );
};

export default Documentales;