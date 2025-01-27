import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import Project from '@/app/components/Project'
import Figure from '@/app/components/Figure'
import ProgressBar from '@/app/components/ProgressBar';

const Orvato = () => {
  return (
    <div className="font-robotomono min-h-screen mx-auto text-stone-800 flex-row mb-20">
        <div className="flex-auto invisible lg:visible"><ProgressBar /></div>
        <div className="flex-auto lg:ml-40">
            <Project
            imageSrc="/Orvato.png" 
            title="Orvato"
            role="UI Design, Branding, UX"
            ppl="👥"
            description="A property management tool for real estate developers, designed to minimize redundancy and inefficient communication with prospective buyers. Co-founded with Jet and Vikram in SEP, USC's premier entrepreneurship society ❤️"
            scope={['10 weeks', 'Sept 2024 → Dec 2024']}
            team={['Jet J. [Dev]','Vikram S. [PM/Designer]']}
            tools={['Figma', 'Notion']}
            />
        </div>
        <p className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 mx-auto font-geist border-solid border-[1px] border-stone-800 rounded-full text-xl md:text-4xl animate-bounce">↓</p>
        <div className="flex-auto lg:ml-40">
            <div id="section-1" className="container py-24 md:px-16 mx-auto">
                <h1 className="section inline-flex px-2 text-stone-200 border-solid border-[0.5px] border-stone-200 rounded-md bg-stone-800 font-geist text-lg mb-7">The Problem</h1>
                <div className="flex mx-auto gap-20 justify-between">
                    <p className="max-w-full text-3xl font-semibold text-stone-800 pb-4">On average, it takes 14 months for real estate developers to sell a single home.</p>
                    <div className="flex-col">
                      <p className="max-w-full text-stone-500 mb-7 border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 content-center text-base">Our team narrowed it down to 3 main factors: poor communication, generic outreach, and lack of insight.</p>
                      <p className="px-4 py-4 mb-7 inline-flex rounded-md object-cover shadow-sm shadow-neutral-950/50 bg-neutral-200/40">💭 How can we streamline the homebuying process so developers can convert buyers faster?</p>
                    </div>
                </div>
                <div className="flex divide-x-[1px] divide-stone-400 my-2">
                  <div className="flex-1 min-h-40"></div>
                  <div className="flex-1 min-h-40"></div>
              </div>
                <h1 className="inline-flex px-2 text-stone-800 border-solid border-[0.5px] border-stone-800 rounded-md font-geist text-lg mb-7">Our Solution</h1>
                <div className="flex mx-auto gap-20 justify-between">
                    <p className="max-w-full text-3xl font-semibold text-stone-800 pb-4">Enable developers to tailor their listings to the individual buyer and provide instant answers.</p>
                    <div className="flex-col">
                      <p className="max-w-full text-stone-500 mb-7 border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 content-center text-base"><span className="font-semibold">Developer side: </span>Generate personalized property pages for each interested buyer, based off of their priorities and concerns.</p>
                      <p className="max-w-full text-stone-500 mb-7 border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 content-center text-base"><span className="font-semibold">Buyer side: </span>Smooth homebuying experience with tons of information available without delay or redundant, back-and-forth conversation.</p>                      
                    </div>
                </div>
                <div className="flex-col mx-auto">
                    <Figure
                    imageSrc="/OrvatoDevUI.png"
                    title="Orvato: Developer Side"
                    figureNum="Fig. 1"
                    description="Developer Side: Developer dashboard for quick engagement insights and property page generation."
                    />
                  <div className="md:flex">
                      <div className="flex-1">
                        <Figure
                        imageSrc="/OrvatoBuyerUI1.png"
                        title="Orvato: Buyer Side 1"
                        figureNum="Fig. 2"
                        description="Buyer Side: 1️⃣ Buyers receive a personalized property page for a listing they're interested in."
                        />
                      </div>
                      <div className="flex-1">
                        <Figure
                        imageSrc="/OrvatoBuyerUI2.png"
                        title="Orvato: Buyer Side 2"
                        figureNum="Fig. 3"
                        description="2️⃣ Instantly accessible about key features of the home--with descriptions that emphasize and address the buyer's voiced priorities and/or concerns."
                        />
                      </div>
                      <div className="flex-1">
                        <Figure
                        imageSrc="/OrvatoBuyerUI3.png"
                        title="Orvato: Buyer Side 3"
                        figureNum="Fig. 4"
                        description="3️⃣ Buyers can get basic questions about the property answered instantly, leaving the more complex details for the developer and streamlining communication."
                        />
                      </div>
                  </div>
                </div>
                <div id="section-2">
                    <h1 className="section inline-flex px-2 text-indigo-900 border-solid border-[0.5px] border-indigo-900 bg-indigo-200 rounded-md font-geist text-lg mt-10">The Process</h1>
                    <p className="text-3xl font-semibold mt-7">💬 Customer and Product Discovery</p>
                    <p className="text-stone-500 text-base my-4">We spent two weeks CDing realtors and developers, seeking out common pain points.</p>
                    <div className="flex-col">
                      <p className="max-w-3xl inline-block text-stone-500 my-4 border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 content-center text-base">🔑 We found that many developers struggle to connect to interested parties through their ads--there is a lack of information available for potential buyers, a pain point that is especially significant in an industry where personalized experiences are key.</p>
                      <p className="max-w-3xl inline-block text-stone-500 my-4 border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 content-center text-base">A tool that could help curate that personal developer-buyer relationship would ultimately lead to faster/increased buyer conversion.</p>
                    </div>
                    <Figure
                    imageSrc="/OrvatoDesignProcess.png"                 
                    title="Orvato Design Process"
                    figureNum="Fig. 5"
                    description="UI design ideation. Earlier versions of Orvato incorporated wrapping the software in the client company's branding in order to establish each firm as having their own culture, ethos, and specialties."
                    />
                    <Figure
                    imageSrc="/OrvatoBranding.png"                 
                    title="Orvato Brand Identity"
                    figureNum="Fig. 6"
                    description="Orvato's brand identity begins to form: sophisticated, simple, neutral. Since its purpose is to serve as the medium connecting the developers to the buyers and merely faciliate the homebuying process, its branding should reflect the ability for firms to make the tool their own."
                    />                        
                </div>
                <p id="section-3" className="section text-3xl font-semibold pt-16">👩‍💼🧑‍💼🧑‍💼 Launch Day!</p>
                <p className="text-stone-500 text-base my-4">After an exciting 10 weeks, our team finally pitches Orvato to a guest panel of leaders in the startup space.</p>
                <div className="max-w-5xl mx-auto flex-1 px-5 md:px-10 flex-col mt-14 mb-7 border-none">
                    <div className="relative group">
                        <Image
                            className="shadow-none mb-4 transition-opacity duration-300 ease-in-out"
                            src="/OrvatoPitchDecK.png"
                            alt="Visit Orvato's Pitch Deck"
                            layout="responsive"
                            width={400}
                            height={250}
                        />
                        <Link href="https://www.figma.com/proto/FwKVvWeuNrtdBmMQrHeoIN/Orvato?page-id=572%3A101&node-id=589-97&viewport=-7103%2C2834%2C0.24&t=4objYdFxxJaSqnMT-1&scaling=contain&content-scaling=fixed">
                            <Image
                                    className="absolute top-0 left-0 shadow-none mb-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                                    src="/OrvatoPitchDeckHover.png"
                                    alt="Visit Orvato's Pitch Deck"
                                    layout="responsive"
                                    width={400}
                                    height={250}
                                />
                        </Link>
                    </div>
                    <div className="flex items-baseline gap-4">
                        <h2 className="flex-shrink-0 border-solid border-[0.5px] border-yellow-900 bg-yellow-400 rounded-md inline-flex px-2 mb-2 text-yellow-900 font-geist">Fig. 7</h2>          
                        <p className="font-robotomono text-stone-400 text-sm">Our Launch Day pitch!</p>      
                    </div>    
                </div>
                <h1 className="inline-flex px-2 text-emerald-950 border-solid border-[0.5px] border-emerald-950 bg-emerald-200/40 rounded-md font-geist text-lg mt-20">My Takeaways</h1>
                <p className="text-3xl font-semibold my-7">Some things I&apos;ve learned....</p>
                <div className="flex justify-end mb-14">
                    <ul className="inline-block border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 text-stone-500 text-base my-4 md:mx-14 list-decimal list-inside justify-end space-y-5">
                        <li className=""><span className="font-semibold">Find your why.</span> Pivoting is almost inevitable--dedicate time and effort into customer discovery and validation. Make sure the problem your business addresses is real, well-defined, and large enough.</li>
                        <li className=""><span className="font-semibold">Be receptive and practical.</span> Once I began to design Orvato, I quickly learned the importance of maintaining open communication with our team&apos;s dev and figuring out what can be translated into code and what would hinder a seamless and scalable user experience. At the end of the day, simple and intuitive UI is the goal.</li>
                        <li className=""><span className="font-semibold">Cross-functionality is fun!</span> Coming into SEP with almost exclusively a design background and perspective, I found myself fascinated by the different skills and knowledge my cohort members brought to the table. It&apos;s inspired me to branch out and venture into new things (especially devwork!).</li>
                    </ul>
                </div>
            </div>
        </div>
        <p className="flex container mx-auto items-center justify-center font-geist font-semibold text-stone-800 my-2">Thanks for reading ☺</p>
        <Link href="/" className="flex-shrink-0 flex mx-auto items-center justify-center">
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
    </div>
  )
}

export default Orvato