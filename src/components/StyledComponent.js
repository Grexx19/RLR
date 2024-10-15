import styled, { css } from "styled-components";

//Textos
export const commonRoboto = css`
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 400;
  line-height: 136%;
  text-align: left;
  margin: 0px;
  max-width: auto;
  width: auto;
  padding: auto;
`;
export const AboveTitleP = styled.p`
  letter-spacing: 7.5px;
  color: #FFFFFF;
  font-size: 12px;
  ${commonRoboto}
`;
export const AboveTitle = styled.p`
  letter-spacing: 7.5px;
  color: #232E35;
  font-size:12px;
  ${commonRoboto}
`;
export const descriptionRobotoP = styled.p`
  color: #FFFFFF;
  font-size:18px;
  font-weight: 600;
  ${commonRoboto}
`;
export const descriptionRoboto = styled.p`
  color: #595959;
  font-size:16px;
  ${commonRoboto}
`;
export const titleRoboto = styled.p`
  color: #232E35;
  font-size:26px;
  ${commonRoboto}
`;


export const commonSans = css`
  /* ... tu estilo ... */
  font-family: "Red Hat Display", sans-serif;
  font-style: normal;
  line-height: 136%;
  text-align: left;
  margin: 0px;
  max-width: auto;
  width: auto;
  padding: auto;
`;
export const HeaderSans = styled.p`
  color: #585DCC;
  font-size:16px;
  font-weight:400px;
  ${commonSans}
`;
export const nameSans = styled.p`
  color: #9DA2EF;
  font-size: ${(props) => props.varfontsize || "48px"};
  font-weight:600px;
  ${commonSans}
`;
export const textSans = styled.p`
  color: #FFFFFF;
  font-size: ${(props) => props.varfontsize || "20px"};
  font-weight:500px;
  ${commonSans}
`;
export const titleSans = styled.p`
  color: #232E35;
  font-size:40px;
  font-weight:600px;
  ${commonSans}
`;
export const subtitleSansSelected = styled.p`
  color: #585DCC;
  font-size:16px;
  font-weight:500px;
  ${commonSans}
`;
export const subtitleSans = styled.p`
  color: #8c8c8c;
  font-size:16px;
  font-weight:400px;
  ${commonSans}
`;
export const propositoSans = styled.p`
  color: #FFFFFF;
  font-size:48px;
  font-weight:600px;
  ${commonSans}
`;


export const Button = styled.button`
  /* ... tu estilo ... */
  background-color: #585DCC;
  border-radius: 8px;
  border: none;
  padding: 16px 24px;
  font-family: "Red Hat Display", sans-serif;
  font-weight: 400;
  color: white;
`;
