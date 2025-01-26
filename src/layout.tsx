import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { JetBrains_Mono } from "next/font/google";
import { Jersey_10 } from "next/font/google";
import { Barlow } from "next/font/google";
import { Oooh_Baby } from "next/font/google";
import { Rubik } from "next/font/google";
import { Oxygen_Mono } from "next/font/google";
import { Geist } from "next/font/google";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const inter = Inter({
  variable: "--font-inter",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  style: ["normal"],
});

const jersey10 = Jersey_10({
  variable: "--font-jersey10",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
});

const ooohbaby = Oooh_Baby({
  variable: "--font-ooohbaby",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
})

const rubik = Rubik({
  variable: "--font-rubik",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
})

const oxygenmono = Oxygen_Mono({
  variable: "--font-oxygenmono",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
})

const geist = Geist({
  variable: "--font-geist",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
})

const robotomono = Roboto_Mono({
  variable:"--font-robotomono",
  weight: ["400"],
  subsets: ["latin"],
  style: ["normal"],
})

export const metadata: Metadata = {
  title: "Karen Lou",
  //description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrains.variable} ${jersey10.variable} ${barlow.variable} ${ooohbaby.variable} ${rubik.variable} ${oxygenmono.variable} ${geist.variable} ${robotomono.variable} scroll-smooth antialiased`}
      >
        <div id="section-0" className="relative h-full">
          <div className="fixed inset-0 bg-stone-50 z-0"></div>
          <div className="fixed inset-0 bg-[url('/Noise.png')] opacity-20 bg-cover bg-center bg-fixed z-0"></div>
            <div className="relative min-h-screen ">
              <div className="animate-appear z-50"><NavBar /></div>
              <div className="relative z-10 pt-10 md:pt-20 px-5 md:px-0 min-h-screen ">{children}</div>
              <Footer />
            </div>
        </div>
      </body>
    </html>
  );
}
