import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from "../../components/Styled.module.scss";
import stylesMusica from "./Musica.module.scss"

const Musica = () => {

  // let Bethobeen = require("../../assets/img/Ricardo_Lopez_Rayero_Musica_bethobeen.png");
  // let AcDc = require("../../assets/img/Ricardo_Lopez_Rayero_Musica_ac_dc.png");
  return (
    <div className={stylesMusica.musicaSection}>
      <div className={stylesMusica.container}>
        
      <div className={styles.titleContent}>
        <div className={styles.columnsAboveTitle}>
        <div className={styles.littleLinePurple}/>
          <div>
            <p className={styles.AboveTitle}>
              <FormattedMessage
                id="musica.title"
              />
            </p>
          </div>
        </div>
        <div>
          <p className={styles.titleRoboto}>
            <FormattedMessage
              id="musica.subtitle"
            />
          </p>
        </div>

        <div className={stylesMusica.albunes}>
          <div>
            <iframe
              title="beethoven"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/3DNRdudZ2SstnDCVKFdXxG?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
          <div>
            <iframe
              title="tulum dreams"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/2CwuZ8w6faBs4BfIlSxwNS?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
          <div>
            <iframe
              title="lemon tree"
              style={{ borderRadius: "12px" }}
              src="https://open.spotify.com/embed/track/2epbL7s3RFV81K5UhTgZje?utm_source=generator"
              width="100%"
              height="352"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-popups"
            ></iframe>
          </div>
        </div>

      </div>
    </div>
  </div>
  );
};

export default Musica;