"use client";

import React from 'react'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import Socials from './Socials';

const NavBar = () => {
  const pathName = usePathname();
  const isFixedNavbar = pathName === "/";
  const isActive = (path: string) => {
    return pathName.split('?')[0] === path.split('?')[0] ? "text-blue-700 bg-yellow-300" : "text-blue-700 hover:text-stone-800"
  }
  return (
    <nav className={`px-5 md:px-0 w-screen flex justify-center font-robotomono text-md md:text-lg ${isFixedNavbar ? 'fixed' : 'relative'} animate-settle [--settle-delay:100ms] bg-clip-padding backdrop-blur-sm bg-transparent border-solid border-[1px] border-b-stone-50/50 z-50`}>
      <div className="container mx-auto relative flex-wrap md:flex items-center justify-left md:justify-between overflow-hidden pt-7 md:pt-10 ">
        <div className="md:fixed inset-0 bg-[url('/Noise.png')] opacity-20 bg-cover bg-center bg-fixed z-10"></div>
        <div className="flex items-center gap-8 z-50">
          <Link href="/" className="flex-shrink-0">
            <div className="group w-10 h-10 hover:scale-110 transition-transform duration:100 flex justify-center items-center">
              <Image
                  className="group-hover:hidden" 
                  src="/PortfolioLogo.png"
                  alt="Karen Lou"
                  layout="responsive"
                  width={400} // Adjust the width as needed
                  height={250} // Adjust the height as needed
              />
              <Image
                  className="hidden group-hover:block"
                  src="/PortfolioLogoHover.png"
                  alt="Karen Lou Hover"
                  layout="responsive"
                  width={400} // Adjust the width as needed
                  height={250} // Adjust the height as needed
              />
            </div>
          </Link>
          <Link href="/" className={`${isActive("/")} flex-shrink-0 hover:-translate-y-1 transition-transform duration:100`}>
            projects
          </Link>
          <Link href="/pages/play" className={`${isActive("/pages/play")} flex-shrink-0 hover:-translate-y-1 transition-transform duration:100`}>
            play
          </Link>
          <Link href="/pages/about" className={`${isActive("/pages/about")} flex-shrink-0 hover:-translate-y-1 transition-transform duration:100`}>
            about
          </Link>
        </div>
        <div className="flex items-center my-2 z-50">
          <Socials />
        </div>
      </div>
    </nav>
  )
}

export default NavBar