import { LuClock4 } from "react-icons/lu";
import { AiTwotoneCalendar } from "react-icons/ai";
import Link from "next/link";
import Image from "next/image";

function OurBlogs() {
  return (
    <>
      <div className="my-[20px] w-full">
        <p className="text-center text-[36px] mt-[20px]">Our Blogs</p>
        <p className="text-center text-[#9F9F9F] text-[16px] my-[20px]">
          Find a bright ideal to suit your taste with our great selection
        </p>

        {/*Blogs images*/}

        <div className=" w-full h-auto flex flex-wrap px-4 md:px-10 justify-center gap-[20px]">
          <div className="w-[393px] h-auto md:h-[555px]">
            <Image src="/Assets/Image 9.jpg" alt=""  width={393}
                  height={555} />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <p className="text-[24px] underline underline-offset-[16px] text-center font-medium py-[10px]">
              <Link href="/Blogs" >Read More</Link>
              </p>
            </div>
            <div className="flex gap-[20px]  justify-center">
              <div className="flex gap-[7px] items-center">
                <LuClock4 className="text-2xl" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px] items-center">
                <AiTwotoneCalendar className="text-2xl" />
                <p className="text-base">
                  12<span className="align-super text-xs">th</span> Oct 2022
                </p>
              </div>
            </div>
          </div>
          <div className="w-[393px] h-auto md:h-[555px]">
            <Image src="/Assets/Image 10.jpg" alt=""  width={393}
                  height={555} />
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <p className="text-[24px] underline underline-offset-[16px] text-center font-medium py-[10px]">
                <Link href="/Blogs" >Read More</Link>
              </p>
            </div>
            <div className="flex gap-[20px]  justify-center">
              <div className="flex gap-[7px] items-center">
                <LuClock4 className="text-2xl" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px] items-center">
                <AiTwotoneCalendar className="text-2xl" />
                <p className="text-base">
                  12<span className="align-super text-xs">th</span> Oct 2022
                </p>
              </div>
            </div>
          </div>
          <div className="w-[393px] h-auto md:h-[555px]">
            <Image src="/Assets/Image 11.jpg" alt=""  width={393}
                  height={555}/>
            <div className="py-[20px]">
              <p className="text-[20px] py-[10px] text-center">
                Going all-in with millennial design
              </p>
              <p className="text-[24px] underline underline-offset-[16px] text-center font-medium py-[10px]">
              <Link href="/Blogs" >Read More</Link>
              </p>
            </div>
            <div className="flex gap-[20px]  justify-center">
              <div className="flex gap-[7px] items-center">
                <LuClock4 className="text-2xl" />
                <p>5 min </p>
              </div>
              <div className="flex gap-[7px] items-center">
                <AiTwotoneCalendar className="text-2xl" />
                <p className="text-base">
                  12<span className="align-super text-xs">th</span> Oct 2022
                </p>
              </div>
            </div>
          </div>
        </div>

        {/*view more link*/}
        <p className="text-center py-[40px] underline underline-offset-[16px] text-[20px]">
        <Link href="/Blogs" >View all post</Link>
        </p>
      </div>
    </>
  );
}

export default OurBlogs;
