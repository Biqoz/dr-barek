import React from "react";
import Image from "next/image";

const Avis = () => {
  return (
    <section className="flex flex-col w-full justify-center items-center p-7 overflow-x-hidden">
      <h2 className="text-5xl p-3 font-Globale mb-4">Satisfaction</h2>

      <div className="w-full xl:flex xl:h-[501px] h-auto min-h-[300px] space-y-3 xl:space-y-0 gap-3">
        {/* Conteneur gauche */}
        <div className="w-full xl:w-1/2 h-[300px] xl:h-full relative border border-black rounded-xl overflow-hidden bg-[#202125]">
          <Image
            src="/avis/avis_1.png"
            fill
            alt="Avis principal"
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Conteneur droit */}
        <div className="xl:w-1/2 flex flex-col xl:flex-row h-auto gap-3">
          {/* Colonne gauche */}
          <div className="w-full xl:w-1/2 flex flex-col gap-3 h-auto">
            <div className="relative border border-black rounded-xl overflow-hidden h-[250px] bg-[#202125]">
              <Image
                src="/avis/avis_2.png"
                fill
                alt="Avis client"
                className="object-contain object-center"
              />
            </div>
            <div className="relative border border-black rounded-xl overflow-hidden h-[250px] bg-[#202125]">
              <Image
                src="/avis/avis_3.png"
                fill
                alt="Avis client"
                className="object-contain object-center"
              />
            </div>
          </div>

          {/* Colonne droite */}
          <div className="w-full xl:w-1/2 flex flex-col gap-3 h-auto">
            <div className="relative border border-black rounded-xl overflow-hidden h-[250px] bg-[#202125]">
              <Image
                src="/avis/avis_4.png"
                fill
                alt="Avis client"
                className="object-contain object-center"
              />
            </div>
            <div className="relative border border-black rounded-xl overflow-hidden h-[250px] bg-[#202125]">
              <Image
                src="/avis/avis_5.png"
                fill
                alt="Avis client"
                className="object-contain object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Avis;
