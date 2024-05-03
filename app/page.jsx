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
      <Image src={banner} alt="banner image" layout="fill" objectFit="cover" />
      <div className='absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent opacity-90'></div>

      {/* hero section starts here */}
      <section className='m-auto h-full relative '>
      <div className='text-center flex flex-col justify-center items-center h-auto absolute left-0 right-0 overflow-hidden  bottom-40'>
        <p className="font-baiJamjuree text-white text-2xl md:text-xl">OUR BIGGEST SALE LIVE NOW</p>
        <p className=" font-spaceGrotesk text-white text-6xl font-bold py-4 md:text-3xl">Black Friday Starts Now!</p>
        <button id="button">SHOP SALE NOW <FaArrowRight className="m-auto text-xl ml-2"/></button>
      </div>
      </section>
      {/* hero section ends here */}
    </div>

    {/* featutred section starts here*/}
    <section className="m-10">
      <div className="flex flex-wrap justify-between items-center">
      <h1 className="text-white text-4xl font-spaceGrotesk md:text-xl">Featured discounts</h1>
      <p className="flex text-[#7DFB5D] text-sm md:mt-2 md:text-xs">VIEW ALL DISCOUNTS<FaArrowRight className="mt-1 ml-2 text-sm"/></p>
      </div>
      <div className="my-5 card_style w-full">
      {featured.map((featured) => (
        <FeaturedCard key={Math.random()} featured={featured} />
      ))}
      </div>
    </section>
    {/* featutred section ends here*/}
      
      {/* mobile section */}
      <section className="bg_blue_color h-auto py-10">
          <div className="grid grid-cols-2 lg:grid-cols-1 ">
            <div className="m-auto h-auto">
              <Image src={mobile} alt="mobile image"></Image>
            </div>
            <div className="mt-32 lg:mt-16 p-4 mr-10 lg:ml-10">
              <p className="text-8xl font-spaceGrotesk text-white md:text-6xl sm:text-3xl">For your ears only.</p>
              <p className="my-10 font-spaceGrotesk text-white text-2xl md:text-xl sm:text-sm">Normal hearing varies significantly from person to person, and these variations make a <span className="text-[#7DFB5D]">big difference</span> to how you experience music.</p>
              <p className="my-10 font-spaceGrotesk text-white text-2xl md:text-xl sm:text-sm">The first time you use Nura earbuds, they <span className="text-[#7DFB5D]">measure your hearing</span> to create your personalised hearing profile.</p>
              <button id="button_learnmore">Learn More <FaArrowRight className="m-auto text-xl ml-2"/></button>
            </div>
          </div>
      </section>
      {/* mobile section ends */}

      <section>
      <div className='relative h-screen pb-10 bg-cover w-full'>
      <Image src={banner2} alt="Banner description" layout="fill" objectFit="cover" />
      <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent opacity-70'></div>

      {/* sound subscription section starts here */}
      <section className='m-auto relative h-full'>
      <div className='text-center  w-1/2 md:w-full md:px-2 flex flex-col justify-center items-center h-auto absolute m-auto left-0 right-0 top-0 bottom-0 overflow-hidden'>
        <p className="font-spaceGrotesk text-white text-6xl md:text-3xl">A sound subscription</p>
        <p className="font-spaceGrotesk text-white text-2xl md:text-xl py-4">Experience personalised sound across our devices on a low monthly fee with NuraNow. Cancel anytime.
</p>
        <button id="button_discover" className="my-5">DISCOVER NURANOW <FaArrowRight className="m-auto text-xl ml-2"/></button>
      </div>
      </section>
      {/* sound subscription section ends here */}
    </div>
      </section>
    </>
  );
}
