import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
    background:  ${props => props.theme.colors.background};
    -webkit-font-smoothing: antialiased !important;
  }

  body {
    color: #222;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }
`