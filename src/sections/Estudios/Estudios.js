import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from "../../components/Styled.module.scss";
import stylesEstudios from "./Estudios.module.scss"
import { ImagePicture, RedHatDisplay } from '../../components/Styled';

const Estudios = () => {
  let Gallagher = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Proctor_Gallagher.png');
  let Proctorhover = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Proctor_Gallagher_hover.png')
  let TecMonterrey = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Tecnologico_de_Monterrey_hover.png');
  let Montesori = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Montesori_hover.png');
  let Montesorihover = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Montesori.png');
  let Platzi = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Platzi_hover.png');
  return (
    <div className={stylesEstudios.estudiosSection}>
      <div className={stylesEstudios.container}>
        <div className={styles.columnsAboveTitleCenter}>
          <div className={styles.littleLinePurple}/>
          <div>
            <p className={styles.AboveTitle}>
              <FormattedMessage
                id="estudios.title"
              />
            </p>
          </div>
        </div>
        <div>
          <RedHatDisplay
          varfontsize = '26px'
          varweight = '600'
          vartextalign = 'center'
          >
              <FormattedMessage
                id="estudios.subtitle"
              />
          </RedHatDisplay>
        </div>
        <div className={stylesEstudios.colegios}>
          <div>
            <img src={Gallagher} alt="Proctor_Gallagher_RicardoLopezRayero" className={stylesEstudios.image1}/>
            <ImagePicture 
              src={Proctorhover} 
              alt="Proctor Gallagher_RicardoLopezRayero" 
              varmaxwidth = '417px'
              varwidth = '100%'
              varwidthmovil = '67%'
              varmargin = 'auto'
              vardisplay = 'none'
              vardisplaymovil = 'block'
            />
          </div>
          <div>
            <ImagePicture 
              src={TecMonterrey} 
              alt="Tecnologico_de_monterrey_RicardoLopezRayero" 
              varmaxwidth = '417px'
              varwidth = '100%'
              varwidthmovil = '67%'
              varmargin = 'auto'
            />
          </div>
          <div>
            <img src={Montesori} alt="Montessori_RicardoLopezRayero" className={stylesEstudios.image3}/>
            <ImagePicture 
              src={Montesorihover} 
              alt="Montesori_RicardoLopezRayero" 
              varmaxwidth = '417px'
              varwidth = '100%'
              varwidthmovil = '67%'
              varmargin = 'auto'
              vardisplay = 'none'
              vardisplaymovil = 'block'
            />
          </div>
          <div>
            <ImagePicture 
             src={Platzi} 
             alt="Platzi_RicardoLopezRayero"
             varmaxwidth = '300px'
             varwidth = '100%'
             varwidthmovil = '58%'
             varmargin = 'auto'
            />
          </div>
        </div>
    </div>

    </div>
  );
};

export default Estudios;