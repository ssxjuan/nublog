import Image from "next/image"

import okx from '../assets/okx.png'
import bitfinex from '../assets/bnex.png'

export const ImageAdd = ({ source }) => {
    return (
        <div>
            <Image src={source} alt="" className="!h-96 my-14 object-cover" width={1500} height={1500} />
        </div> 
    )
}

export const AmazonBook = ({ srcX, image, title }) => {

    const t = title.length > 60 ? title.substring(0,60) + "..." : title;

    return (
        <div className="relative w-full h-40 mb-4 flex items-center bg-slate-200 p-4 cursor-pointer" onClick={() => window.open(srcX)}>
            <Image alt="Test" className='w-32 h-32 object-cover' width="300" height="300" src={image} />
            <div className="flex flex-col ml-4">
            <p className='text-xl m-0'>Compre {t} en Amazon</p>
            <p className='m-0 space-grotesk font-semibold text-sm text-yellow-700'>Entrega en solo 24 horas</p>
            <button className='px-4 py-2 bg-black text-white mt-4 text-xs font-medium w-fit'>Envío Rápido</button>
            </div>
        </div>
    )
}

export const BrokerAdd = ({ brokerName }) => {

    switch (brokerName){
        // Brokers
        case 'Vantage':
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
        case 'DukasCopy':
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
        // Exchanges
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
        case 'CoinEx':
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
        // P2P
        case 'PaxFul':
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