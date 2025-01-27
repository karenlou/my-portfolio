import React from 'react';
import Image from "next/image";

const About = () => {
  return (
    <div className="flex-col ">
      {/*}
      <Image
            className="invisible xl:visible 2xl:invisible absolute top-0 right-0"
            src="/Arrow.svg"
            alt="Arrow Graphic"
            layout="intrinsic"
            width={933}
            height={734}
      />
      */}
      <div className="flex items-center justify-center pt-7 animate-settle [--settle-delay:100ms]">
          <div className="p-2 w-44 mx-auto shadow-inner shadow-amber-950/50 rounded-full">
            <Image
                  className="h-auto object-cover shadow-sm shadow-amber-950/50 rounded-full"
                  src="/PortfolioPic3Round.png"
                  alt="A pic of me"
                  layout="responsive"
                  width={400}
                  height={250}
              />
          </div>
      </div>
      <div className="container mx-auto flex flex-col md:px-60 pt-10 font-geist justify-center items-center animate-settle [--settle-delay:200ms]">
          <p className="max-w-md text-base md:text-lg text-stone-800 text-justify ">🍀 I&apos;m currently a student exploring product design and tech at USC&apos;s Iovine and Young Academy.
          </p>
          <p className="max-w-md text-base md:text-lg text-stone-800 text-justify pt-7">A designer at heart, my goal has always been <span className="font-semibold">versatility</span>—that&apos;s why I&apos;m constantly seeking out new experiences to learn from and new skills to refine.<span className="text-stone-500"> Right now, I&apos;m particularly interested in fullstack dev, wearable tech, and backpacking.</span> Always feel free to <span className="underline decoration-wavy">reach out</span> with cool project ideas ☺</p>
          <a href="https://drive.google.com/file/d/16ujg_znvdO2HFtQsnVBSoI3OHbJFqFF7/view?usp=sharingn" target={"_blank"} rel={"external"} className="flex-shrink-0">
            <p className="max-w-md font-robotomono uppercase text-sm text-blue-700 text-justify pt-12 hover:text-blue-500 duration-100">my resume</p>
          </a>
      </div>
    </div>
  )
}

export default About