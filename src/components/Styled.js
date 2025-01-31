import styled from "styled-components";
export const Btn = styled.button`
  background-color: ${(props) => props.backgcolor || "#585DCC"};
  color: ${(props) => props.varcolor || "#FFFFFF"};
  padding: ${(props) => props.varpadding || "16px 44px"};
  margin: ${(props) => props.varmargin || "0px"};
  font-size: ${(props) => props.varfontsize || "14px"};
  font-family: ${(props) => props.varfontfamily || "Red Hat Display"};
  font-weight: ${(props) => props.varweight || "300"};
  min-width: ${(props) => props.varminwidth || "auto"};
  max-width: fit-content;
  text-align: center;
  border-radius: ${(props) => props.varradius || "8px"};
  border-style: none;
  display: flex;
  align-items: center;
  justify-content: center;
  grid-gap: ${(props) => props.vargridgap || "none"};
  box-shadow: ${(props) => props.vardropshadow || "0px 8px 20px rgb(119 33 107 / 10%)"};
  width: ${(props) => props.varwidth || "auto"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  cursor: pointer;
  
  &:hover{
    background-color: ${(props) => props.backgcolorhover || props.backgcolor || "none"};
    color: ${(props) => props.varcolorhover || props.varcolor || "#FFFFFF"};
  }

  @media (max-width: 1000px) {
    margin: ${(props) => props.varmarginmovil || props.varmargin || "0px"};
    font-size: ${(props) => props.varfontsizemobile || props.varfontsize || "16px"};
  }
  @media (max-width: 800px) {
    margin: ${(props) => props.varsmmargin || props.varmarginmovil || props.varmargin || "0px"};
    font-size: ${(props) => props.smfontSize || props.varfontsizemobile || props.varfontsize || "16px"};
    padding: ${(props) => props.smpadd || props.varpadding || "11px 17px"};
    width: ${(props) => props.smwidth || props.varwidth || "auto"};
    max-width: ${(props) => props.smmaxwidth || props.varmaxwidth || "auto"};
    box-shadow: ${(props) => props.vardropshadowmobile || props.vardropshadow || "0px 8px 20px rgb(119 33 107 / 10%)"};
  }
`;

