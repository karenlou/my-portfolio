"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from 'react';

interface ProjectThumbnailProps {
    imageSrc: string;
    title: string;
    role: string;
    ppl: string;
    description: string;
    link: string;
}
const ProjectThumbnail: React.FC<ProjectThumbnailProps> = ({ imageSrc, title, role, ppl, description, link }) => {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);
  
    if (!isClient) return null; // Don't render until client-side
  
    return (
        <div className="max-w-full overflow-hidden rounded-[5px] border-solid border-0 border-stone-300">
                {/* Image with Next.js Image component */}
                <Link href={link}>
                    <div className="flex items-center justify-center bg-stone-200/25 shadow-inner shadow-amber-950/50 rounded-sm p-3">
                        <Image
                            className="w-full h-auto rounded-md object-cover shadow-sm shadow-amber-950/50 hover:shadow-md hover:shadow-amber-950/25 hover:scale-[102%] transition-transform duration-100" 
                            src={imageSrc} 
                            alt={title} 
                            layout="responsive"
                            width={400} // Adjust the width as needed
                            height={250} // Adjust the height as needed
                        />
                    </div>
                </Link>
            <div className="py-4">
                <Link href={link}>
                    {/* Title of the thumbnail */}
                    <h2 className="text-xl md:text-2xl font-semibold text-stone-800 hover:text-stone-700 transition-colors duration-100 font-geist">{title}</h2>
                </Link>
                {/* Role in project */}
                <p className="text-md text-blue-500 mt-2 inline-flex px-2 self-center bg-blue-100 border-solid border-[0.5px] border-blue-500 rounded-md mr-2 font-geist">{role}</p>
                {/* Solo or team */}
                <p className="text-md text-gray-400 mt-2 inline-flex px-2 self-center bg-gray-100 border-solid border-[0.5px] border-gray-400 rounded-md font-geist">{ppl}</p>
                {/* Description of the thumbnail */}
                <p className="text-stone-600 mt-2 font-robotomono">{description}</p>
                {/* Link to the full content */}
            </div>
      </div>
    );
  };

export default ProjectThumbnail