import Image from "next/image";
import banner from '../public/banner.png'
import { FaArrowRight } from "react-icons/fa6";
import FeaturedCard from "@/components/FeaturedCard";
import image1 from "../public/featured/image-1.png";
import image2 from "../public/featured/image-2.png";
import image3 from "../public/featured/image-3.png";
import image4 from "../public/featured/image-4.png";
import mobile from "../public/mobile.png"
import banner2 from '../public/banner-2.png'
export default function Home() {
  const featured = [
    {
      image:image1,
      title:"Nuraphone",
      notPrice:"$399",
      actualPrice:"$299.25",
    },
    {
      image:image2,
      title:"NuraTrue",
      notPrice:"$199.99",
      actualPrice:"$139.99",
    },
    {
      image:image3,
      title:"NuraBuds 2",
      notPrice:"$199",
      actualPrice:"$89.25",
    },
    {
      image:image4,
      title:"Nura Bluetooth® 5.3 Audio Transmitter",
      notPrice:"$399",
      actualPrice:"$299.25",
    }
  ]
  return (
    <>
      <div className='relative h-screen pb-10 bg-cover w-full'>
      <Image src={banner} alt="Banner description" layout="fill" objectFit="cover" />
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70'></div>

      {/* hero section starts here */}
      <section className='m-auto'>
      <div className='flex flex-col justify-center items-center h-auto relative mx-auto  overflow-hidden pt-80'>
        <p className="font-baiJamjuree text-white text-2xl">OUR BIGGEST SALE LIVE NOW</p>
        <p className=" font-spaceGrotesk text-white text-6xl font-bold py-4">Black Friday Starts Now!</p>
        <button id="button">SHOP SALE NOW <FaArrowRight className="m-auto text-xl ml-2"/></button>
      </div>
      </section>
      {/* hero section ends here */}
    </div>

    {/* featutred section starts here*/}
    <section className="m-10">
      <div className="flex justify-between items-center">
      <h1 className="text-white text-4xl font-spaceGrotesk">Featured discounts</h1>
      <p className="flex text-[#7DFB5D] text-sm">VIEW ALL DISCOUNTS<FaArrowRight className="mt-1 ml-2 text-sm"/></p>
      </div>
      <div className="my-5 card_style ">
      {featured.map((featured) => (
        <FeaturedCard key={Math.random()} featured={featured} />
      ))}
      </div>
    </section>
    {/* featutred section ends here*/}
      
      {/* mobile section */}
      <section className="bg_blue_color h-auto py-10">
          <div className="flex">
            <div className="w-1/2 h-auto">
              <Image src={mobile} alt="mobile image"></Image>
            </div>
            <div className="mt-32 w-1/2 p-4">
              <p className="text-8xl font-spaceGrotesk text-white">For your ears only.</p>
              <p className="my-10 font-spaceGrotesk text-white text-2xl">Normal hearing varies significantly from person to person, and these variations make a <span className="text-[#7DFB5D]">big difference</span> to how you experience music.</p>
              <p className="my-10 font-spaceGrotesk text-white text-2xl">The first time you use Nura earbuds, they <span className="text-[#7DFB5D]">measure your hearing</span> to create your personalised hearing profile.</p>
              <button id="button_learnmore">Learn More <FaArrowRight className="m-auto text-xl ml-2"/></button>
            </div>
          </div>
      </section>
      {/* mobile section ends */}

      <section>
      <div className='relative h-screen pb-10 bg-cover w-full'>
      <Image src={banner2} alt="Banner description" layout="fill" objectFit="cover" />
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70'></div>

      {/* hero section starts here */}
      <section className='m-auto'>
      <div className='text-center pt-40 w-1/2 flex flex-col justify-center items-center h-auto relative mx-auto overflow-hidden'>
        <p className="font-spaceGrotesk text-white text-6xl">A sound subscription</p>
        <p className=" font-spaceGrotesk text-white text-2xl py-4">Experience personalised sound across our devices on a low monthly fee with NuraNow. Cancel anytime.
</p>
        <button id="button_discover" className="my-5">DISCOVER NURANOW <FaArrowRight className="m-auto text-xl ml-2"/></button>
      </div>
      </section>
      {/* hero section ends here */}
    </div>
      </section>
    </>
  );
}