export const RedHatDisplay = styled.p`
  font-family: "Red Hat Display", sans-serif;
  font-optical-sizing: auto;
  font-style:  ${(props) => props.varfontstyle || "normal"};
  /* Style properties based on props */
  font-weight: ${(props) => props.varweight || "300"}; /* Replace with default weight */
  color: ${(props) => props.varcolor || "#000000"};
  background-color: ${(props) => props.backgcolor || 'none'};
  font-size: ${(props) => props.varfontsize || "20px"};
  padding: ${(props) => props.varpadding || "0px "};
  display: ${(props) => props.vardisplay || "block"};
  flex-wrap: ${(props) => props.varwrap || "nowrap"};
  justify-content: ${(props) => props.varjustify || "none"};
  line-height: ${(props) => props.varlineheight || "1em"};
  text-align: ${(props) => props.vartextalign || "center"};
  align-items: ${(props) => props.varalignitems || "center"};
  margin: ${(props) => props.varmargin || "0px"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  width: ${(props) => props.varwidth || "auto"};
  box-shadow: ${(props) => props.varboxshadow || "none"};
 
  /* Media query for smaller screens */
  @media (max-width: 1024px) {
    text-align: ${(props) => props.textaligntablet || props.textalignmovil || props.vartextalign };
    font-size: ${(props) => props.varfontsizemobile || props.varfontsize || "16px"}; /* Use fontSizeMobile or fallback to fontSize */
  }
  @media (max-width: 800px) {
    font-size: ${(props) => props.varfontsizemobile600 || props.varfontsizemobile || props.varfontsize || "16px"}; /* Use fontsizemobile or fallback to fontSize */
    line-height: ${(props) => props.movillineheight || props.varlineheight || "1em"};
    width: ${(props) => props.widthmovil || props.varwidth};
    max-width: ${(props) => props.maxwidthmovil || props.varmaxwidth};
    padding: ${(props) => props.movilpadd || props.varpadding};
    text-align: ${(props) => props.textalignmovil || props.textaligntablet || props.vartextalign };
  }
  @media (max-width: 600px) {
    display: ${(props) => props.varmovildisplay || "block"};
    font-size: ${(props) => props.smfontsize || props.varfontsizemobile600 || props.varfontsizemobile || props.varfontsize || "16px"}; /* Use fontSizeMobile or fallback to fontSize */
    line-height: ${(props) => props.smlineheight || props.movillineheight || props.varlineheight || "1em"};
    width: ${(props) => props.smwidth || props.widthmovil || props.varwidth};
    max-width: ${(props) => props.maxwidthmovil || props.maxwidthtablet || props.varmaxwidth};
    padding: ${(props) => props.smpadding || props.movilpadd || props.varpadding};
    text-align: ${(props) => props.smtextalign || props.textalignmovil || props.textaligntablet || props.vartextalign };
    color: ${(props) => props.colormovil || props.varcolor || "#000000"};
    margin: ${(props) => props.smmargin || props.varmargin || "0px"};
    font-weight: ${(props) => props.movilweight || props.varweight ||"300"};
  }
`;
export const Roboto = styled.p`
  font-family: "Roboto", sans-serif;
  font-optical-sizing: auto;
  font-style:  ${(props) => props.varfontStyle || "normal"};
  /* Style properties based on props */
  font-weight: ${(props) => props.varweight || "300"}; /* Replace with default weight */
  color: ${(props) => props.varcolor || "#000000"};
  background-color: ${(props) => props.backgcolor || 'none'};
  font-size: ${(props) => props.varfontsize || "20px"};
  padding: ${(props) => props.varpadding || "0px "};
  display: ${(props) => props.vardisplay || "block"};
  flex-wrap: ${(props) => props.varwrap || "nowrap"};
  justify-content: ${(props) => props.varjustify || "none"};
  line-height: ${(props) => props.varlineheight || "1em"};
  text-align: ${(props) => props.vartextalign || "center"};
  align-items: ${(props) => props.varalignitems || "center"};
  margin: ${(props) => props.varmargin || "0px"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  width: ${(props) => props.varwidth || "auto"};
  box-shadow: ${(props) => props.varboxshadow || "none"};
 
  /* Media query for smaller screens */
  @media (max-width: 1024px) {
    text-align: ${(props) => props.textaligntablet || props.textalignmovil || props.vartextalign };
    font-size: ${(props) => props.varfontsizemobile || props.varfontsize || "16px"}; /* Use fontSizeMobile or fallback to fontSize */
  }
  @media (max-width: 800px) {
    font-size: ${(props) => props.varfontsizemobile600 || props.varfontsizemobile || props.varfontsize || "16px"}; /* Use fontsizemobile or fallback to fontSize */
    line-height: ${(props) => props.movillineheight || props.varlineheight || "1em"};
    width: ${(props) => props.widthmovil || props.varwidth};
    max-width: ${(props) => props.maxwidthmovil || props.varmaxwidth};
    padding: ${(props) => props.movilpadd || props.varpadding};
    text-align: ${(props) => props.textalignmovil || props.textaligntablet || props.vartextalign };
  }
  @media (max-width: 600px) {
    display: ${(props) => props.varmovildisplay || "block"};
    font-size: ${(props) => props.smfontsize || props.varfontsizemobile600 || props.varfontsizemobile || props.varfontsize || "16px"}; /* Use fontSizeMobile or fallback to fontSize */
    line-height: ${(props) => props.smlineheight || props.movillineheight || props.varlineheight || "1em"};
    width: ${(props) => props.smwidth || props.widthmovil || props.varwidth};
    max-width: ${(props) => props.maxwidthmovil || props.maxwidthtablet || props.varmaxwidth};
    padding: ${(props) => props.smpadding || props.movilpadd || props.varpadding};
    text-align: ${(props) => props.smtextalign || props.textalignmovil || props.textaligntablet || props.vartextalign };
    color: ${(props) => props.colormovil || props.varcolor || "#000000"};
    margin: ${(props) => props.smmargin || props.varmargin || "0px"};
    font-weight: ${(props) => props.movilweight || props.varweight ||"300"};
  }
`;

