import styled from 'styled-components';

export const LogoDesktop = styled.img`
  display: none;
  max-width: 248px;
  width: 100%;
  margin-right: 1rem; // Puedes ajustar según tus necesidades

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: flex;
    width: 100%;
    max-width: 332px;
  }
`;
export const LogoMovil = styled.img`
  display: flex;
  width: 100%;
  max-width: 46.86px;

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: none;
  }
`;
export const TipograiaSuperLeads = styled.img`
  display: none;
  width: 100%;
  max-width: 267.23px;
  flex-grow: 1;

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: none;
  }
`;
