import React from "react";
import Image from "next/image";
const Sidebar = () => {
  return (
    <div className="fixed bottom-4 z-50 mr-1 flex w-full justify-center gap-3">
      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-black bg-white p-1 shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
        <a href="https://wa.me/+33184244699">
          {" "}
          <Image
            className="p-1 transition-transform duration-300 ease-in-out hover:scale-90"
            src="/boutons/whatsapp.png"
            alt="RDV"
            width={48}
            height={48}
          />
        </a>
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-black bg-white shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
        <a
          href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
          target="_blank"
        >
          <Image
            className="p-1 transition-transform duration-300 ease-in-out hover:scale-90"
            src="/boutons/rdv.png"
            alt="RDV"
            width={48}
            height={48}
          />
        </a>
      </div>

      <div className="flex h-16 w-16 items-center justify-center rounded-xl border border-black bg-white shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
        <a href="tel:+33184244699">
          <Image
            className="p-1 transition-transform duration-300 ease-in-out hover:scale-90"
            src="/boutons/phone.png"
            alt="RDV"
            width={48}
            height={48}
          />
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
