import Image from "next/image"
import { FaArrowRight } from "react-icons/fa6";

const FeaturedCard = (props) => {
  return (
    <>
    <section className="my-5 bg-[#E5E5E5] rounded-2xl max-w-[18rem] relative pb-16 flex flex-col items-center">
    {/* <div className=" w-full h-[10rem] border border-red-500"> */}
        <Image src={props?.featured?.image} alt="featured image" className=""></Image>
    {/* </div> */}
    <div className="text-black font-spaceGrotesk text-center w-full text-2xl font-bold">{props?.featured.title}</div>
    <div className="text-center my-2">
        <span className="text-gray-700 text-sm line-through">{props?.featured.notPrice}</span>
        <span className="font-bold text-sm ml-2">{props?.featured.actualPrice}</span>
    </div>
    <button id="button_featured" className="m-auto my-4 absolute bottom-0">SHOP NOW <FaArrowRight className="m-auto text-sm ml-2"/></button>
    </section>
    </>
  )
}

export default FeaturedCard