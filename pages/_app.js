import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    background: #262E45;
    color: #fff;
    font-family: futura-pt,'Noto Sans JP', sans-serif;
  }

  a {
    color: #E6E6E6;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp