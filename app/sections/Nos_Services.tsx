import React from "react";
import Carte from "../components/Carte";
const Nos_Services = () => {
  return (
    <section
      id="services"
      className="flex w-full flex-col items-center justify-center space-y-3 p-3 text-center"
    >
      <div className="w-full flex-col items-center justify-center space-y-3 p-7">
        <p className="flex justify-center font-Globale text-5xl">X</p>
        <p className="flex justify-center font-MuktaMedium text-xl md:text-2xl">
          {" "}
          YYYYYYYYYYYYYYYYYYYYY
        </p>
        <p className="flex items-center justify-center font-MuktaRegular text-sm md:text-xl">
         ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ
        </p>
      </div>

      <div className="grid w-full grid-cols-1 gap-3 md:grid-cols-2 xl:w-2/3 xl:grid-cols-3">
        <Carte
          title="All In Four"
          modalTitle="All in Four"
          icon="/vignettes/12.jpg"
          videoUrl="videos/Allin4.mp4"
          description="B"
        />

        <Carte
          title="Bridge"
          modalTitle="Bridge"
          icon="/vignettes/5.jpg"
          videoUrl="videos/BridgeDentaire.mp4"
          description="C"
        />

        <Carte
          title={<>Empreinte Numérique</>}
          modalTitle="Empreinte Numérique"
          icon="/vignettes/13.jpg"
          videoUrl="videos/EmpreinteNumerique.mp4"
          description="D"
        />

        <Carte
          title={<>Inlay Esthétique</>}
          modalTitle="Inlay Esthétique"
          icon="/vignettes/4.jpg"
          videoUrl="videos/Inlay.mp4"
          description="E"
        />

        <Carte
          icon="vignettes\8.jpg"
          title={<>Biodentine</>}
          videoUrl="videos/BioDentine.mp4"
          description="F"
        />

        <Carte
          title="Couronnes"
          modalTitle="Couronnes"
          icon="/vignettes/1.jpg"
          videoUrl="videos/Couronne.mp4"
          description="G"
        />

        <Carte
          title="Facettes"
          modalTitle="Facettes"
          icon="/vignettes/7.jpg"
          videoUrl="videos/FacetteDentaire.mp4"
          description="H"
        />

        <Carte
          title="Scanner 3D"
          modalTitle="Scanner 3D"
          icon="/vignettes/2.jpg"
          videoUrl="videos/Scanner3D.mp4"
          description="I"
        />

        <Carte
          title="Blanchiment"
          modalTitle="Blanchiment"
          icon="/vignettes/6.jpg"
          videoUrl="videos/BlanchimentDentaire.mp4"
          description="J"
        />

        <Carte
          title="Urgence Dentaire"
          icon="/vignettes/10.jpg"
          videoUrl="videos/UrgenceDentaire.mp4"
          description="K"
        />

        <Carte
          title={<>Greffes Osseuses pré-implantaire</>}
          icon="/vignettes/14.jpg"
          videoUrl="videos/GriffeyOsseusesPreImplantaire.mp4"
          description="L"
        />

        <Carte
          title="Complet Mandibulaire sur implant"
          icon="/vignettes/9.jpg"
          videoUrl="videos/CompletMandibulaireSurImplant.mp4"
          description="M"
        />

        <Carte
          title="Implant"
          icon="/vignettes/11.jpg"
          videoUrl="videos/Implant.mp4"
          description="N"
        />

        <Carte
          title="Dévitalisation"
          icon="/vignettes/3.jpg"
          videoUrl="videos/Devitalisation.mp4"
          description="O"
        />
      </div>
    </section>
  );
};

export default Nos_Services;
