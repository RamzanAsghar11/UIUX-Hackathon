import Link from "next/link";
import Image from "next/image";

const Hero = () => {
  return (
    
   <div className="">

    {/*Main Hero Section*/}
      <div className="h-auto md:h[600px] lg:h-[900px] w-full flex flex-wrap justify-center items-center
       bg-[#FBEBB5] px-5 py-5 md:p-7">
        <div className="flex items-center h-auto md:w-1/2 justify-end">
          <div className="text-left md:px-12 lg:px-1">
            <h1 className="text-[#000000] text-[64px]">
              Rocket single <br/> 
              seater
            </h1>
            <p className="text-[#000000] text-[24px] border-b-[2px] inline  border-[#000000] ">
              <Link href="/Shop">Shop Now</Link>
            </p>
          </div>
        </div>
        <div className="  md:w-1/2 ">
          <Image
            src="/Assets/Image 1.png"
            alt=""
            width={853}
            height={700}
            className="w-[853px] md:h-[700px] object-contain scale-x-[-1]"
          />
        </div>
      </div>


      {/*Middle Section*/}



      <div className="w-full h-auto md:h-[672px] bg-[#FAF4F4] flex flex-col md:flex-row justify-center items-center gap-9 px-5 lg:px-10 xl:px-32">

        <div className="w-full md:w-1/2 h-auto  flex flex-col  ">
          <Image src="/Assets/Image 15.png" alt="Image" width={500}
            height={400} className="w-[500px] h-[400px]" />
          <div className="flex flex-col gap-7">
          <p className="font-medium text-4xl ">Side Table</p>
          <p className="text-[24px] underline underline-offset-[16px]  font-medium ">
                <Link href="/Shop">View more</Link>
              </p>
              </div>
        </div>

        <div className="w-full md:w-1/2 h-auto flex flex-col "> 
          <Image src="/Assets/Image 24.png" alt="Image" width={500}
            height={400} className="w-[500px] h-[400px]" />
          <div className="flex flex-col gap-7 ">
          <p className="font-medium text-4xl ">Side Table</p>
          <p className="text-[24px] underline underline-offset-[16px]  font-medium ">
                <Link href="/Shop">View more</Link>
              </p>
              </div>
        </div>


      </div>
    </div>
         
  
    
  );
};

export default Hero;
