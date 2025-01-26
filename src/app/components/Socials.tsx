"use client";

import React from 'react';
import Image from "next/image";

const Socials = () => {
  return (
    <div className="flex items-center text-stone-800 text-sm gap-4 ">
        <a href="https://linkedin.com/in/karen-lou" target={"_blank"} rel={"external"} className="flex-shrink-0">
          <div className="w-9 h-9 px-2 py-2 hover:-translate-y-1 transition-transform duration:100 flex justify-center items-center">
            <Image
                className="" 
                src="/linkedin.png"
                alt="My LinkedIn"
                layout="responsive"
                width={400} // Adjust the width as needed
                height={250} // Adjust the height as needed
            />
          </div>
        </a>
        <a href="https://github.com/karenlou"  target={"_blank"} rel={"external"} className="flex-shrink-0">
          <div className="w-9 h-9 px-2 py-2 hover:-translate-y-1 transition-transform duration:100 flex justify-center items-center">
            <Image
                className="" 
                src="/github.png"
                alt="My GitHub"
                layout="responsive"
                width={400} // Adjust the width as needed
                height={250} // Adjust the height as needed
            />
          </div>
        </a>
        <a href="mailto:karenlou@usc.com"  target={"_blank"} rel={"external"} className="flex flex-shrink-0">
            <div className="inline-flex mx-auto items-center justify-center">
                <div className="w-9 h-9 px-2 py-2 hover:-translate-y-1 transition-transform duration:100 flex justify-center items-center">
                    <Image
                        className="" 
                        src="/envelope.png"
                        alt="karenlou@usc.edu"
                        layout="responsive"
                        width={400} // Adjust the width as needed
                        height={250} // Adjust the height as needed
                    />
                </div>
                <p className="px-[1px] hover:text-stone-600 transition-transform duration:100">karenlou@usc.edu</p>
            </div>
        </a>
    </div>
  )
}

export default Socials