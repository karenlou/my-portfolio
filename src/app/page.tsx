import Image from "next/image";
import AlternatingText from "./components/AlternatingText";
import ProjectThumbnail from "./components/ProjectThumbnail";

export default function Home() {
  return (
    <main className="grid gap-20 grid-col-1 grid-rows-11 md:grid-cols-4 min-h-screen pt-[100px] md:pt-20 container mx-auto">
      <div className="relative col-span-1 animate-settle [--settle-delay:100ms]">
        <div className="md:fixed"><AlternatingText /></div>
      </div>
      <div className="relative row-span-10 md:col-span-3">
        <div className="md:flex md:justify-between md:items-center mb-4 gap-10 animate-settle [--settle-delay:100ms]">
          <div className="font-robotomono text-sm align-text-bottom text-stone-500 border-solid border-[1px] border-stone-400 rounded-md px-2 uppercase">What I&apos;ve been working on 👇</div>
          <div className="align-text-bottom text-sm text-right justify-self-start text-stone-500/70"><span className="text-sm text-stone-500">🛠️ This site is still a work in progress!</span> Last updated Jan 27 2025.</div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 pt-3">
          <div className="animate-settle [--settle-delay:150ms]">
            {/* TMP */}
            <ProjectThumbnail
            imageSrc="/TMP.png" 
            title="Trojan Marketplace"
            role="UI/UX Design"
            ppl="👥"
            description="Complete redesign and buildout of website for Trojan Marketplace, an annual student-run event at USC." 
            link="/pages/Projects/TMP"
            />
          </div>
          <div className="animate-settle [--settle-delay:300ms]">
            {/* Orvato */}
            <ProjectThumbnail 
            imageSrc="/Orvato.png" 
            title="Orvato"
            role="UI Design, Branding, UX"
            ppl="👥"
            description="A property management tool for real estate developers, designed to minimize redundancy and inefficient communication with prospective buyers." 
            link="/pages/Projects/Orvato"
            />
          </div>
          <div className="animate-settle [--settle-delay:450ms]">
            {/* Dishful */}
            <div className="max-w-full overflow-hidden rounded-[5px] border-solid border-0 border-stone-300">
                {/* Image with Next.js Image component */}
                <div className="flex items-center justify-center bg-stone-200/25 shadow-inner shadow-amber-950/50 rounded-sm">
                    <Image
                        className="w-full h-auto m-3 rounded-md object-cover shadow-sm shadow-amber-950/50 " 
                        src="/Dishful.png" 
                        alt="Dishful" 
                        layout="responsive"
                        width={400} // Adjust the width as needed
                        height={250} // Adjust the height as needed
                    />
                </div>
                <div className="py-4">
                    {/* Title of the thumbnail */}
                    <h2 className="text-xl md:text-2xl font-semibold text-stone-800 hover:text-stone-700 transition-colors duration-100 font-geist">Dishful<span className="text-sm text-orange-400 mx-2 inline-flex px-2 self-center bg-orange-100 border-solid border-[0.5px] border-orange-400 rounded-md font-geist align-middle">Case Study Coming Soon</span></h2>
                    {/* Role in project */}
                    <p className="text-md text-blue-500 mt-2 inline-flex px-2 self-center bg-blue-100 border-solid border-[0.5px] border-blue-500 rounded-md mr-2 font-geist">UI/UX Design, Branding</p>
                    {/* Solo or team */}
                    <p className="text-md text-gray-400 mt-2 inline-flex px-2 self-center bg-gray-100 border-solid border-[0.5px] border-gray-400 rounded-md font-geist">👤</p>
                    {/* Description of the thumbnail */}
                    <p className="text-stone-600 mt-2 font-robotomono">A social platform for people to share their favorite recipes——and find ones based on what they already have in their kitchen.</p>
                    {/* Link to the full content */}
                </div>
            </div>
          </div>
          <div className="animate-settle [--settle-delay:450ms]">
            <div className="max-w-full flex overflow-hidden rounded-[5px] border-solid border-0 border-stone-300 items-center justify-center text-center align-middle font-geist font-semibold text-lg h-[350px] text-stone-800">
                Stay tuned!<br />More on the way 👀
            </div>
          </div>
          {/*
          <div className="animate-settle [--settle-delay:600ms]">
            <ProjectThumbnail 
            imageSrc="/Cubed.png" 
            title="Cubed"
            role="Art"
            ppl="👤" 
            description='8"x 8". Sculpture exercise with each side meant to represent an aspect of my identity: personality, interests, life experiences, social network, goals, and vision.' 
            link="/pages/Projects/Cubed/"
            />
          </div>
          <div className="animate-settle [--settle-delay:750ms]">
            <ProjectThumbnail 
            imageSrc="/ECOuture.png" 
            title="ECOuture"
            role="Branding, Market Research"
            ppl="👥" 
            description="Full presentation of key business materials for ECOuture, a textile manufacturing business focused on repurposing overlooked materials to promote accessible sustainability." 
            link="/pages/Projects/ECOuture/"
            />
          </div>
          */}
        </div>
      </div>
    </main>
  );
}
