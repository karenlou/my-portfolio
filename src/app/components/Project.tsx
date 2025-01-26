"use client";

import Image from 'next/image'

interface ProjectProps {
    imageSrc: string;
    title: string;
    role: string;
    ppl: string;
    description: string;
    scope: string[];
    team: string[];
    tools: string[];
}

const Project: React.FC<ProjectProps> = ({ imageSrc, title, role, ppl, description, scope, team, tools }) => {
  return (
    <div className="section scroll-mt-20 pb-10 md:pb-24 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="max-w-full overflow-hidden rounded-[5px] border-solid border-0 border-stone-300 font-oxygenmono animate-settle [--settle-delay:150ms] container mx-auto">
            <div className="flex items-center justify-center shadow-inner shadow-amber-950/50 rounded-sm">
                <Image className="w-full h-auto m-5 rounded-md object-cover shadow-sm shadow-amber-950/50" 
                    src={imageSrc}
                    alt={title}
                    layout="responsive"
                    width={400} // Adjust the width as needed
                    height={250} // Adjust the height as needed
                />
            </div>
        </div>
        <div className="md:span-cols-1 justify-start animate-settle [--settle-delay:300ms]">
            <h1 className="text-3xl md:text-7xl font-semibold text-stone-900 font-geist mb-3">{title}</h1>
            <p className="md:my-2 font-geist text-blue-500 inline-flex px-2 self-center bg-blue-100 border-solid border-[0.5px] border-blue-500 rounded-md mr-2 text-lg">{role}</p>
            <p className="md:my-2 font-geist font-medium text-gray-400 inline-flex px-2 self-center bg-gray-100 border-solid border-[0.5px] border-gray-400 rounded-md text-lg">{ppl}</p>
            <p className="text-stone-700 my-5 font-robotomono text-lg">{description}</p>
            <div className="flex mt-5 gap-5 md:gap-0 divide-x-[1px] divide-stone-300">
                <div className="flex-1 text-stone-700 py-2 border-solid">
                    <h2 className="border-solid border-[0.5px] border-yellow-900 bg-yellow-400 rounded-md inline-flex px-2 mb-2 text-yellow-900 font-geist">Scope</h2>
                    <ul className="text-sm md:text-base font-medium font-robotomono">
                        {scope.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 text-stone-700 py-2 px-5">
                    <h2 className="border-solid border-[0.5px] border-yellow-900 bg-yellow-400 rounded-md inline-flex px-2 mb-2 text-yellow-900 font-geist">Team</h2>
                    <ul className="text-sm md:text-base font-medium font-robotomono">
                        {team.map((item, index) => (
                                <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex-1 text-stone-700 py-2 pl-7">
                    <h2 className="border-solid border-[0.5px] border-yellow-900 bg-yellow-400 rounded-md inline-flex px-2 mb-2 text-yellow-900 font-geist">Tools</h2>
                    <ul className="text-sm md:text-base font-medium font-robotomono">
                        {tools.map((item, index) => (
                                <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Project