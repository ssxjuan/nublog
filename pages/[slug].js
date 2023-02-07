import { useEffect, useState } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import Head from 'next/head'

import Adsense, {AdUnit} from "@eisberg-labs/next-google-adsense";
import { getAllFilesMetadata } from '@/lib/mdx'

import { MDXRemote } from 'next-mdx-remote'
import { getFileBySlug, getFiles } from "@/lib/mdx"
import MDXComp from '@/components/MDXComp'

export default function Post({source, frontmatter, relatedPosts, posts}) {

    const [postsMap, setPostsMap] = useState([]);

    useEffect(() => {
        setPostsMap(posts.sort(() => Math.random() - 0.5).slice(0, 12));
    }, [posts]);

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

                <div className="w-full flex items-center flex-col">
                    <div className="w-full text-start font-normal text-black space-grotesk items-start flex pb-[28rem] md:pb-[18rem] mb-24 relative overflow-hidden max-w-[1400px] px-7 md:px-14">
                        <div className="w-1/4 md:flex hidden pr-12 flex-col pt-32">
                            
                            {/*<Adsense client_id="9099011145362951"/>
                            <AdUnit className="adsbygoogle block"
                                data-ad-client="9099011145362951"
                                data-ad-slot="1033173712"
                                data-ad-format="auto"
                                data-full-width-responsive="true"
                            />
                            <AdUnit className="mt-12 adsbygoogle block"
                                data-ad-client="9099011145362951"
                                data-ad-slot="1033173712"
                                data-ad-format="auto"
                                data-full-width-responsive="true"
                            /> */}
                            {
                                postsMap.map(post => {

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
                        <div className="md:w-1/2 md:border border-b-transparent border-slate-200 md:pt-40 pt-20 mt-12 md:mt-0 w-full flex flex-col items-start text-start ">
                            <span className="text-green-light font-medium">Blog de Nu</span>
                            <MDXRemote {...source} components={MDXComp} />
                        </div>
                        <div className="w-1/4 pl-12 md:flex hidden flex-col mt-32 sticky top-20">

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

            </div>
        </>
        
    )
}

export async function getStaticProps({ params }) {
    const { source, frontmatter } = await getFileBySlug(params.slug)
    const relatedPosts = await getRelatedPostsByTitle(frontmatter.title);
    const posts = await getAllFilesMetadata()

    return {
        props: {
            source, 
            frontmatter, 
            relatedPosts: relatedPosts.map(post => post ? post.frontmatter : null),
            posts: posts
        }
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
