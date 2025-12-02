import React from "react";
import Image from "next/image";
import Link from "next/link";

const Qui_est_le_Dr_Barek = () => {
  return (
    <section className="w-full flex flex-col justify-center items-center h-full text-center py-7 px-3 space-y-5 bg-[#DFECF2]">
      <div className="w-full sm:w-2/3 flex  sm:flex-row justify-between items-center h-[clamp(200px,calc(25vw_+_5vw),750px)]  ">
        <div className="w-1/2 h-full flex flex-col relative justify-center items-center ">
          <div className="w-[clamp(255px,calc(25vw_+_5vw),500px)] relative  flex flex-col justify-center items-center font-Globale ">
            <div
              className="absolute top-[clamp(8px,1vw,2px)] left-10
                                    text-[clamp(11px,1.5vw,24px)] z-10 font-semibold"
            >
              Dr Barek
            </div>

            <Image
              src="/mbarek.png"
              alt="portrait"
              width={700}
              height={300}
              className="w-full h-auto object-cover"
            />
            <div className="-mt-5 text-[clamp(11px,2.5vw,31px)] ">
            <span className="text-8xl">P</span>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex-1 h-full flex flex-col justify-center items-center space-y-4 ">
          <h1 className="text-[clamp(20px,2vw,24px)] font-Globale inline-block ">
          <span className="text-8xl">Q</span>
          </h1>
          <h2 className="text-[clamp(14px,1.5vw,16px)]">
          <span className="text-8xl">R</span>
          </h2>
          <p className="text-[clamp(12px,1vw,14px)] text-center">
          <span className="text-8xl">S</span>
          </p>
        </div>
      </div>
      <div className="p-3 w-full flex flex-col md:flex-row md:w-2/3 gap-3 justify-center items-center ">
        <Link
          href="/dr-barek"
          className="w-full sm:w-2/3 border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl p-3"
        >
           <p className="text-8xl">T</p> 
        </Link>
        <a
          href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
          target="_blank"
          className="w-full sm:w-2/3 border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl p-3 bg-white"
        >
           <p className="text-8xl">U</p>  ⇢
        </a>
      </div>
    </section>
  );
};

export default Qui_est_le_Dr_Barek;
