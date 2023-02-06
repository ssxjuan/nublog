import axios from 'axios';
import { useEffect, useState } from 'react';

import Script from 'next/script'
import Link from 'next/link'
import Image from 'next/image'

import '@/styles/globals.css'

import logo from '../assets/brand.svg';
import mobile from '../assets/menu-05.svg';
import tw from '../assets/tw.png';
import ig from '../assets/ig.png';
import tview from '../assets/tview.png';
import yt from '../assets/yt.png';
import tiktok from '../assets/tiktok.png';

export default function App({ Component, pageProps }) {

  const [prices, setPrices] = useState({});

  useEffect(() => {
    getCryptos().then(response => {
      setPrices({
        btc: Math.round(response[0].price * 100) / 100,
        eth: Math.round(response[1].price * 100) / 100,
        matic: Math.round(response[2].price * 100) / 100,
        ada: Math.round(response[3].price * 100) / 100,
        ltc: Math.round(response[4].price * 100) / 100,
      })
    });
  }, []);

  return (
    <div className='relative pb-48 md:pb-0'>
      <nav className='bg-default fixed left-0 top-0 w-full border border-transparent border-b-slate-200 flex flex-col items-center text-sm text-black z-50'>
        <div className="h-14 space-grotesk max-w-[1600px] w-full border border-transparent border-b-slate-200 flex items-center justify-between px-7 md:px-14 font-medium">
            <div className="flex items-center ">
                <div className="flex items-center mr-12 cursor-pointer" onClick={() => window.location.href='/'} >
                  <Image src={logo} alt="NuTrustX Logo PNG" className="brand-light w-8"/>
                  <p className='space-grotesk ml-2 text-[10px] mt-auto font-medium'>BETA</p>
                </div>
            </div>
            <p className='text-2xl m-0'>NuTrustX</p>
            <div className="items-center flex">
                <Link href='/' className='title text-base'>Noticias</Link>
            </div>
        </div>
        <div className="w-full py-2 px-7 md:px-14 max-w-[1600px] flex justify-between">
            <div className="flex items-center">
              <p className='m-0'>Bitcoin</p>
              <div className="w-6 overflow-hidden inline-block">
                <div className="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
              </div>
              <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/20 sans'>{prices.btc}$</p>
            </div>
            <div className="md:flex hidden items-center">
              <p className='m-0'>Ethereum</p>
              <div className="w-6 overflow-hidden inline-block">
                <div className="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
              </div>
              <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/20 sans'>{prices.eth}$</p>
            </div>
            <div className="md:flex hidden items-center">
              <p className='m-0'>Litecoin</p>
              <div className="w-6 overflow-hidden inline-block">
                <div className="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
              </div>
              <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/20 sans'>{prices.ltc}$</p>
            </div>
            <div className="md:flex hidden items-center">
              <p className='m-0'>Polygon</p>
              <div className="w-6 overflow-hidden inline-block">
                <div className="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
              </div>
              <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/20 sans'>{prices.matic}$</p>
            </div>
            <div className="md:flex hidden items-center">
              <p className='m-0'>Cardano</p>
              <div className="w-6 overflow-hidden inline-block">
                <div className="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
              </div>
              <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/20 sans'>{prices.ada}$</p>
            </div>
        </div>
      </nav>

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

        <footer className='absolute bottom-0 w-full border border-transparent border-y-gray-200 flex justify-center items-center font-normal bg-white text-sm text-gray-100 z-50'>
          <div className="w-full flex-col px-14 py-6 max-w-[1600px] flex text-pro-100 text-sm h-full font-medium">
              <div className="w-full flex justify-between lg:flex-nowrap flex-wrap">
              <div className="lg:min-w-1/5 lg:mb-0 mb-8 h-full shrink-0 w-full lg:w-fit">
                  <Image src={logo} alt="NuTrustX .png" className='w-8 h-8 '/>
              </div>
              <div className="flex flex-col lg:w-fit w-1/2">
                  <p className='text-black text-sm'>Sobre Nosotros</p>
                  <Link href="/" className='mt-4 hover:text-black duration-150 text-sm'>¿Quiénes Somos?</Link>
                  <Link href="/products" className='mt-2 hover:text-black duration-150 text-sm'>Productos</Link>
                  <Link href="/challenges" className='mt-2 hover:text-black duration-150 text-sm'>Proceso de Selección</Link>
              </div>
              <div className="flex flex-col lg:w-fit w-1/2">
                  <p className='text-black text-sm'>Contacto</p>
                  <a href="mailto: vsatrigger@gmail.com" className='mt-4 hover:text-black duration-150 text-sm'>vsatrigger@gmail.com</a>
              </div>
              <div className="flex flex-col lg:w-fit w-1/2 mt-12 lg:mt-0">
                  <p className='text-black text-sm'>Privacidad</p>
                  <Link href="/" className='mt-4 hover:text-black text-sm'>Política de Privacidad</Link>
                  <Link href="/" className='mt-2 hover:text-black text-sm'>Términos y Condiciones</Link>
                  <Link href="/" className='mt-2 hover:text-black text-sm'>Cookies y Terceros</Link>
              </div>
              <div className="flex flex-col lg:mr-40 lg:w-auto w-1/2 mt-12 lg:mt-0">
                  <div className='text-black flex justify-between text-sm'>
                  BETA 
                  <div className="flex items-center">
                      <Image src={tw} alt="Twitter" className='w-4 black-svg cursor-pointer' onClick={() => window.location.href='https://twitter.com/nutrustx'}/>
                      <Image src={ig} alt="Instagram" className='w-4 black-svg mx-2 cursor-pointer' onClick={() => window.location.href='https://instagram.com/nutrustx'}/>
                      <Image src={tview} alt="Trading View" className='w-4 black-svg cursor-pointer' onClick={() => window.location.href='https://tradingview.com/u/nutrustx'}/>
                      <Image src={tiktok} alt="Tiktok" className='w-4 black-svg mx-2 cursor-pointer' onClick={() => window.location.href='https://tiktok.com/@nutrustx'}/>
                      <Image src={yt} alt="Youtube" className='w-4 black-svg cursor-pointer' onClick={() => window.location.href='https://youtube.com/channel/UCzkaTGT71jq1r1vbJI8Xymg'}/>
                  </div>
                  </div>
                  <Link href="/" className='mt-4 hover:text-black text-sm'>Participa de Pruebas</Link>
                  <Link href="/" className='mt-2 hover:text-black text-sm'>Descuentos de Prueba</Link>
              </div>
              </div>
              <div className="w-full border border-transparent border-t-gray-200 mt-6 pt-4 flex flex-col">
              <Link className='text-gray-700 text-xs' href="/">Copyright</Link>
              <Link  className='text-gray-700 text-xs'href="/">NuTrustX LLC</Link>
              </div>
          </div>
        </footer>
    </div>
  )
}

export const getCryptos = () => {
  return axios.get('/api/GetCryptoData')
    .then(response => response.data)
    .catch(error => {
      console.error(error.message);
    });
};