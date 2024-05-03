"use client"
import React,{useState, useEffect} from 'react'

import Logo from '../public/logo.png'
import Image from 'next/image';
import {MenuIcon, CrossIcon} from './svg'
import Link from 'next/link';

const lis = [
  {
    title:"Products",
    link:""
  },
  {
    title:"Subscription",
    link:""
  },
  {
    title:"Why Nura?",
    link:"" 
  },
  {
    title:"Support",
    link:""
  }
]

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
    {showText? <MenuIcon/> : <CrossIcon/> }

    </button>
  <div className='2xl:block lg:hidden w-full relative'>
          <div>
            <ul className='flex gap-7 md:gap-3 items-center w-full'>
                {lis.map((li)=>(
                  <Link href={li.link}><li>{li.title}</li></Link>
                ))}
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
        <div className='side_bar lg:block bg-black text-white top-20 right-0 absolute p-5 h-auto w-1/3 md:w-1/2 sm:w-[80%] z-50 rounded-lg'>
        <div>
        <ul>
          {lis.map((li)=>(
            <Link href={li.link}><li className='py-2'>{li.title}</li></Link>
          ))}
          <li className="py-2"><button className=' bg-custom-green p-2 px-5 rounded-lg font-medium'>Cart (0)</button></li>
        </ul>
        </div>
        </div>
      </>
  )
};

export default Navbar
