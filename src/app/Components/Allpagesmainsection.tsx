import React from 'react'
import Image from 'next/image'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


interface LogoProps {
    logo?: string;
    logoDescription?: string;
  }

const Allpagesmainsection: React.FC<LogoProps> = ({logo= "Shop", logoDescription = "Shop" } ) => {
  return (
    <div>
       {/* Shop Main page */}
       <div className="relative w-full h-[316px] mb-14">
        <div className="absolute inset-0 bg-[url('/Assets/Image_13.jpg')] bg-cover bg-center opacity-50"></div>
        {/* Content on Top */}
        <div className="relative w-full h-full flex flex-col justify-center items-center">
          <Image
            src="/Assets/Shop_logo.png"
            width={77}
            height={77}
            alt="shop logo"
            className="w-[77px] h-[77px]"
          />
        <p className="font-medium text-[48px] leading-[72px]">{logo}</p>
          <div className="flex items-center justify-center space-x-2">
            <p className="font-medium">Home</p>
            <MdOutlineKeyboardArrowRight className="text-xl" />

            <p>{logoDescription}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Allpagesmainsection
