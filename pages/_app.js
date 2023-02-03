import Script from 'next/script'

import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-JE1CCXG198" strategy="afterInteractive"/>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-JE1CCXG198');
        `}
      </Script>
      <Component {...pageProps} />
    </>
  )
}
