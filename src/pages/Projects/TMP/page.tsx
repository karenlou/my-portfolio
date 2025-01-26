import React from 'react'
import Image from "next/image"
import Link from 'next/link';
import Project from '@/components/Project'
import Path from '@/components/Path'
import Figure from '@/components/Figure'
import ProgressBar from '@/components/ProgressBar';

const TMP = () => {
  return (
    <div className="font-robotomono min-h-screen mx-auto text-stone-800 flex-row mb-20">
        <div className="flex-auto invisible lg:visible"><ProgressBar /></div>
        <div className="flex-auto lg:ml-40">
            <Project
            imageSrc="/TMP.png" 
            title="Trojan Marketplace"
            role="UI/UX Design"
            ppl="👥"
            description="Created for student entrepreneurship club SparkSC. Complete redesign and buildout of website for Spark's Trojan Marketplace, an annual student-run event at USC. Thank you to Ben, Aaron, Assem, and Jac 🫶"
            scope={['10 weeks', 'Sept 2024 → Nov 2024']}
            team={['Ben Y. [PM]', 'Aaron L. [Designer]', 'Assem S. [Designer]']}
            tools={['Figma', 'Webflow']}
            />
        </div>
        <p className="flex items-center justify-center w-7 h-7 md:w-10 md:h-10 mx-auto font-geist border-solid border-[1px] border-stone-800 rounded-full text-xl md:text-4xl animate-bounce">↓</p>
        <div className="flex-auto lg:ml-40">
            <div id="section-1" className="container py-24 md:px-16 mx-auto">
                <h1 className="section inline-flex px-2 text-stone-200 border-solid border-[0.5px] border-stone-200 rounded-md bg-stone-800 font-geist text-lg mb-7">The Challenge</h1>
                <div className="flex mx-auto md:gap-20 justify-between">
                    <p className="max-w-full text-3xl font-semibold text-stone-800 pb-4">Deliver and embody TMP&apos;s bold, playful branding in a new way.</p>
                    <p className="max-w-full text-stone-500 mb-7 border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 content-center text-base">Bring a refreshed and up-to-date look, page structure, and information to the previously designed Trojan Marketplace website.</p>
                </div>
                <Path />
                <h1 className="inline-flex px-2 text-stone-800 border-solid border-[0.5px] border-stone-800 rounded-md font-geist text-lg mb-7">🔑 Objectives</h1>
                <div className="flex mx-auto md:gap-20 justify-between">
                    <p className="max-w-full text-3xl font-semibold text-stone-800 pb-4">Publish complete redesign within 10 weeks.</p>
                    <div className="flex-col">
                        <ul className="max-w-full text-stone-500 mb-7 border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 content-center text-base list-disc list-inside">
                            <li>Refresh website branding</li>
                            <li className="leading-normal">Communicate info on how to <span className="font-semibold">get involved with TMP</span>, what <span className="font-semibold">Spark&apos;s mission is</span>, and <span className="font-semibold">USC&apos;s community of entrepreneurs</span></li>
                            <li>Update information for the vendors</li>
                            <li className="leading-normal">Design a intuitive way for entrepreneurs to contact each other, and for customers to find the vendors after the event</li>
                        </ul>
                        <p className="px-4 py-4 mb-7 inline-flex rounded-md object-cover shadow-sm shadow-pink-950/50 bg-pink-200/40">💭 Designing for the USC entrepreneurs/vendors, customers, and potential investors</p>
                    </div>
                </div>
                <div className="justify-center mt-7 mb-10">
                    <h1 className="font-geist text-stone-800 text-xl font-semibold h-5">Deliverables</h1>
                    <p className="font-geist text-stone-600 text-lg">Responsive Design <span className="md:my-2 font-geist text-blue-500 inline-flex px-2 self-center bg-blue-100 border-solid border-[0.5px] border-blue-500 rounded-md text-base mx-2">💻 and 📱</span></p>
                    <div className="grid grid-rows-4 grid-cols-3 my-5 place-content-start bg-white/40">
                        <div className="col-span-1 border-solid border-l-[0.5px] border-t-[0.5px] border-stone-500 px-2 py-2 rounded-tl-sm text-lg">Homepage</div>
                        <div className="col-span-2 border-solid  border-l-[0.5px] border-t-[0.5px] border-r-[0.5px] border-stone-500 px-2 py-2 rounded-tr-sm text-stone-600">
                            <ul>
                                <li>What is TMP?</li>
                                <li>Call to Action</li>
                            </ul>
                        </div>
                        <div className="col-span-1 border-solid border-l-[3px] border-t-[3px] border-b-[3px] border-stone-700 px-2 py-2 text-lg font-semibold">Vendors Page</div>
                        <div className="col-span-2 border-solid  border-[3px] border-stone-700 px-2 py-2 text-stone-600 font-semibold">
                            <ul>
                                <li>Vendor Application</li>
                                <li>Vendor Directory (e.g. Desc., Category)</li>
                                <li>Archive of Past Vendors</li>
                            </ul>
                        </div>
                        <div className="col-span-1 border-solid  border-l-[0.5px] border-b-[0.5px] border-stone-500 px-2 pt-2 text-lg">About TMP/SparkSC Page</div>
                        <div className="col-span-2 border-solid  border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-stone-500 px-2 py-2 text-stone-600">
                            <ul>
                                <li>How We Started</li>
                                <li>Our Team</li>
                            </ul>
                        </div>
                        <div className="col-span-1 border-solid  border-l-[0.5px] border-b-[0.5px] border-stone-500 px-2 py-2 rounded-bl-sm text-lg">Community Page</div>
                        <div className="col-span-2 border-solid border-l-[0.5px] border-b-[0.5px] border-r-[0.5px] border-stone-500 px-2 py-2 rounded-br-sm text-stone-600">How to get involved with the TMP community</div>
                    </div>
                </div>
                <div id="section-2">
                    <h1 className="section inline-flex px-2 text-indigo-900 border-solid border-[0.5px] border-indigo-900 bg-indigo-200 rounded-md font-geist text-lg mt-14">The Process</h1>
                    <p className="text-3xl font-semibold mt-7">🏁 Starting Out</p>
                    <p className="text-stone-500 text-base my-4">Understanding TMP&apos;s brand and context, fleshing out site structure</p>
                    <Figure
                    imageSrc="/TMPMoodboard.png"               
                    title="TMP Moodboard"
                    figureNum="Fig. 1"
                    description="Collaborative moodboard created around TMP's current branding. Emphasis on organic shapes, bright colors, and simplicity."
                    />
                    <Figure 
                    imageSrc="/TMPSitemap.png"             
                    title="TMP Sitemap"
                    figureNum="Fig. 2"
                    description="Simple sitemap to lay out user flow and content."
                    />
                    <p className="text-3xl font-semibold mt-24">✍️ Designing</p>
                    <p className="text-stone-500 text-base my-4">Moving from low to high fidelity wireframes, playing with layout and brand cohesion on Figma.</p>
                    <div className="relative flex-col md:flex mx-auto justify-center">
                        <Figure
                        imageSrc="/TMPVendorsLowfi.png"                 
                        title="TMP Vendors Page Low-fi Wireframe"
                        figureNum="Fig. 3"
                        description="Low-fidelity wireframe establishing card structure. Playing with how to categorize the vendors."
                        />
                        <Figure 
                        imageSrc="/TMPVendorsMidfi.png"               
                        title="TMP Vendors Page Mid-fi Wireframe"
                        figureNum="Fig. 4"
                        description="Mid-fidelity wireframe with improved categorization structure and card design."
                        />
                        <Figure 
                        imageSrc="/TMPVendorsHifi.png"
                        title="TMP Vendors Page Hi-fi Wireframe"
                        figureNum="Fig. 5"
                        description={`High-fidelity wireframe incoporating TMP's branding. Changed card design to link to vendor's website/social media directly to simplify user flow.`}
                        />
                    </div>
                </div>
                <p id="section-3" className="section text-3xl font-semibold pt-16">👩‍💻 Building</p>
                <p className="text-stone-500 text-base my-4">Moving to Webflow to translate the design!</p>
                <div className="flex justify-end">
                    <ul className="px-4 py-4 my-4 inline-block rounded-md object-cover shadow-sm shadow-pink-950/50 bg-pink-200/40">
                        <li>💭 Emphasis on responsive design, as many students may visit the site through Instagram on mobile.</li>
                        <li>💭 Cohesion with teammates&apos; pages.</li>
                    </ul>
                </div>
                <div className="max-w-5xl mx-auto flex-1 px-5 md:px-10 flex-col mt-14 mb-7 border-none">
                    <div className="relative group">
                        <Image
                            className="shadow-none mb-4 transition-opacity duration-300 ease-in-out"
                            src="/TMPVendorsUI.png"
                            alt="TMP Vendors Page UI"
                            layout="responsive"
                            width={400}
                            height={250}
                        />
                        <Link href="https://www.trojanmarketplace.com/">
                            <Image
                                    className="absolute top-0 left-0 shadow-none mb-4 transition-opacity duration-300 ease-in-out opacity-0 group-hover:opacity-100"
                                    src="/TMPVendorsUIHover.png"
                                    alt="Visit TMP Vendors Page"
                                    layout="responsive"
                                    width={400}
                                    height={250}
                                />
                        </Link>
                    </div>
                    <div className="flex items-baseline gap-4">
                        <h2 className="flex-shrink-0 border-solid border-[0.5px] border-yellow-900 bg-yellow-400 rounded-md inline-flex px-2 mb-2 text-yellow-900 font-geist">Fig. 6</h2>          
                        <p className="font-robotomono text-stone-400 text-sm">Completed UI in desktop view.</p>      
                    </div>    
                </div>
                <h1 className="inline-flex px-2 text-emerald-950 border-solid border-[0.5px] border-emerald-950 bg-emerald-200/40 rounded-md font-geist text-lg mt-20">My Takeaways</h1>
                <p className="text-3xl font-semibold my-7">Some things I&apos;ve learned....</p>
                <div className="flex justify-end mb-14">
                    <ul className="inline-block border-dashed border-[1px] border-stone-400 rounded-md px-4 py-4 text-stone-500 text-base my-4 md:mx-14 list-decimal list-inside justify-end space-y-5">
                        <li className=""><span className="font-semibold">The importance of planning.</span> Coming from a traditional visual arts background, I am used to diving in headfirst and making design choices as I go. While working on this, however, I found that analyzing existing projects from the client and creating a &quot;moodboard&quot; in preparation helped reduce the complexity of designing a site.</li>
                        <li className=""><span className="font-semibold">Design with intention.</span> This is my first project building out my own designs. I learned how to keep my UI visually appealing and effective while being mindful of the limitations of the CMS.</li>
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
        {/*
        <div className="mx-screen bg-stone-950/90">
            <div className="mx-5 md:mx-24 justify-start py-0 md:py-20 animate-settle [--settle-delay:200ms]">
                <h1 className="inline-block px-2 text-lg md:text-xl font-medium font-geist text-stone-600">The Challenge</h1>
                <div className="pl-2 pt-3">
                    <div className="border-solid border-stone-400 border-l-2">
                        <p className="pl-5 pt-5 py-7">Expand audience reach and spark interest in and engagement with TMP.</p>
                    </div>
                </div>
            </div>
            <div className="mx-5 md:mx-24 my-0 md:my-14 animate-settle [--settle-delay:200ms]">
                <h1 className="inline-block px-2 text-lg md:text-xl font-medium font-geist text-stone-600 ml-auto">The Goal</h1>
                <div className="pl-2 pt-3">
                    <div className="border-solid border-stone-400 border-l-2">
                        <ul className="pl-5 pt-5 py-7 leading-10">
                            <li>Refresh website branding.</li>
                            <li>Deliver accurate + accessible information about how to get involved, vendor details, sponsors, and SparkSC's mission.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        */}
    </div>
  )
}

export default TMP