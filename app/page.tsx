// src/app/page.tsx
"use client";

import Services from "./sections/Nos_Services";
import Hero_Banner from "./sections/Hero_Banner";

import Qui_est_le_Dr_Barek from "./sections/Qui_est_le_Dr_Barek";
import Nos_Tarifs from "./sections/Nos_Tarifs";
import Gallerie_Photos from "./sections/Gallerie_Photos";

import Avis from "./sections/Avis";

export default function Home() {
  return (
    <>
      <Hero_Banner />
      <Services />

      <Qui_est_le_Dr_Barek />

      <Nos_Tarifs />

      <Gallerie_Photos />
      <Avis />
    </>
  );
}
