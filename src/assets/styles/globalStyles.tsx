import { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Prompt', sans-serif;
    font-size: 16px;    
  } 
  body {
    background: rgb(124,101,169);
    background: radial-gradient(circle, rgba(124,101,169,1) 0%, rgba(150,212,202,1) 100%);
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh; 
  }
`

export default GlobalStyle
