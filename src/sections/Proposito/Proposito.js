import React, { Suspense } from 'react';

import styles from "../../components/Styled.module.scss";
import stylesProposito from "./Proposito.module.scss";
import { RedHatDisplay } from '../../components/Styled';

const FormattedMessage = React.lazy(() => import('react-intl').then(module => ({ default: module.FormattedMessage })));

const Proposito = () => {

  return (
    <div className={stylesProposito.propositoSection}>
      <Suspense fallback={<div>Loading...</div>}>
        <div className={stylesProposito.container}>
          <div>
            <div className={styles.columnsAboveTitleCenter}>
              <div className={styles.littleLineWhite}/>
              <div>
                <p className={styles.AboveTitleP}>
                  <FormattedMessage
                    defaultMessage='Proposito'
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
              defaultMessage='subtitulo'
                id="proposito.subtitle"
              />
            </RedHatDisplay>
            <p className={styles.robotoItalic}>
              <FormattedMessage
                defaultMessage='contenido'
                id="proposito.subtitle2"
              />
            </p>
          </div>
        
          <div className={stylesProposito.propositoFraseContainer}>
            <p className={styles.fraseSans}>
              <FormattedMessage
                defaultMessage='frase autor'
                id="proposito.frase"
              />
            </p>
            <p className={styles.autorRoboto}>
              <FormattedMessage
                defaultMessage='Autor'
                id="proposito.autor"
              />
            </p>
          </div>
        </div>
        </Suspense>
    </div>
  );
};

export default Proposito;