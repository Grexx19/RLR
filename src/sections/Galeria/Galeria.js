import React, { useState, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styles from "../../components/Styled.module.scss";
import stylesGaleria from "./Galeria.module.scss";
import { ContentBox, RedHatDisplay } from '../../components/Styled';
import './Galeria.scss';

const Galeria = () => {
  const images = [
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_1.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_2.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_3.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_4.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_5.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_6.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_7.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_8.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_9.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_10.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_11.jpg"),
    require("../../assets/img/Ricardo_Lopez_Rayero_Galeria_A&R_13.jpg")
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Agregar el listener de resize
    window.addEventListener("resize", handleResize);

    // Limpiar el listener cuando el componente se desmonte
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleImageClick = (img) => {
    setSelectedImage(img);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className={stylesGaleria.galeriaSection}>
      <div className={stylesGaleria.titleContent}>
        <div className={stylesGaleria.container}>
          <div className={styles.columnsAboveTitleCenter}>
            <div className={styles.littleLinePurple} />
            <div>
              <p className={styles.AboveTitleP}>
                <FormattedMessage id="galeria.title" />
              </p>
            </div>
          </div>
          <ContentBox
            vardisplay='flex'
            fdirection='row'
            varwidth='100%'
            varmaxwidth='332px'
          >
            <RedHatDisplay
              varfontsize='26px'
              varfontsizemobile='20px'
              varweight='500'
              varcolor='#fff'
              varpadding='0 10px 0'
              varpaddingmobile='18px'
            >
              <FormattedMessage id="galeria.subtitle" />
            </RedHatDisplay>
          </ContentBox>
        </div>
      </div>

      <div className={stylesGaleria.contentGalery}>
        {isMobile ? (
          // Carrusel para la versión móvil
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index}>
                <img src={img} alt={`Galeria_RicardoLopezRayero_${index + 1}`} className={stylesGaleria.img} />
              </div>
            ))}
          </Slider>
        ) : (
          // Galería de imágenes para escritorio
          images.map((img, index) => (
            <div key={index} onClick={() => handleImageClick(img)}>
              <img src={img} alt={`Galeria_RicardoLopezRayero_${index + 1}`} className={stylesGaleria.img} />
            </div>
          ))
        )}
      </div>

      {selectedImage && (
        <div className="modal" onClick={closeModal}>
          <span className="close">&times;</span>
          <img className="modal-content" src={selectedImage} alt="Imagen ampliada" />
        </div>
      )}
    </div>
  );
};

export default Galeria;