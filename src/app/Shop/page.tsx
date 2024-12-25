
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { PiCirclesFourFill } from "react-icons/pi";
import Delivery from "../Components/Delivery";
import Image from "next/image";
import Allpagesmainsection from "../Components/Allpagesmainsection";




const Shop = () => {
  return (
    <div className="w-full">
      

      {/* Shop Main page */}
      <Allpagesmainsection logo="Shop" logoDescription="Shop"/>

   {/* filter and results */}
<div className=" w-full flex flex-col md:flex-row flex-wrap gap-2 md:justify-between items-center px-4 py-2 md:px-20 h-auto md:h-[100px] bg-[#FAF4F4]">

  <div className="flex  gap-2 md:gap-5 items-center  font-normal md:text-[20px]"> 
  <Image src="/Assets/Vector.png" alt=""  width={19} height={17}  className="w-[19px] h-[17px]" />
    <p>Filters</p>
    <span><PiCirclesFourFill /></span>
    <Image src="/Assets/filter.png" alt=""  width={21} height={20} className="w-[21px] h-[20px]" />
    <div className="border-l-2 h-8 border-gray-500 mx-4"></div>
    <p>Showing 1–16 of 32 results</p>
  </div>

  <div className="flex gap-2 md:gap-6 items-center ">
    <p>Show</p>
    <input type="text" placeholder="16"  className="w-9 md:w-[55px] px-2 py-3 md:h-[55px] h-7 text-center"/>
    <p>Sort by</p>
    <input type="text" placeholder="Default"  className=" w-28 md:w-[188px] md:h-[55px] h-7 px-2 py-3"/>

  </div>
</div>

{/* All products */}

<div className="flex flex-wrap justify-center items-center bg-[#ffffff] px-6 xl:px-10 gap-[50px] mb-10 md:mb-20">
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 4.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 5.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 6.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 7.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>

          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 14.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 15.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 16.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 17.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
         
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 18.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 19.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 20.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 21.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
         
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 22.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 23.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 24.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>
          
          <div className="w-[287px] h-[372]">
            <Image src="/Assets/Image 25.png" alt=""  width={287} height={287} className="w-[287px] h-[287px] mb-8" />
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
          </div>

          {/*Buttons*/}

          <div className="h-[60px] w-full flex justify-center gap-8 mt-6 items-center ">
            <div className="w-[60px] h-[60px] bg-[#FBEBB5] flex items-center justify-center ">1</div>
            <div className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">2</div>
            <div className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">3</div>
            <div className="w-[60px] h-[60px] bg-[#FFF9E5] flex items-center justify-center">Next</div>

          </div>
         
        </div>
        
        {/* Details */}

        <div>
          <Delivery/>
        </div>


     




      </div>
      
    

    
  )
}

export default Shop
