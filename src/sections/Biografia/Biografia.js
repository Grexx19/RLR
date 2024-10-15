import React, { useEffect, useState } from 'react';
import './Biografia.scss'; // Assuming the custom styles are here.
import inicios1 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_1.jpg';
import inicios2 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_2.jpg';
import inicios3 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_3.jpg';
import inicios4 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_4.jpg';
import inicios5 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_5.jpg';
import inicios6 from '../../assets/img/Ricardo_Lopez_Rayero_Biografia_Vida_6.jpg';
import universidad1 from '../../assets/img/Ricardo_Lopez_Rayero_Universidad_1.jpg'
import universidad2 from '../../assets/img/Ricardo_Lopez_Rayero_Universidad_2.jpg'
import universidad3 from '../../assets/img/Ricardo_Lopez_Rayero_Universidad_3.jpg'
import trabajos1 from '../../assets/img/Ricardo_Lopez_Rayero_primeros_trabajos_1.jpg'
import trabajos2 from '../../assets/img/Ricardo_Lopez_Rayero_primeros_trabajos_2.jpg'
import trabajos3 from '../../assets/img/Ricardo_Lopez_Rayero_primeros_trabajos_3.jpg'
import id1 from '../../assets/img/Ricardo_Lopez_Rayero_Ingenieria_digital_1.jpg'
import id2 from '../../assets/img/Ricardo_Lopez_Rayero_Ingenieria_digital_2.jpg'
import id3 from '../../assets/img/Ricardo_Lopez_Rayero_Ingenieria_digital_3.jpg'
import sp1 from '../../assets/img/Ricardo_Lopez_Rayero_SuperLeads_1.jpg'
import sp2 from '../../assets/img/Ricardo_Lopez_Rayero_SuperLeads_2.jpg'
import sp3 from '../../assets/img/Ricardo_Lopez_Rayero_SuperLeads_3.jpg'
import int1 from '../../assets/img/Ricardo_Lopez_Rayero_Int_1.jpg'
import int2 from '../../assets/img/Ricardo_Lopez_Rayero_Int_2.jpg'
import int3 from '../../assets/img/Ricardo_Lopez_Rayero_Int_3.jpg'
import personal1 from '../../assets/img/Ricardo_Lopez_Rayero_Vida_personal_1.jpg'
import personal2 from '../../assets/img/Ricardo_Lopez_Rayero_Vida_personal_2.jpg'
import personal3 from '../../assets/img/Ricardo_Lopez_Rayero_Vida_personal_3.png'
import conclusiones1 from '../../assets/img/Gratitud.png'
import conclusiones2 from '../../assets/img/perseverancia.png'
import conclusiones3 from '../../assets/img/enfoque.png'

import { FormattedMessage, useIntl } from 'react-intl';
import { Btn, ContentBox, Griditem, Gridwrapper, ImagePicture, RedHatDisplay, Roboto } from '../../components/Styled';
import styles from "../../components/Styled.module.scss";
import { AutoGraph, Check, ChevronLeft, ChevronRight, Download, PersonOutline, School, WorkOutline } from '@mui/icons-material';
import idPurple from '../../assets/img/id_purple.png'
import idGray from '../../assets/img/id_gray.png'
import spPurple from '../../assets/img/sp_purple.png'
import spGray from '../../assets/img/sp_gray.png'
import intGray from '../../assets/img/int_gray.png'
import intPurple from '../../assets/img/int_purple.png'

