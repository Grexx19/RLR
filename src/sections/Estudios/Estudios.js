import React, { Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from "../../components/Styled.module.scss";
import stylesEstudios from "./Estudios.module.scss"
import { ImagePicture, RedHatDisplay } from '../../components/Styled';

const Estudios = () => {
    let Gallagher = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Proctor_Gallagher.webp');
    let Proctorhover = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Proctor_Gallagher_hover.webp')
    let TecMonterrey = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Tecnologico_de_Monterrey_hover.webp');
    let Montesori = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Montesori_hover.webp');
    let Montesorihover = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Montesori.webp');
    let Platzi = require('../../assets/img/Ricardo_Lopez_Rayero_Estudios_Platzi_hover.webp');
    return (
        <div className={stylesEstudios.estudiosSection}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={stylesEstudios.container}>
                    <div className={styles.columnsAboveTitleCenter}>
                        <div className={styles.littleLinePurple} />
                        <div>
                            <p className={styles.AboveTitle}>
                                <FormattedMessage
                                    id="estudios.title"
                                    defaultMessage='titulo estudios'
                                />
                            </p>
                        </div>
                    </div>
                    <div>
                        <RedHatDisplay
                            varfontsize='26px'
                            varweight='600'
                            vartextalign='center'
                        >
                            <FormattedMessage
                                id="estudios.subtitle"
                                defaultMessage='subtitulo estudios'
                            />
                        </RedHatDisplay>
                    </div>
                    <div className={stylesEstudios.colegios}>
                        <div>
                            <img src={Gallagher} alt="Proctor_Gallagher_RicardoLopezRayero" className={stylesEstudios.image1} loading='lazy' />
                            <ImagePicture
                                loading='lazy'
                                src={Proctorhover}
                                alt="Proctor Gallagher_RicardoLopezRayero"
                                varwidth='417px'
                                varmaxwidth='100%'
                                varwidthmovil='67%'
                                varmargin='auto'
                                vardisplay='none'
                                vardisplaymovil='block'
                            />
                        </div>
                        <div>
                            <ImagePicture
                                src={TecMonterrey}
                                alt="Tecnologico_de_monterrey_RicardoLopezRayero"
                                varwidth='417px'
                                varmaxwidth='100%'
                                varwidthmovil='67%'
                                varmargin='auto'
                                loading='lazy'
                            />
                        </div>
                        <div>
                            <img src={Montesori} alt="Montessori_RicardoLopezRayero" className={stylesEstudios.image3} />
                            <ImagePicture
                                src={Montesorihover}
                                alt="Montesori_RicardoLopezRayero"
                                varwidth='417px'
                                varmaxwidth='100%'
                                varwidthmovil='67%'
                                varmargin='auto'
                                vardisplay='none'
                                vardisplaymovil='block'
                                loading='lazy'
                            />
                        </div>
                        <div>
                            <ImagePicture
                                src={Platzi}
                                alt="Platzi_RicardoLopezRayero"
                                varwidth='300px'
                                varmaxwidth='100%'
                                varwidthmovil='58%'
                                varmargin='auto'
                                loading='lazy'
                            />
                        </div>
                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Estudios;
