import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    margin: 0;
  }

  input, li{
    padding-left: 4px;
    font-size: 16px;
    border-radius: 4px;
    width: 286px;
    height: 38px;
  }
`
