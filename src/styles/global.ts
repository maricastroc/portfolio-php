import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :focus {
    outline: none;
    boxShadow: 0 0 0 2px rgba(99, 95, 199, 1);
  }

  body {
    background-color: ${(props) => props.theme['gray-300']};
    color: ${(props) => props.theme['title-color']};
    height: 100vh;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Asap', sans-serif;
    font-weight: 400;
    font-size: 1rem;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Asap', sans-serif;
  }

  ::-webkit-scrollbar {
    width: 0.7rem;
    height: 0.4rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.3);
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme['scroll-color']};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-corner {
    background-color: ${(props) => props.theme['scroll-color']};
  }
`
