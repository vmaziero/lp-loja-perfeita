import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    font-family: 'Titillium Web', sans-serif;
    line-height: 1.5;
    color: #222;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
  }

  html, body {
    width: 100%;
  }
`;

export const LpContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
