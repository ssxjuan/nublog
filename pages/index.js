import Head from 'next/head'

import Adsense, { AdUnit } from '@eisberg-labs/next-google-adsense'

import { getAllFilesMetadata } from '@/lib/mdx'
import Link from 'next/link'
import Image from 'next/image'

import logo from '../assets/brand.svg';
import mobile from '../assets/menu-05.svg';

export default function Home({ posts }) {

  return (
    <>
      <Head>   
          <title>NuTrustX Blog: Finanzas y criptomonedas: Noticias y tutoriales</title>
          <meta name="description" content="Blog de noticias y recursos educativos sobre finanzas y criptomonedas en español. Ofrecemos información actualizada y consejos prácticos para ayudar a los lectores a entender y aprovechar al máximo el mundo de la inversión y laS criptos." />
          <meta name="keywords" content="Finanzas, Criptomonedas, Noticias, Tutoriales, Español" />
          <meta name="robots" content="index, follow" />
          <meta name="revisit-after" content="7 days" />
          <meta name="language" content="es-ES" />
          <meta name="author" content="GPT-3" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta property="og:title" content="NuTrustX Blog: Finanzas y criptomonedas: Noticias y tutoriales" />
          <meta property="og:description" content="Blog de noticias y recursos educativos sobre finanzas y criptomonedas en español. Ofrecemos información actualizada y consejos prácticos para ayudar a los lectores a entender y aprovechar al máximo el mundo de la inversión y laS criptos." />
          <meta property="og:image" content="og.jpg" />
          <meta property="og:url" content="https://nutrustx.web.app" />
          <meta property="og:type" content="website" />
          <link rel="canonical" href="https://nutrustx.web.app/" />
      </Head>
      <main className="w-full flex items-center flex-col bg-white">
          
        <nav className='fixed left-0 top-0 w-full h-14 border border-transparent border-b-gray-100 flex justify-center bg-white text-sm text-black z-50'>
            <div className="space-grotesk max-w-[1600px] w-full flex items-center justify-between px-7 md:px-14 font-medium">
                <div className="flex items-center ">
                    <div className="flex items-center mr-12 cursor-pointer" onClick={() => window.location.href='/'} >
                    <Image src={logo} alt="NuTrustX Logo PNG" className="brand-light w-8"/>
                    <p className='space-grotesk ml-2 text-[10px] mt-auto font-medium'>BETA</p>
                    </div>
                    <Link href='https://nutrustx.web.app/challenges' className='mr-12 hidden md:block'>Buscamos Traders</Link>
                </div>
                <div className="items-center hidden md:block">
                    <Link href='https://nutrustx.web.app/login'>Area de Clientes</Link>
                    <Link href='https://nutrustx.web.app/signup' className='py-2 font-medium px-4 ml-10 bg-green-light text-sm text-black'>Se Trader</Link>
                </div>
                <div className="items-center block md:hidden">
                    <Image src={mobile} alt="" className='invert cursor-pointer' />
                </div>
            </div>
        </nav>

        <div className="w-full text-start font-normal text-black space-grotesk pt-14 md:pt-28 items-start flex pb-[18rem] mb-24 relative overflow-hidden max-w-[1400px] px-7 md:px-14">

          <div className="w-1/4 md:flex hidden pr-12 flex-col">     
            <Adsense client_id="3940256099942544"/>
            <AdUnit className="adsbygoogle block"
                data-ad-client="3940256099942544"
                data-ad-slot="1033173712"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
            <AdUnit className="mt-12 adsbygoogle block"
                data-ad-client="3940256099942544"
                data-ad-slot="1033173712"
                data-ad-format="auto"
                data-full-width-responsive="true"
            />
          </div>
          <div className="xl:w-1/2 md:mt-0 mt-12 w-full flex flex-col items-start text-start">
            <div className="w-full cursor-pointer" onClick={() => window.location.href='/cuales_son_los_principales_usos_de_una_cuenta_bancaria'}>
              <h1 className='mb-8'>Noticias Relevantes</h1>
              <Image width="1000" height="600" src="https://images.unsplash.com/photo-1664490697404-5c84e8829f49?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3VlbnRhJTIwYmFuY2FyaWElMjB0cmFuc2ZlcmVuY2lhc3xlbnwwfHwwfHw%3D&w=1000&q=80" alt="Notice Image" className="w-full h-96 object-cover"/>
              <h2 className='leading-8 mt-4 pb-4 border border-transparent border-b-gray-100'>¿Cuáles son los principales usos de una cuenta bancaria?</h2>
            </div>
            {posts.map((post) => {
                return(
                  <div key={post.slug} onClick={() => window.location.href=`/${post.slug}`} className="mt-8 w-full flex items-center cursor-pointer">
                    <Image width="1000" height="600" src={post.image} alt={post.keywords} className='w-60 h-40 object-cover border'/>
                    <div className="flex flex-col px-4">
                      <h2 className='text-xl leading-6 mt-0 border border-transparent border-b-gray-100'>{post.title}</h2>
                      <p className='font-medium m-0'>{post.keywords}</p>
                    </div>
                  </div>
                )
            })}
          
          </div>

          
        
        </div>

      </main>
    </>
  )
}

export async function getStaticProps() {

  const posts = await getAllFilesMetadata()
  return {
    props: { posts }
  }
}
