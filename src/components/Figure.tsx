"use client";

import React from 'react'
import Image from 'next/image';

interface FigureProps {
    imageSrc: string;
    title: string;
    figureNum: string;
    description: string;
}
const Figure: React.FC<FigureProps> = ({ imageSrc, title, figureNum, description }) => {
  return (
    <div className="max-w-5xl mx-auto flex-1 px-5 md:px-10 flex-col my-14 border-none">
        <Image
            className="shadow-none mb-4"
            src={ imageSrc }
            alt={ title}
            layout="responsive"
            width={400} // Adjust the width as needed
            height={250} // Adjust the height as needed
        />
        <div className="flex items-baseline gap-4">
            <h2 className="flex-shrink-0 border-solid border-[0.5px] border-yellow-900 bg-yellow-400 rounded-md inline-flex px-2 mb-2 text-yellow-900 font-geist">{ figureNum }</h2>          
            <p className="font-robotomono text-stone-400 text-sm">{ description }</p>      
        </div>    
    </div>
  )
}

export default Figure