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
          
        <nav className='fixed left-0 top-0 w-full border border-transparent border-b-gray-100 flex flex-col justify-center bg-white text-sm text-black z-50'>
            <div className="h-14 space-grotesk max-w-[1600px] w-full border border-transparent border-b-gray-100 flex items-center justify-between px-7 md:px-14 font-medium">
                <div className="flex items-center ">
                    <div className="flex items-center mr-12 cursor-pointer" onClick={() => window.location.href='/'} >
                      <Image src={logo} alt="NuTrustX Logo PNG" className="brand-light w-8"/>
                      <p className='space-grotesk ml-2 text-[10px] mt-auto font-medium'>BETA</p>
                    </div>
                </div>
                <div className="items-center flex">
                    <Link href='/' className='title text-base'>Noticias</Link>
                </div>
            </div>
            <div className="w-full py-2 px-7 md:px-14 max-w-[1600px] flex justify-between">
                <div className="flex items-center">
                  <p className='m-0'>Bitcoin</p>
                  <div class="w-6 overflow-hidden inline-block">
                    <div class="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/30 sans'>24,329$</p>
                </div>
                <div className="md:flex hidden items-center">
                  <p className='m-0'>Bitcoin</p>
                  <div class="w-6 overflow-hidden inline-block">
                    <div class="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/30 sans'>24,329$</p>
                </div>
                <div className="md:flex hidden items-center">
                  <p className='m-0'>Bitcoin</p>
                  <div class="w-6 overflow-hidden inline-block">
                    <div class="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/30 sans'>24,329$</p>
                </div>
                <div className="md:flex hidden items-center">
                  <p className='m-0'>Bitcoin</p>
                  <div class="w-6 overflow-hidden inline-block">
                    <div class="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/30 sans'>24,329$</p>
                </div>
                <div className="md:flex hidden items-center">
                  <p className='m-0'>Bitcoin</p>
                  <div class="w-6 overflow-hidden inline-block">
                    <div class="ml-2 h-2 w-2 bg-green-light rotate-45 transform origin-bottom-left"></div>
                  </div>
                  <p className='m-0 ml-0 text-xs font-medium py-0.5 px-3 bg-green-light/30 sans'>24,329$</p>
                </div>
            </div>
        </nav>

        <div className="w-full text-start font-normal text-black space-grotesk pt-20 md:pt-28 items-start flex pb-[18rem] mb-24 relative overflow-hidden max-w-[1400px] md:px-14">

          <div className="w-1/4 md:flex hidden pr-12 flex-col border">     
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
          <div className="xl:w-1/2 md:mt-0 mt-12 w-full flex flex-col items-start text-start px-7">
            <div className="w-full cursor-pointer" onClick={() => window.location.href='/cuales_son_los_principales_usos_de_una_cuenta_bancaria'}>
              <h1 className='m-0 md:text-4xl text-3xl'>Los principales usos de una cuenta bancaria</h1>
              <p className='mb-4 mt-0 title'>Bitcoin, Inversiones, Finanzas</p>
              <Image width="1000" height="600" src="https://nutrustx.tech/_next/image?url=https%3A%2F%2Fwww.autonoma.pe%2Fcomunidad%2Fwp-content%2Fuploads%2F2022%2F04%2Fmotivos-estudiar-negocios-internacionales.jpg&w=1080&q=75" alt="Notice Image" className="w-full h-96 object-cover"/>
              <p>Las cuentas bancarias pueden ofrecer varias ventajas y usos, y son una herramienta importante para el ahorro, la inversión y la administración financiera. </p>
            </div>
            {posts.map((post) => {
                return(
                  <div key={post.slug} onClick={() => window.location.href=`/${post.slug}`} className="mt-8 w-full flex md:flex-nowrap flex-wrap items-center cursor-pointer">
                    <Image width="1000" height="600" src={post.image} alt={post.keywords} className='w-full md:w-60 h-60 md:h-40 object-cover border'/>
                    <div className="flex flex-col md:px-4 mt-4 md:mt-0">
                      <h2 className='text-xl leading-6 mt-0'>{post.title}</h2>
                      <p className='font-medium m-0'>{post.keywords}</p>
                    </div>
                  </div>
                )
            })}
          
          </div>
          <div className="w-1/4 -mt-8 md:block hidden">
          {
            posts.map(post => {

                if(post && post.title) {
                    return (
                        <div key='' className="w-full mt-8 cursor-pointer" onClick={() => window.location.href = "/" + post.slug ? post.slug : ''}>
                            <div className="w-full h-72 relative">
                                <Image width="1000" height="1000" src={post.image} alt="" className='w-full h-full object-cover' />
                                <Link className='absolute top-4 right-4 bg-green-500 px-4 py-1 text-black text-sm font-semibold' href={"/" + post.slug ? post.slug : ''}>Read</Link>
                                <div className="flex absolute bottom-0 w-full flex-col h-24 p-4 backdrop-blur-sm bg-white/20">
                                <h3 className="text-white text-md font-medium text-ellipsis overflow-hidden whitespace-nowrap">{post.title ? post.title : ''}</h3>
                                <p className="text-white m-0 leading-4 text-xs">{post.description ? post.description : ''}</p>
                                </div>
                            </div>
                        </div>
                    )
                } 
            })

        }
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
