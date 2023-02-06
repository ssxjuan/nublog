import React, { useEffect, useState } from 'react';

import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

import Adsense, { AdUnit } from '@eisberg-labs/next-google-adsense'
import { getAllFilesMetadata } from '@/lib/mdx'


import logo from '../assets/brand.svg';

export default function Home({ posts }) {

  const [sidePostsMap, setSidePostsMap] = useState([]);
  const [leftPostsMap, setLeftPostsMap] = useState([]);
  const [postsMap, setPostsMap] = useState([]);

  useEffect(() => {
    setSidePostsMap(posts.sort(() => Math.random() - 0.5).slice(0, 12));
    setLeftPostsMap(posts.sort(() => Math.random() - 0.5).slice(0, 12));
    setPostsMap(posts.sort(() => Math.random() - 0.5).slice(0, 15));
  }, [posts]);

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
      <main className="w-full flex items-center flex-col">

        <div className="w-full text-start font-normal text-black space-grotesk items-start flex pb-[18rem] mb-24 relative overflow-hidden max-w-[1600px] md:px-14">

          <div className="w-1/4 md:flex hidden pr-12 flex-col pt-40">     
            {/*<Adsense client_id="3940256099942544"/>
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
            />*/}
            <p className='m-0 text-3xl'>Most Read</p>
            {
              leftPostsMap.map(post => {

                  if(post && post.title) {
                      return (
                          <div key={post.slug} className="w-full mt-8 cursor-pointer" onClick={() => window.location.href = "/" + post.slug ? post.slug : ''}>
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

          <div className="xl:w-1/2 md:border border-slate-200 w-full flex flex-col items-start text-start mx-7 pt-40">
            
            <div className="w-full cursor-pointer" onClick={() => window.location.href='/cuales_son_los_principales_usos_de_una_cuenta_bancaria'}>
              <h1 className='m-0 md:text-4xl text-3xl'>Los principales usos de una cuenta bancaria</h1>
              <p className='mb-4 mt-0 title'>Bitcoin, Inversiones, Finanzas</p>
              <Image width="1000" height="600" src="https://nutrustx.tech/_next/image?url=https%3A%2F%2Fwww.autonoma.pe%2Fcomunidad%2Fwp-content%2Fuploads%2F2022%2F04%2Fmotivos-estudiar-negocios-internacionales.jpg&w=1080&q=75" alt="Notice Image" className="w-full h-96 object-cover"/>
              <p>Las cuentas bancarias pueden ofrecer varias ventajas y usos, y son una herramienta importante para el ahorro, la inversión y la administración financiera. </p>
            </div>
            {
              postsMap.map((post) => {
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

          <div className="w-1/4 -mt-8 md:block hidden pt-40">
          {
            sidePostsMap.map(post => {

                if(post && post.title) {
                    return (
                        <div key={post.slug} className="w-full mt-8 cursor-pointer" onClick={() => window.location.href = "/" + post.slug ? post.slug : ''}>
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
