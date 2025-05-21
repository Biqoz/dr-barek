import Link from "next/link";
import React from "react";

const Nos_Tarifs = () => {
  return (
    <section className=" flex flex-col gap-3 text-center text-sm md:text-xl p-3">
      <h1 className="text-5xl flex justify-center items-center p-7 font-Globale">
        Tarifs{" "}
      </h1>
      <div className="flex gap-3 justify-center items-center ">
        <Link
          href="/tarifs/cmu"
          className="w-[clamp(105px,calc(15vw_+_5vw),300px)] min-h-[4rem] hover:bg-transparent  h-[8.5vw] bg-white flex justify-center items-center border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl p-3 >
          "
        >
          CMU{" "}
        </Link>
        <Link
          href="/tarifs/facilite-de-paiement"
          className="w-[clamp(105px,calc(15vw_+_5vw),300px)] min-h-[4rem] hover:bg-transparent  h-[8.5vw] bg-white flex justify-center items-center border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl p-3 >
          "
        >
          Facilité de Paiement{" "}
        </Link>

        <Link
          href="/tarifs/reste-a-charge-zero"
          className="w-[clamp(105px,calc(15vw_+_5vw),300px)] min-h-[4rem] hover:bg-transparent  h-[8.5vw] bg-white flex justify-center items-center border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl p-3 >
          "
        >
          Reste À Charge Zéro{" "}
        </Link>
      </div>

      <div className="flex  gap-3 justify-center items-center pb-7">
        <Link
          href="/tarifs/tarifs-generaux"
          className="w-[clamp(105px,calc(15vw_+_5vw),300px)] min-h-[4rem] hover:bg-transparent  h-[8.5vw] bg-white flex justify-center items-center border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl p-3 >
          "
        >
          Tarifs Généraux
        </Link>

        <Link
          href="/tarifs/tiers-payant"
          className="w-[clamp(105px,calc(15vw_+_5vw),300px)] min-h-[4rem] hover:bg-transparent  h-[8.5vw] bg-white flex justify-center items-center border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl p-3 >
          "
        >
          Tiers Payant
        </Link>
      </div>
    </section>
  );
};

export default Nos_Tarifs;
