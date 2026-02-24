import { createGlobalStyle } from 'styled-components'

export const colors = {
  lightBrown: '#473229',
  brown: '#57240f',
  darkBrown: '#291006',
  gray: '#d1ccc0',
  white: '#fff',
  black: '#000'
}

export const GlobalStyles = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  font-family: "Playfair Display", serif;
  }

  .container {
    max-width: 1400px;
    margin: 0 auto;
    padding: 0 24px;
  }
`
