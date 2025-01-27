import React from 'react'
import PlayProject from '@/app/components/PlayProject'

const Play = () => {
  return (
    <div className="container mx-auto min-h-screen flex justify-center items-center">
        <div className="flex-col justify-center ">
            <h1 className="font-robotomono text-sm inline-flex align-text-bottom text-stone-500 border-solid border-[1px] border-stone-400 rounded-md px-2 mb-14 uppercase  animate-settle [--settle-delay:100ms]">An archive of things I do on the side 🫀</h1>
            <div className="grid grid-cols-3 gap-x-14 ">
                <div className="flex-col animate-settle [--settle-delay:200ms]">
                    <PlayProject 
                    imageSrc="/CharcoalPortrait.JPG"
                    title="Untitled 2022"
                    description={`December 2022\n18x24 in\nCharcoal on paper`}
                    />
                    <PlayProject 
                    imageSrc="/BanhMiFundraiserGraphic.PNG"
                    title="Banh Mi Fundraiser Graphic"
                    description={`January 2022\nGraphics`}
                    />
                </div>
                <div className="flex-col animate-settle [--settle-delay:250ms]">
                    <PlayProject 
                    imageSrc="/Cubed2.png"
                    title="Cubed Sculpture 2d"
                    description={`December 2024\nSculpture\nCubed 2d`}
                    />
                    <PlayProject 
                    imageSrc="/Cubed.png"
                    title="Cubed Sculpture"
                    description={`December 2024\nSculpture\nCubed 3d`}
                    />
                    <PlayProject 
                    imageSrc="/Warriors.PNG"
                    title="Warriors x Warriors Graphic"
                    description={`November 2023\nGraphics`}
                    />
                </div>
                <div className="flex-col animate-settle [--settle-delay:300ms]">
                    <PlayProject 
                    imageSrc="/SelfPortrait.jpg"
                    title="Self Portrait"
                    description={`July 2023\n11x13 in\nGouache, watercolor, acrylic on multimedia paper`}
                    />
                    <PlayProject 
                    imageSrc="/Cabo.JPG"
                    title="Cabo Sunset"
                    description={`December 2024\nIn Cabo`}
                    />
                    <PlayProject 
                    imageSrc="/MCWeek2024.png"
                    title="MC Week Graphic 2024"
                    description={`January 2024\nGraphics`}
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Play