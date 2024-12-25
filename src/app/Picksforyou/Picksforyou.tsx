import Link from "next/link";
import Image from "next/image";
import Asgaarsofs from "./page";



interface TopPicksProps {
  title?: string;
  showDescription?: boolean;
}


function Picksforyou({ title = 'Top Picks For You', showDescription = true }: TopPicksProps) {
  return (
    <>
      <div className="h-[777] text-black">

        {/*Content*/}
        <div>
          <p className="text-[36px] text-center py-[30px]">{title}</p>
             {/* Conditional Description */}
        {showDescription && (
          <p className="text-[16px] text-[#9F9F9F] text-center py-[6px]">
            Find a bright ideal to suit your taste with our great selection of
            suspension, floor and table lights.
          </p>
        )}
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

        <p className="text-[24px] underline underline-offset-[16px] text-center font-medium md:py-16">
                <Link href="/Shop">View more</Link>
              </p>
       
      </div>

     
    </>
  );
}

export default Picksforyou;
