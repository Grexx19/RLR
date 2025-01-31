import React, { Suspense } from 'react';
import styles from '../../components/Styled.module.scss';
import stylesEventos from './Eventos.module.scss';
import { ImagePicture, RedHatDisplay, Roboto } from '../../components/Styled';

const FormattedMessage = React.lazy(() => import('react-intl').then(module => ({ default: module.FormattedMessage })));
const Eventos = () => {
  const values = {
    strong: (chunks) => <strong>{chunks}</strong>,
  };
  let int = require('../../assets/img/int_eventos.png');
  return (
    <div className={stylesEventos.eventosSection}>
      <Suspense fallback={<div>Loading...</div>}>
      <div className={stylesEventos.titleContent}>
        <div className={styles.columnsAboveTitle}>
          <div className={styles.littleLinePurple} />
          <div>
            <p className={styles.AboveTitle}>
              <FormattedMessage id="eventos_int.title" defaultMessage='titulo' />
            </p>
          </div>
        </div>
        <div>
          <RedHatDisplay
          varfontsize = '26px'
          varfontsizemobile = '22px'
          varweight = '700'
          vartextalign = 'left'
          >
            <FormattedMessage id="eventos_int.subtitle" defaultMessage='eventos subtitulo' />
          </RedHatDisplay>
        </div>
      </div>

      <div className={stylesEventos.container}>
        <div className={stylesEventos.eventosInt}>
          <div className={stylesEventos.image1}>
            <div className={stylesEventos.textCont}>
              <p className={styles.descriptionRoboto}>
                <FormattedMessage
                  id="eventos_int.container1"
                  values={values}
                  defaultMessage='contenido evento 1'
                />
              </p>
            </div>
          </div>

          <div className={stylesEventos.image2}>
            <div className={stylesEventos.textCont}>
              <p className={styles.descriptionRoboto}>
                <FormattedMessage
                  id="eventos_int.container2"
                  values={values}
                  defaultMessage='contenido evento 2'
                />
              </p>
            </div>
          </div>

          <div className={stylesEventos.image3}>
            <div className={stylesEventos.textCont}>
              <p className={styles.descriptionRoboto}>
                <FormattedMessage
                  id="eventos_int.container3"
                  values={values}
                  defaultMessage='contenido evento 3'
                />
              </p>
            </div>
          </div>

          <div className={stylesEventos.image4}>
            <div className={stylesEventos.textCont}>
              <p className={styles.descriptionRoboto}>
                <FormattedMessage
                  id="eventos_int.container4"
                  values={values}
                  defaultMessage='contenido evento 4'
                />
              </p>
            </div>
          </div>
        </div>
        <Roboto
        varfontsize = '30px'
        vartextalign = 'left'
        varcolor = '#595959'
        varweight = '400'
        varpadding = '46px 0 0'
        varfontsizemobile = '20px'
        textaligntablet = 'center'
        movilpadd = '9px 0 0'
        >
          <FormattedMessage
            id="eventos_int.frase"
            values={values}
            defaultMessage='frase eventos int'

          />
        </Roboto>
        <ImagePicture 
        src={int} alt='int'
        varmaxwidth ='83px'
        varwidth ='50%'
        varmargin = '32px 0 94px'
         loading='lazy'
        />
      </div>
      </Suspense>
    </div>
  );
};

export default Eventos;