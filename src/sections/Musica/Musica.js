import React, { Suspense } from 'react';
import { FormattedMessage } from 'react-intl';
import styles from "../../components/Styled.module.scss";
import stylesMusica from "./Musica.module.scss"
import { ContentBox, ImagePicture, RedHatDisplay } from '../../components/Styled';
import PlayArrow from '@mui/icons-material/PlayArrow';

const Musica = () => {

    let beethoven = require("../../assets/img/beethoven.jpg");
    let catalunya = require("../../assets/img/catalunya_musica.jpg");
    let fools_garden = require("../../assets/img/fools_garden.jpg");
    return (
        <div className={stylesMusica.musicaSection}>
            <Suspense fallback={<div>Loading...</div>}>
                <div className={stylesMusica.container}>

                    <div className={styles.titleContent}>
                        <div className={styles.columnsAboveTitle}>
                            <div className={styles.littleLinePurple} />
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
                            <a className={stylesMusica.songContainer}
                                href='https://open.spotify.com/intl-es/album/4bNwPPpk01D8pVV9IFSBde?si=c47YJ4gZQ6C-5crbYfCrhQ'
                            >
                                <ImagePicture src={beethoven} varmaxwidth='100%' varwidth='700px' varborderradius='20px 20px 0 0' alt='Ricardo Lopez Reyero_Musica_beethoven' loading='lazy' />
                                <ContentBox varpadding='30px 30px 43px'>
                                    <RedHatDisplay vartextalign='left' varfontsize='20px' varweight='700' varcolor='#595959' >Beethoven</RedHatDisplay>
                                    <PlayArrow className={stylesMusica.btnPlay} />
                                </ContentBox>
                            </a>
                            <a className={stylesMusica.songContainer}
                                href='https://open.spotify.com/track/2CwuZ8w6faBs4BfIlSxwNS?si=deTIxINmTWuAoxWr_maGEQ'
                            >
                                <ImagePicture src={catalunya} varmaxwidth='100%' varwidth='700px' varborderradius='20px 20px 0 0' alt='Ricardo Lopez Reyero_Musica_catalunya' loading='lazy' />
                                <ContentBox varpadding='30px 30px 43px'>
                                    <RedHatDisplay vartextalign='left' varfontsize='20px' varweight='700' varcolor='#595959' >Catalunya</RedHatDisplay>
                                    <PlayArrow className={stylesMusica.btnPlay} />
                                </ContentBox>
                            </a>
                            <a className={stylesMusica.songContainer}
                                href='https://open.spotify.com/track/2epbL7s3RFV81K5UhTgZje?si=4IBjtvEKSr2hE0aiP1O7wQ&context=spotify%3Asearch'
                            >
                                <ImagePicture src={fools_garden} varmaxwidth='100%' varwidth='700px' varborderradius='20px 20px 0 0' alt='Ricardo Lopez Reyero_Musica_lemon tre' loading='lazy' />
                                <ContentBox varpadding='30px 30px 43px'>
                                    <RedHatDisplay vartextalign='left' varfontsize='20px' varweight='700' varcolor='#595959' >Lemon Tree</RedHatDisplay>
                                    <PlayArrow className={stylesMusica.btnPlay} />
                                </ContentBox>
                            </a>
                        </div>

                    </div>
                </div>
            </Suspense>
        </div>
    );
};

export default Musica;