export const ContentBox = styled.div`
  background-color: ${(props) => props.backcolor || "none"};
  width: ${(props) => props.varwidth || "auto"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  margin: ${(props) => props.varmargin || "0px"};
  min-height: ${(props) => props.varminheight || "auto"};
  padding: ${(props) => props.varpadding || "0px"};
  display: ${(props) => props.vardisplay || 'block'};
  flex-direction: ${(props) => props.fdirection || 'column'};
  align-items: ${(props) => props.varalignitems || 'center'};
  justify-content: ${(props) => props.varjustifycontent || 'center'};

  @media (max-width: 1366px) and (max-height: 768px){
    min-height: ${(props) => props.varminheightmydivice || props.varminheight};
  }
  @media (max-width: 900px) {
    max-width: ${(props) => props.maxwidhtMovil || props.varmaxwidth};
    display: ${(props) => props.vardisplaymovil || props.vardisplay || 'block'};
    padding: ${(props) => props.varpaddingm || props.varpadding || "0px"};
    margin: ${(props) => props.varmarginmovil || props.varmargin || "0px"};
  }
  
  @media (max-width: 800px) {
    min-height: ${(props) => props.smminheight || props.varminheight };
  }
`;
export const Gridwrapper = styled.div`
  width: ${(props) => props.varwidth || "auto"}; 
  max-width: ${(props) => props.varmaxwidth || "auto"};
  display: grid;
  grid-template-columns: ${(props) => props.vargridtemplatecolumns || "auto" };
  grid-gap: ${(props) => props.vargridgap || "0%"};
  margin: ${(props) => props.varmargin || "0px"};
  align-items: ${(props) => props.varalignitems || "center"};
  padding: ${(props) => props.padd || '0px'};
  justify-content: ${(props) => props.justifyContent || 'center'};
  min-height: ${(props) => props.varminheight || "auto"};
   

  @media (max-width: 1350px) {
    grid-template-columns: ${(props) => props.grid1350 || props.vargridtemplatecolumns};
    width: ${(props) => props.width1350 || props.varwidth}; 
    grid-gap: 20px;
    padding: ${(props) => props.padd1000 || props.padd || '0px'};

  }
  @media (max-width: 1024px) {
    grid-template-columns: ${(props) => props.grid1024 || props.grid1350 ||props.vargridtemplatecolumns};
    width: ${(props) => props.tabletWidth || props.width1350 || props.varwidth}; 

  }
  @media (max-width: 800px) {
    grid-template-columns: ${(props) => props.columnsMovil || props.grid1024 || props.grid1350 || props.gridtemplatecolumns};
    width: ${(props) =>  props.movilWidth || props.tabletWidth || props.width1350 || props.varwidth}; 
    margin: ${(props) => props.marginMovil || props.varmargin};
    grid-gap: ${(props) => props.gridgapTablet || props.vargridgap};
    padding: ${(props) => props.padd800 || props.padd1000 || props.padd || '0px'};
    align-items: ${(props) => props.alignItemsMovil || props.varalignitems || "center"};

  }
  @media (max-width: 500px) {
    grid-template-columns: ${(props) => props.columnsMovilsm || props.columnsMovil || props.grid1024 || props.grid1350 || props.gridtemplatecolumns};
    width: ${(props) =>  props.movilsmWidth || props.movilWidth || props.tabletWidth || props.width1350 || props.varwidth}; 
    margin: ${(props) => props.marginsmMovil || props.marginMovil || props.varmargin};
    grid-gap: ${(props) => props.gridgapMovil || props.gridgapTablet || props.varGridGap};
  }
`;

export const Griditem = styled.div`
  width: ${(props) => props.width || "100%"};
  max-width: ${(props) => props.maxWidth || "auto"};
  min-height: ${(props) => props.varminheight || "auto"};
  background-color: ${(props) => props.backgcolor || "none"};
  border-radius: ${(props) => props.borderradius || "none"};
  box-shadow: ${(props) => props.shadow || 'none'};
  padding: ${(props) => props.padd || '0px'};
  display: ${(props) => props.vardisplay || 'block'};
  flex-direction: ${(props) => props.fdirection || 'column'};
  align-items: ${(props) => props.alignItems || 'center'};
  justify-content: ${(props) => props.justifyContent || 'center'};

  @media (max-width: 1024px) {
    min-height: ${(props) => props.tabletHeight || props.varminheight};
    padding: ${(props) => props.paddMovil || props.padd || '0px'};
    display: ${(props) => props.vardisplayTablet || props.vardisplayMovil || props.vardisplay };

  }
  @media (max-width: 800px) {
    flex-direction: ${(props) => props.fdirectionmovil || props.fdirection || 'column'};
    min-height: ${(props) => props.movilHeight || props.tabletHeight || props.varminheight};
    display: ${(props) => props.vardisplayMovil || props.vardisplay };
    align-items: ${(props) => props.alignItemsMovil || props.varalignItems || "center"};
  }
`;
export const ImagePicture = styled.img`
  width: ${(props) => props.varwidth || "auto"};
  max-width: ${(props) => props.varmaxwidth || "auto"};
  margin: ${(props) => props.varmargin || "0px"};
  min-height: ${(props) => props.varminheight || "auto"};
  padding: ${(props) => props.varpadding || "0px"};
  display: ${(props) => props.vardisplay || "block"};
  height: auto;
  border-radius: ${(props) => props.varborderradius || "none"};
  
  @media (max-width: 800px){
    width: ${(props) => props.varwidthmovil || props.varminheight};
    margin: ${(props) => props.varmarginmovil || props.varmargin || "0px"};
    display: ${(props) => props.vardisplaymovil || props.vardisplay || "0px"};
  }
  `
