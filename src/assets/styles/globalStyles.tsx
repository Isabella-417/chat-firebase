import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  body {
    background-image: linear-gradient(to right, rgba(109, 179, 242, .6), rgba(109, 179, 242, .6)), url('chat.jpg');
    background-size: cover, contain;
    background-position: center, right;
    background-repeat: no-repeat, no-repeat;
    box-sizing: border-box;
    font-family: Open-Sans, Helvetica;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh; 
  }
`

export default GlobalStyle
