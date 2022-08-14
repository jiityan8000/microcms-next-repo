import { createGlobalStyle } from 'styled-components';
import Head from "next/head";

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-flow: column;
    min-height: 100vh;
    margin: 0;
    background: #262E45;
    color: #fff;
    font-family: futura-pt,'Noto Sans JP', sans-serif;
  }

  a {
    color: #E6E6E6;
    text-decoration: none;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Head>
        <title>Hiroki Nagai</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp