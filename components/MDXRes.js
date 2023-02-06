import Image from "next/image"

import okx from '../assets/okx.png'
import bitfinex from '../assets/bnex.png'

export const ImageAdd = ({ source }) => {
    return (
        <div>
            <Image src={source} alt="Background Image" className="!h-96 my-14 object-cover" width={1500} height={1500} />
        </div> 
    )
}