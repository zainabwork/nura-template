"use client"
import React,{useState, useEffect} from 'react'

import Logo from '../public/logo.png'
import Image from 'next/image';

const Navbar = () => {
  const [showText, setShowText] = useState('');
  const onClick = () => setShowText(!showText);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
    <nav className={`nav_wrapper font-spaceGrotesk ${
          isScrolled ? "bg_nav" : "bg_none"
        } xl:h-[90px]`}>
    <div><Image className='mx-10' src={Logo}></Image></div>
    <button className='hidden lg:block' onClick={onClick}>
    {showText?  
    
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 absolute right-6 top-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10 absolute right-6 top-6">
      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
      }
   

    </button>
  <div className='2xl:block lg:hidden w-full relative'>
          <div>
            <ul className='flex gap-7 md:gap-3 items-center w-full'>
                <li>Products</li>
                <li>Subscription</li>
                <li>Why Nura?</li>
                <li>Support</li>
                <li className="absolute right-0"><button className=' bg-custom-green p-2 px-5 rounded-lg font-medium'>Cart (0)</button></li>
            </ul>
        </div>
        </div>
        
        </nav>
        {showText ? <Text /> : null}
    </>
  )
}

function Text(){
  return(
      <>
        <div className='side_bar 2xl:hidden lg:block bg-black text-white top-20 right-0 absolute p-5 h-auto w-1/3 md:w-1/2 sm:w-[80%] z-50 rounded-lg'>
        <div>
        <ul className=''>
                <li className='py-2'>Products</li>
                <li className='py-2'>Subscription</li>
                <li className='py-2'>Why Nura?</li>
                <li className='py-2'>Support</li>
                <li className="py-2"><button className=' bg-custom-green p-2 px-5 rounded-lg font-medium'>Cart (0)</button></li>
            </ul>
        </div>
        </div>
      </>
  )
};

export default Navbar
