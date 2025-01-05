import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Picksforyou from './Picksforyou';









function Toppicks() {
  return (
    <>

    <Picksforyou/>
     
      {/*Sofa Image*/}

      <div className=" h-auto lg:h-[669px] w-full flex flex-wrap bg-[#FFF9E5] items-center lg:justify-start xl:justify-center justify-center gap-6 py-8 my-12">
            <div className="flex justify-center items-start">
            <Image src="/Assets/Image 8.png" alt=""  width={600}
                  height={450} className="xl:w-[983px] md:w-[600px] md:h-[450px] xl:h-[700px]"/>
            </div>

            {/*Content*/}

          <div className="text-center flex flex-col items-center lg:px-7 space-y-9">
            <p className="font-medium text-2xl ">New Arrivals</p>
            <p className="font-bold text-5xl ">Asgaard sofa</p>
            <div className="w-[255px] h-[64px] font-normal border border-black flex items-center justify-center " >
            <button className=" "><Link href="/Singleproduct" >Order Now</Link></button>
            </div>
          </div>

      </div>

     
    </>
  );
}
export default Toppicks;

