import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: ${props => props.theme.fonts.primary};
    color: ${props => props.theme.colors.primary};
    background-color: ${props => props.theme.colors.lightGray};
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.primary};
  }

  p, a, button, input, textarea {
    font-family: ${props => props.theme.fonts.secondary};
  }

  a, button {
    color: ${props => props.theme.colors.accent};
    transition: color 0.3s ease;
  }

  a:hover, button:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

export default GlobalStyle;
