import Script from 'next/script'

import '@/styles/globals.css'


export default function App({ Component, pageProps }) {
  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: `function loadScript(a){var b=document.getElementsByTagName("head")[0],c=document.createElement("script");c.type="text/javascript",c.src="https://tracker.metricool.com/resources/be.js",c.onreadystatechange=a,c.onload=a,b.appendChild(c)}loadScript(function(){beTracker.t({hash:"c9ae99f8327b21407b3b7bc8128d416c"})});` }} />
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
