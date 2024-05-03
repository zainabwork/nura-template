import Image from "next/image"
import linkedinIcon from '../public/linkedin-icon.jpg'
const Footer = () => {
  return (
    <>
    <footer className="p-10 pt-20 bg-black font-spaceGrotesk">
        <div className="flex justify-between md:flex-col">
        <div>
        <ul className="flex flex-wrap gap-5 text-white text-sm sm:text-xs">
            <li className="list-item-with-slash cursor-pointer">HOME</li>
            <li className="list-item-with-slash cursor-pointer">PROCESS</li>
            <li className="list-item-with-slash cursor-pointer">WORK</li>
            <li className="list-item-with-slash cursor-pointer">FAQS</li>
            <li className="list-item-with-slash cursor-pointer">ABOUT US</li>
            <li className="cursor-pointer">PRIVACY</li>
        </ul>
        <div className="text-white my-5 text-sm font-spaceGrotesk">
        <p className="sm:text-xs">© 2021 SVZ Design, All Rights Reserved</p>
        <p className="sm:text-xs">San Francisco - Los Angeles - Seattle</p>
        </div>
        </div>
        <div className="cursor-pointer"><Image src={linkedinIcon}></Image></div>
        </div>
    </footer>
    </>
  )
}

export default Footer