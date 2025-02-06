"use client";

import React from 'react'
import Image from 'next/image';

interface PlayProjectProps {
    imageSrc: string;
    title: string;
    description: string;
}

const PlayProject: React.FC<PlayProjectProps> = ({ imageSrc, title, description }) => {
    const descLineBr = description.split("\n").map((part, index) => (
        <React.Fragment key={index}>
            {part}
            <br />
        </React.Fragment>
    ));
  return (
    <div className="max-w-fit font-geist text-sm text-stone-700 justify-center items-center">
        <div className="flex items-center justify-center bg-stone-200/25 shadow-inner shadow-amber-950/50 rounded-sm p-3">
            <Image
                className="max-w-20 md:max-w-xs object-cover shadow-sm shadow-amber-950/50 "
                src={imageSrc}
                alt={title}
                layout="responsive"
                width={400}
                height={250}
            />
        </div>
        <p className="flex pt-4 pb-16 font-medium">{descLineBr}</p>
    </div>
  )
}

export default PlayProject