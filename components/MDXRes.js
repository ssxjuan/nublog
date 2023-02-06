import Image from "next/image"

import okx from '../assets/okx.png'
import vantage from '../assets/vg.webp'
import paxful from '../assets/pxful.png'
import bitfinex from '../assets/bnex.png'

export const ImageAdd = ({ source }) => {
    return (
        <div>
            <Image src={source} alt="" className="!h-96 my-14 object-cover" width={1500} height={1500} />
        </div> 
    )
}

export const AmazonBook = ({ code, image, title }) => {

    const src = "//rcm-eu.amazon-adsystem.com/e/cm?lt1=_blank&bc1=000000&IS2=1&bg1=FFFFFF&fc1=000000&lc1=0000FF&t=nutrustx-21&language=es_ES&o=30&p=8&l=as4&m=amazon&f=ifr&ref=as_ss_li_til&asins=" + code + "&linkId=fceaed477b9c89c63ffcf78ad16aec35"

    return (
        <div className="relative w-full h-40 mb-4 flex items-center bg-slate-200 p-4 cursor-pointer" onClick={() => window.open(src)}>
            <Image alt="Test" className='w-32 h-32 object-cover' width="300" height="300" src={image} />
            <div className="flex flex-col ml-4">
            <p className='text-xl m-0'>Compre {title} en Amazon</p>
            <p className='m-0 space-grotesk font-semibold text-sm text-yellow-700'>Entrega en solo 24 horas</p>
            <button className='px-4 py-2 bg-black text-white mt-4 text-xs font-medium w-fit'>Envío Rápido</button>
            </div>
        </div>
    )
}

export const BrokerAdd = ({ brokerName }) => {

    switch (brokerName){
        case 'Vantage':
            return (
                <div className="relative w-full h-40 mb-4 flex items-center bg-slate-200 p-4 cursor-pointer" onClick={() => window.open('https://www.okx.com/join/32178946')}>
                    <Image alt="Test" className='w-32 h-32 object-cover' width="300" height="300" src={vantage} />
                    <div className="flex justify-between w-full items-center ml-4">
                        <div className="">
                            <p className='text-2xl m-0'>{brokerName}</p>
                            <p className='m-0 space-grotesk font-semibold text-sm'>Recomendación de NuTrustX</p>
                        </div>
                        <button className='px-4 py-2 bg-black text-white text-xs font-medium w-fit'>Empezar a Tradear</button>
                    </div>
                </div>
            )
        case 'OKx':
            return (
                <div className="relative w-full h-40 mb-4 flex items-center bg-slate-200 p-4 cursor-pointer" onClick={() => window.open('https://www.okx.com/join/32178946')}>
                    <Image alt="Test" className='w-32 h-32 object-cover' width="300" height="300" src={okx} />
                    <div className="flex justify-between w-full items-center ml-4">
                        <div className="">
                            <p className='text-2xl m-0'>{brokerName}</p>
                            <p className='m-0 space-grotesk font-semibold text-sm'>Recomendación de NuTrustX</p>
                        </div>
                        <button className='px-4 py-2 bg-black text-white text-xs font-medium w-fit'>Empezar a Tradear</button>
                    </div>
                </div>
            )
        case 'BitFinex':
            return (
                <div className="relative w-full h-40 mb-4 flex items-center bg-slate-200 p-4 cursor-pointer" onClick={() => window.open('https://www.bitfinex.com/sign-up?refcode=S2RKEiZzb')}>
                    <Image alt="Test" className='w-32 h-32 object-cover' width="300" height="300" src={bitfinex} />
                    <div className="flex justify-between w-full items-center ml-4">
                        <div className="">
                            <p className='text-2xl m-0'>{brokerName}</p>
                            <p className='m-0 space-grotesk font-semibold text-sm'>Recomendación de NuTrustX</p>
                        </div>
                        <button className='px-4 py-2 bg-black text-white text-xs font-medium w-fit'>Empezar a Tradear</button>
                    </div>
                </div>
            )
    }
}