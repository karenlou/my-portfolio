"use client";

import { useEffect, useState } from 'react';

const AlternatingText: React.FC = () => {
  const [currentRole, setCurrentRole] = useState<string>('');
  const [currentFont, setCurrentFont] = useState<string>(''); // Track the Tailwind class for font


  const roles = [" student ", " designer ", " artist ", " developer ", " entrepreneur "];
  const fonts = [
    "font-rubik",
    "font-jersey10",
    "font-ooohbaby",
    "font-jetbrains",
    "font-barlow",
  ];
  let currentIndex = 0;

  const AlternatingText = () => {
    // Update the current roles from the roles array
    setCurrentRole(roles[currentIndex]);
    setCurrentFont(fonts[currentIndex]);

    // Update index to cycle through the array
    currentIndex = (currentIndex + 1) % roles.length;
  };

  useEffect(() => {
    // Set an interval to cycle through the roles array every 500ms
    const intervalId = setInterval(AlternatingText, 500);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex-start flex-col md:w-20 md:pr-10 h-28 md:h-auto">
      <h1 className="text-2xl lg:text-3xl font-medium font-geist text-stone-900 mb-2 md:block text-left whitespace-nowrap">
        Hi! 👋 </h1>
        <p className=" text-3xl lg:text-5xl font-medium font-geist text-stone-900 text-left h-24 md:h-auto">
          <span className="font-semibold">I&apos;m Karen,</span> a(n)
          <span className={`
            currentFont ${currentFont} text-blue-700 mb-0 md:inline-block leading-[17px]`}>
            {currentRole}
          </span>
            striving to build, learn, and create.
        </p>
      <h1 className="text-lg lg:text-xl font-medium font-geist text-stone-600 my-5 md:my-7 md:block text-left whitespace-nowrap ">Welcome to my 🌎.</h1>
    </div>
  );
};

export default AlternatingText;