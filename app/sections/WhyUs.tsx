"use client";

import Image from "next/image";
import { useState } from "react";

const cabinetPhotos = [
  { src: "/cabinet_dentaire_cergy/meilleur_cabinet_cergy_dentiste_1.jpg", alt: "Cabinet dentaire Cergy" },
  { src: "/cabinet_dentaire_cergy/meilleur_cabinet_cergy_dentiste_2.jpg", alt: "Salle de soins moderne" },
  { src: "/cabinet_dentaire_cergy/meilleur_cabinet_cergy_dentiste_3.jpg", alt: "Équipement de pointe" },
];

const WhyUs = () => {
  const [currentPhoto, setCurrentPhoto] = useState(0);

  return (
    <section className="w-full py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Text */}
          <div>
            <h2 className="text-2xl md:text-3xl font-Globale mb-10">
              Ce qui nous différencie
            </h2>

            <div className="space-y-6">
              <div className="flex gap-4">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">01</span>
                <div>
                  <h3 className="font-medium mb-1">Un praticien expérimenté</h3>
                  <p className="text-sm text-muted-foreground">
                    Dr Samy Barek, diplômé de l&apos;Université Paris VII.
                    Plus de 15 ans d&apos;expertise en implantologie et esthétique dentaire.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">02</span>
                <div>
                  <h3 className="font-medium mb-1">Un cabinet moderne</h3>
                  <p className="text-sm text-muted-foreground">
                    Équipé des dernières technologies : scanner 3D, empreinte numérique,
                    guidage chirurgical. Des soins précis dans un environnement confortable.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">03</span>
                <div>
                  <h3 className="font-medium mb-1">Une équipe à l&apos;écoute</h3>
                  <p className="text-sm text-muted-foreground">
                    Professionnels et bienveillants, nous prenons le temps d&apos;expliquer
                    chaque étape et de vous mettre à l&apos;aise.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">04</span>
                <div>
                  <h3 className="font-medium mb-1">Idéalement situé</h3>
                  <p className="text-sm text-muted-foreground">
                    Au cœur de Cergy, accès facile et parking gratuit.
                    Ouvert 7j/7, urgences acceptées.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Cabinet photos carousel */}
          <div className="lg:pt-12">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
              {cabinetPhotos.map((photo, index) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className={`object-cover transition-opacity duration-500 ${
                    index === currentPhoto ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {cabinetPhotos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhoto(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentPhoto ? "bg-foreground" : "bg-border"
                  }`}
                  aria-label={`Photo ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-lg text-muted-foreground mb-5">
            Envie de nous rencontrer ?
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/le-cabinet"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
            >
              Découvrir le cabinet
            </a>
            <a
              href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
