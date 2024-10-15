import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from "../../components/Styled.module.scss";
import stylesProposito from "./Proposito.module.scss";
import { RedHatDisplay } from '../../components/Styled';

const Proposito = () => {

  return (
    <div className={stylesProposito.propositoSection}>
        <div className={stylesProposito.container}>
          <div>
            <div className={styles.columnsAboveTitleCenter}>
              <div className={styles.littleLineWhite}/>
              <div>
                <p className={styles.AboveTitleP}>
                  <FormattedMessage
                    id="proposito.title"
                 />
                </p>
              </div>
              <div className={styles.littleLineWhite}/>
            </div>
            <RedHatDisplay
            varcolor = '#fff'
            varfontsize = '48px'
            varweight = '800'
            varfontsizemobile = '32px'
            >
              <FormattedMessage
                id="proposito.subtitle"
              />
            </RedHatDisplay>
            <p className={styles.robotoItalic}>
              <FormattedMessage
                id="proposito.subtitle2"
              />
            </p>
          </div>
        
          <div className={stylesProposito.propositoFraseContainer}>
            <p className={styles.fraseSans}>
              <FormattedMessage
                id="proposito.frase"
              />
            </p>
            <p className={styles.autorRoboto}>
              <FormattedMessage
                id="proposito.autor"
              />
            </p>
          </div>
        </div>
        
    </div>
  );
};

export default Proposito;