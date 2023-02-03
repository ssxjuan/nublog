import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'

import Adsense, {AdUnit} from "@eisberg-labs/next-google-adsense";

import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "@/lib/mdx"
import MDXComp from '@/components/MDXComp'

import logo from '../assets/brand.svg';
import mobile from '../assets/menu-05.svg';

import tw from '../assets/tw.png';
import ig from '../assets/ig.png';
import tview from '../assets/tview.png';
import yt from '../assets/yt.png';
import tiktok from '../assets/tiktok.png';
import bg from '../assets/bgex.png';


export default function Post({source, frontmatter, relatedPosts}) {

    return (
        <>
            <Head>
                <title>{frontmatter.title}</title>
                <meta name="description" content={frontmatter.description} />
                <meta name="keywords" content={frontmatter.keywords} />
                <meta name="robots" content="index, follow" />
                <meta name="revisit-after" content="7 days" />
                <meta name="language" content="es-ES" />
                <meta name="author" content="GPT-3" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <meta property="og:title" content={frontmatter.title} />
                <meta property="og:description" content={frontmatter.description} />
                <meta property="og:image" content={frontmatter.image} />
                <meta property="og:url" content={frontmatter.slug} />
                <meta property="og:type" content="website" />
                <link rel="canonical" href={'https://nutrustx.web.app/' + frontmatter.slug} />
            </Head>
            <div className='h-full relative'>
                <nav className='fixed left-0 top-0 w-full h-14 border border-transparent border-b-gray-100 flex justify-center bg-white text-sm text-black z-50'>
                    <div className="space-grotesk max-w-[1600px] w-full flex items-center justify-between px-7 md:px-14 font-medium">
                        <div className="flex items-center ">
                            <div className="flex items-center mr-12 cursor-pointer" onClick={() => window.location.href='/'} >
                            <Image src={logo} alt="NuTrustX Logo PNG" className="brand-light w-8"/>
                            <p className='space-grotesk ml-2 text-[10px] mt-auto font-medium'>BETA</p>
                            </div>
                        </div>
                        <div className="items-center block md:hidden">
                            <Image src={mobile} alt="" className='invert cursor-pointer' />
                        </div>
                    </div>
                </nav>

                <div className="w-full flex items-center flex-col bg-white ">
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
                        <div className="md:w-1/2 mt-12 md:mt-0 w-full flex flex-col items-start text-start ">
                            <span className="text-green-light font-medium">Blog de Nu</span>
                            <MDXRemote {...source} components={MDXComp} />
                        </div>
                        <div className="w-1/4 pl-12 md:flex hidden flex-col -mt-8">

                            {
                                relatedPosts.map(post => {

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
                </div>

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
        </>
        
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug)
    const relatedPosts = await getRelatedPostsByTitle(frontmatter.title);

    return {
        props: {source, frontmatter, relatedPosts: relatedPosts.map(post => post ? post.frontmatter : null)}
    }
}

export async function getStaticPaths() {
    const posts = await getFiles()
    const paths = posts.map(post => ({
        params: {
            slug: post.replace(/\.mdx/, '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

async function getRelatedPostsByTitle(title) {
    const words = title.split(' ');
    const files = getFiles();

    const relatedPostsPromises = files.map(async(file) => {
        const fileData = await getFileBySlug(file.replace('.mdx', ''))
        const titleContainsWords = words.some(word => {
            return file.includes(word);
        });
        if (titleContainsWords) return fileData;
    }).filter(fileData => fileData).slice(0, 5);

    const relatedPosts = await Promise.all(relatedPostsPromises);

    return relatedPosts;
}