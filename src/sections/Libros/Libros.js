import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from "../../components/Styled.module.scss";
import stylesLibros from "./Libros.module.scss"
import { Btn, RedHatDisplay } from '../../components/Styled';

const Libros = () => {
  let TusOrdenes = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Tus_ordenes.png");
  let ImaginacionDespierta = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Imaginacion_despierta.png");
  let LlavesExito = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Las_llaves_del_exito.png");
  let TrabajarConLey = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Trabajar_con_la_ley.png"); 
  let HagaseRico = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Piense_y_hagase_rico.png");
  let Dinero = require("../../assets/img/Ricardo_Lopez_Rayero_Books_dinero.png");
  let Doctom = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Dotcom_secrets.png");
  let DeCeroAUno = require("../../assets/img/Ricardo_Lopez_Rayero_Books_De_cero_a_uno.png");
  let Marketing = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Growth_hacker_marketing.png");
  let Wringht = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Wringht.png");
  let Estrategia = require("../../assets/img/Ricardo_Lopez_Rayero_Las_claves_de_la_estrategia.png");
  let Utopia = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Utopia_para_realistas.png");
  let MundoFeliz = require("../../assets/img/Ricardo_Lopez_Rayero_Books_Un_mundo_feliz.png");
  let NaveIntra = require("../../assets/img/Ricardo_Lopez_Rayero_Books_La_nave_intra.png");
  let Offers = require('../../assets/img/Ricardo_Lopez_Rayero_Books_100M_offers.png');
  let pdflibros = require('../../assets/docs/Libros Leídos y recomendaciones Ricardo López Reyero 2024.pdf')

  return (
    <div className={stylesLibros.librosSection}>
      <div className={stylesLibros.container}>
        
      <div className={stylesLibros.titleContent}>
        <div className={styles.columnsAboveTitle}>
        <div className={styles.littleLinePurple}/>
          <div>
            <p className={styles.AboveTitle}>
              <FormattedMessage
                id="libros.title"
              />
            </p>
          </div>
          <div className={styles.littleLinePurple}/>
        </div>
        <div>
          <RedHatDisplay
          varfontsize = '26px'
          varweight = '650'
          vartextalign = 'center'
          >
            <FormattedMessage
              id="libros.subtitle"
            />
          </RedHatDisplay>
        </div>
      </div>

        <div className={stylesLibros.biblioteca}>
          <div>
            <img src={TusOrdenes} alt="Books_Tus_ordenes_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={ImaginacionDespierta} alt="Books_Imaginacion_despierta_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={LlavesExito} alt="Books_Las_Leyes_del_Exito_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={TrabajarConLey} alt="Books_Trabajar_con_la_ley_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={HagaseRico} alt="Books_Piense_y_hagase_rico_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={Dinero} alt="Books_Dinero:Domina el juego_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={Offers} alt="Books_100M_offers_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={Doctom} alt="Books_Dotcom_secrets_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={DeCeroAUno} alt="Books_De_cero_a_uno_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={Marketing} alt="Books_Growth_hacker_marketing_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={Wringht} alt="Books_Wringht_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={Estrategia} alt="Books_Las_claves_de_la_estrategia_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={Utopia} alt="Books_Utopia_para_realistas_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={MundoFeliz} alt="Books_Un_mundo_feliz_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>
          <div>
            <img src={NaveIntra} alt="Books_La_nave_intra_RicardoLopezRayero" className={stylesLibros.img}/>
          </div>

        </div> 
        <div className={stylesLibros.divBtn}>
          <Btn 
          backgcolor ='#9DA2EF'
          backgcolorhover = '#585DCC'
          varfontsize = '20px'
          as="a"
          varfontsizemobile = '17px'
          href={pdflibros} // Cambia esta ruta por la correcta
          download
          >
            <FormattedMessage
              id="libros.button"
            />
            <div>
            <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15.2656 19.7637C15.099 19.7637 14.9427 19.7378 14.7969 19.6862C14.651 19.6345 14.5156 19.5458 14.3906 19.4199L9.89063 14.9199C9.66146 14.6908 9.54688 14.3991 9.54688 14.0449C9.54688 13.6908 9.66146 13.3991 9.89063 13.1699C10.1198 12.9408 10.4169 12.8212 10.7819 12.8112C11.1469 12.8012 11.4435 12.9103 11.6719 13.1387L14.0156 15.4824V6.54493C14.0156 6.19076 14.1356 5.89368 14.3756 5.65368C14.6156 5.41368 14.9123 5.29409 15.2656 5.29493C15.6198 5.29493 15.9169 5.41493 16.1569 5.65493C16.3969 5.89493 16.5165 6.19159 16.5156 6.54493V15.4824L18.8594 13.1387C19.0885 12.9095 19.3856 12.7999 19.7506 12.8099C20.1156 12.8199 20.4123 12.9399 20.6406 13.1699C20.8698 13.3991 20.9844 13.6908 20.9844 14.0449C20.9844 14.3991 20.8698 14.6908 20.6406 14.9199L16.1406 19.4199C16.0156 19.5449 15.8802 19.6337 15.7344 19.6862C15.5885 19.7387 15.4323 19.7645 15.2656 19.7637ZM7.76563 25.2949C7.07813 25.2949 6.48938 25.0499 5.99938 24.5599C5.50938 24.0699 5.26479 23.4816 5.26563 22.7949V20.2949C5.26563 19.9408 5.38563 19.6437 5.62563 19.4037C5.86563 19.1637 6.16229 19.0441 6.51563 19.0449C6.86979 19.0449 7.16688 19.1649 7.40688 19.4049C7.64688 19.6449 7.76646 19.9416 7.76563 20.2949V22.7949H22.7656V20.2949C22.7656 19.9408 22.8856 19.6437 23.1256 19.4037C23.3656 19.1637 23.6623 19.0441 24.0156 19.0449C24.3698 19.0449 24.6669 19.1649 24.9069 19.4049C25.1469 19.6449 25.2665 19.9416 25.2656 20.2949V22.7949C25.2656 23.4824 25.0206 24.0712 24.5306 24.5612C24.0406 25.0512 23.4523 25.2958 22.7656 25.2949H7.76563Z" fill="white"/>
            </svg>

            </div>
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default Libros;