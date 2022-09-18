import '../styles/globals.css'
import Head from 'next/head'


import Header from '../components/Header'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Allan Xing 🚀🌙</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      
        <link rel="icon" type='image/png' href="/react.png" />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </>


  )
}

export default MyApp