const Biografia = () => {
  const intl = useIntl(); // Usa el hook useIntl
  const [selectedSection, setSelectedSection] = useState('inicios');
  const [isMobile, setIsMobile] = useState(false);

  const sections = {
    inicios: {
      icon: <Check className='icon'/>,
      title: 'biografia.inicios.title',
      content: 'biografia.inicios.contenido',
      images: [
        inicios1, inicios2, inicios3, inicios4, inicios5, inicios6 // Add your image paths here
      ],
      contents: []
    },
    universidad: {
      icon: <School className='icon'/>,
      title: 'biografia.universidad.title',
      content: 'biografia.universidad.contenido',
      images: [
        universidad1, universidad2, universidad3
      ],
      contents: []
    },
    trabajos: {
      icon: <WorkOutline className='icon'/>,
      title: 'biografia.primerostrabajos.title',
      content: 'biografia.primerostrabajos.content',
      images: [
        trabajos1, trabajos2, trabajos3
      ],
      contents: []
    },
    id: {
      icon: [
        <ImagePicture src={idGray} className='iconGray'/>,
        <ImagePicture src={idPurple} className='iconPurple'/>
      ],
      title: 'biografia.ingenieriaDigital.title',
      content: 'biografia.ingenieriaDigital.content',
      images: [
        id1, id2, id3
      ],
      contents: [] 
    },
    sp: {
      icon: [
        <ImagePicture src={spGray} className='iconGray'/>,
        <ImagePicture src={spPurple} className='iconPurple'/>
      ],
      title: 'biografia.superLeads.title',
      content: 'biografia.superLeads.content',
      images: [
        sp1, sp2, sp3
      ],
      contents: []
    },
    int: {
      icon: [
        <ImagePicture src={intGray} className='iconGray'/>,
        <ImagePicture src={intPurple} className='iconPurple'/>
      ],
      title: 'biografia.int.title',
      content: 'biografia.int.content',
      images: [
        int1, int2, int3
      ],
      contents: [] 
    },
    vidapersonal: {
      icon: <PersonOutline className='icon' />,
      title: 'biografia.vida.title',
      content: 'biografia.vida.content',
      images: [
        personal1, personal2, personal3
      ],
      contents: [] 
    },
    conclusiones: {
      icon: <AutoGraph className='icon'/>,
      title: 'biografia.conclusiones.title',
      content: 'biografia.conclusiones.title',
      images: [
        conclusiones1, conclusiones2, conclusiones3
      ],
      contents: [
        'biografia.conclusiones.con1',
        'biografia.conclusiones.con2',
        'biografia.conclusiones.con3',
        'biografia.conclusiones.con4',
        'biografia.conclusiones.con5',
        'biografia.conclusiones.con6',
        'biografia.conclusiones.con7',
        'biografia.conclusiones.con8',
        'biografia.conclusiones.con9',
        'biografia.conclusiones.con10',
        'biografia.conclusiones.con11',
        'biografia.conclusiones.con12',
        'biografia.conclusiones.con13',
        'biografia.conclusiones.con14',
        'biografia.conclusiones.con15',
        'biografia.conclusiones.con16',
        'biografia.conclusiones.con17',
        'biografia.conclusiones.con18',
        'biografia.conclusiones.con19',
        'biografia.conclusiones.con20',
        'biografia.conclusiones.con21',
        'biografia.conclusiones.con22',
        'biografia.conclusiones.con23',
        'biografia.conclusiones.con24',
        'biografia.conclusiones.con25',
        'biografia.conclusiones.con26',
        'biografia.conclusiones.con27',
        'biografia.conclusiones.con28',
        'biografia.conclusiones.con29',
      ]
    },
    // Add other sections similarly
  };

  const sectionKeys = Object.keys(sections);

   // Detectar si es móvil
   useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Consideramos móvil si el ancho es <= 768px
    };
    window.addEventListener('resize', handleResize);
    handleResize(); // Para establecer el estado inicial
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Funciones de navegación
  const handleNextSection = () => {
    const currentIndex = sectionKeys.indexOf(selectedSection);
    const nextIndex = (currentIndex + 1) % sectionKeys.length;
    setSelectedSection(sectionKeys[nextIndex]);
  };

  const handlePrevSection = () => {
    const currentIndex = sectionKeys.indexOf(selectedSection);
    const prevIndex = (currentIndex - 1 + sectionKeys.length) % sectionKeys.length;
    setSelectedSection(sectionKeys[prevIndex]);
  };

  const copyToClipboard = (id) => {
    const text = intl.formatMessage({ id }); // Obtiene el texto asociado al id
    navigator.clipboard.writeText(text).then(() => {
      alert("Texto copiado al portapapeles!");
    });
  };

  
  return (
    <ContentBox
    varmaxwidth= '100%' varwidth = '100%' vardisplay = 'flex' varpadding ='120px 0 120px' varpaddingm ='60px 0 60px'
    >
      <div className="biography-section">
        {/* Sidebar menu */}
        <div className="sidebar-menu">
        <div className={styles.columnsAboveTitleCenter}>
            <div className={styles.littleLine}/>
            <div>
              <p className={styles.AboveTitle}>
              <FormattedMessage
                id="biografia.title"
              />
            </p>
            </div>
          </div>
          <RedHatDisplay
          varfontsize = '40px'
          varweight = '700'
          varcolor = '#232E35'
          varpadding ='0 0 85px'
          fontsizemobile = '22px'
          >
            <FormattedMessage id='biografia.subtitle' />
          </RedHatDisplay>
          {Object.keys(sections).map(section => (
          <button 
          key={section} 
          onClick={() => setSelectedSection(section)}
          className={`menu-item ${selectedSection === section ? 'active' : ''}`}
          >
            {sections[section].icon}
            <FormattedMessage id={sections[section].title} />
            <ChevronRight className='angle' />
          </button>
          ))}
        </div>

      {/* Content area */}
      <div className="content-area">
         {/* Flechas para cambiar secciones en móvil */}
         {isMobile && (
          <ContentBox
          vardisplay='flex'
          varwidth = '100%'
          varpadding = '0 0 30px'
          >
            <ContentBox>
              <div className={styles.columnsAboveTitleCenter}>
                <div className={styles.littleLine}/>
                <div>
                  <p className={styles.AboveTitle}>
                  <FormattedMessage
                    id="biografia.title"
                  />
                </p>
                </div>
              </div>
              <RedHatDisplay
              varfontsize = '40px'
              varweight = '700'
              varcolor = '#232E35'
              varpadding ='0 0 25px'
              fontsizemobile = '22px'
              >
                <FormattedMessage id='biografia.subtitle' />
              </RedHatDisplay>
            </ContentBox>

            <Gridwrapper vargridtemplatecolumns='20% 40% 20%' justifyContent ='space-between' varwidth='96%'>
              <Griditem>
                <Btn onClick={handlePrevSection} className="prev-button" varpadding = '5px 9px'>
                  <ChevronLeft />
                </Btn>
              </Griditem>
              <Griditem>
              <RedHatDisplay varfontsize='18px' varweight='500' varcolor='#585DCC' ><FormattedMessage id={sections[selectedSection].title} /></RedHatDisplay>

              </Griditem>
              <Griditem vardisplay='flex' alignItems = 'flex-end'>
                <Btn onClick={handleNextSection} className="next-button" varpadding = '5px 9px'>
                  <ChevronRight />
                </Btn>
              </Griditem>
            </Gridwrapper>
            </ContentBox>
          )}
        <div className="content-box">
          <div className='image-gallery'>
          {sections[selectedSection]?.images?.map((imgSrc, index) => (
            <img src={imgSrc} alt={`section-${selectedSection}-image-${index}`} key={index} />
          ))}
          </div>
          {selectedSection === 'conclusiones' ? (
            sections.conclusiones.contents.map((paragraph, index) => (
              <div key={index} className="paragraph-container">
                <Roboto varfontsize='16px' varcolor='#595959' varweight='400' vartextalign='left' varlineheight='1.5em' varfontsizemobile ='13px'>
                  <FormattedMessage id={paragraph} />
                </Roboto>
                <Btn onClick={() => copyToClipboard(paragraph)} className="copy-button" vargridgap ='10px' varcolor='#2A2FAB' varweight ='400' backgcolor='#f0f0f000' varpadding= '10px 48px' varfontsizemobile = '12px' smpadd = '6px 12px' vardropshadowmobile='none' varmargin='7px 0 0 auto'><Download className='icondownload'/> Copiar</Btn>
              </div>
            ))
          ) : (
            <Roboto
              varfontsize='16px'
              varcolor='#595959'
              varweight='400'
              vartextalign='left'
              varlineheight='1.5em'
              varfontsizemobile ='16px'
            >
              <FormattedMessage 
                id={sections[selectedSection].content}
                values={{
                  br: <br />,
                }}
              />
            </Roboto>
          )}
        </div>
      </div>
    </div>

    </ContentBox>
  );
};

export default Biografia;
