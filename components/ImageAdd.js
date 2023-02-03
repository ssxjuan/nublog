import Image from "next/image"


export const ImageAdd = ({ source }) => {
    return (
        <div>
            <Image src={source} alt="" className="!h-96 my-14 object-cover" width={1500} height={1500} />
        </div> 
    )
}