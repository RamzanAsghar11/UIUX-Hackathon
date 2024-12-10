import Link from "next/link";
import Image from "next/image";

function TopPicks() {
  return (
    <>
      <div className="h-[777] text-black">

        {/*Content*/}
        <div>
          <p className="text-[36px] text-center py-[30px]">Top Picks For You</p>
          <p className="text-[16px] text-[#9F9F9F] text-center py-[6px]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        </div>

        {/*Images*/}

        <div className="flex flex-wrap justify-center items-start bg-[#ffffff] gap-[40px]">
          <div className="w-[287px] flex flex-col items-center ">
            <Image src="/Assets/Image 4.png" alt=""  width={287}
                  height={287} className="w-[287px] h-[287px] mb-8 object-cover" />
            <div className="pr-12 space-y-4">
            <p className="text-[16px]">Trenton modular sofa_3</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="w-[287px] flex flex-col items-center ">
            <Image src="/Assets/Image 5.png" alt=""  width={287}
                  height={287} className="w-[287px] h-[287px] mb-8 " />
            <div className="pr-12 space-y-4">
            <p className="text-[16px]">Granite dining table with dining chair</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
            </div>
          </div>
          <div className="w-[287px] flex flex-col items-center ">
            <Image src="/Assets/Image 6.png" alt=""  width={287}
                  height={287} className="w-[287px] h-[287px] mb-8" />
            <div className="pr-12 space-y-4">
            <p className="text-[16px]">Outdoor bar table and stool</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
            </div>
          </div>
          
          <div className="w-[287px] flex flex-col items-center ">
            <Image src="/Assets/Image 7.png" alt=""  width={287}
                  height={287} className="w-[287px] h-[287px] mb-8" />
            <div className="pr-12 space-y-4">
            <p className="text-[16px]">Plain console with teak mirror</p>
            <p className="font-bold text-[24px]">Rs. 25,000.00</p>
            </div>
          </div>
         
        </div>

        {/*view more link*/}

        <p className="text-[24px] underline underline-offset-[16px] text-center font-medium py-[10px]">
                <Link href="/Shop">View more</Link>
              </p>
       
      </div>

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
            <button className=" ">Order Now</button>
            </div>
          </div>

      </div>
    </>
  );
}

export default TopPicks;
