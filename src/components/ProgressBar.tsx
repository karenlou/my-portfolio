"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [clickedLabel, setClickedLabel] = useState<string | null>(null);

  useEffect(() => {
    // Get all sections on the page
    const sections = document.querySelectorAll<HTMLElement>(".section");

    // Handle scroll event
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Get the middle of the viewport
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (window.scrollY / documentHeight) * 100; // Percentage of the page scrolled

      setScrollProgress(scrollPercentage); // Update scroll progress

      // Check which section is in view and set it as active
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(index); // Set the active section index
        }
      });
    };

    // Add event listener on scroll
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed top-1/2 left-0 transform -translate-y-1/2 animate-settle [--settle-delay:400ms]">
      <div className="relative flex align-middle">
        {/* Gray progress bar with filling color */}
        <div className="w-1 bg-stone-300 h-64 md:h-96 relative">
          {/* Progress fill (blue bar) */}
          <div
            className="left-0 bg-stone-800 transition-all duration-300 ease-in-out"
            style={{
              height: `${scrollProgress}%`, // Set the height of the blue bar dynamically
              top: "0%", // Always start from the top
            }}
          ></div>

          {/* Dynamically calculate the positions for markers */}
          {Array.from({ length: 4 }).map((_, index) => {
            const topPosition = (index / 4) * 100; // Calculate percentage position for each section

            return (
              <div
                key={index}
                className={`absolute left-0 w-2 transition-all duration-300 ease-in-out ${
                  activeSection === index ? "bg-blue-500" : ""
                }`}
                style={{ top: `${topPosition}%` }}
              ></div>
            );
          })}
        </div>
      </div>

      {/* Section Labels on the Side */}
      <div className="absolute top-1/2 transform -translate-y-1/2 flex-col left-5 text-nowrap space-y-4 text-blue-700 font-robotomono lowercase">
        {["At A Glance", "The What & Why", "The How", "The Result"].map((label, index) => (
            <div key={index} className="group relative">
                <Link
                href={`#section-${index}`} // Link to the corresponding section
                className={`text-sm font-extrabold transition-all duration-300 ease-in-out ${
                    activeSection === index ? "text-stone-800" : clickedLabel === label ? "text-stone-800" : "text-blue-700"
                }`}
                onClick = {() => setClickedLabel(label)}
                >
                    <div className="py-5">
                        {/* Default text for all labels */}
                        <span className={`block ${label === "Result" ? "group-hover:opacity-0" : ""}`}>{label}</span>

                        {/* Text to replace only for "Result" label */}
                        {label === "Result" && (
                        <span className="flex items-center text-nowrap absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-100 ease-in-out">
                            Short on time?
                        </span>
                        )}
                    </div>
                </Link>
            </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressBar;
