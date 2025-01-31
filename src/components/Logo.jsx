import styled from 'styled-components';

export const LogoDesktop = styled.img`
  display: none;
  max-width: 248px;
  max-width: 100%;
  margin-right: 1rem; // Puedes ajustar según tus necesidades

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: flex;
    max-width: 100%;
    width: 332px;
  }
`;
export const LogoMovil = styled.img`
  display: flex;
  max-width: 100%;
  width: 46.86px;

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: none;
  }
`;
export const TipograiaSuperLeads = styled.img`
  display: none;
  max-width: 100%;
  width: 267.23px;
  flex-grow: 1;

  @media (min-width: 900px) { // md breakpoint in Material-UI is 960px
    display: none;
  }
`;
