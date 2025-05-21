"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          NOS LOCAUX
        </h2>

        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px] space-y-8">
          {/* Galerie photos */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative h-64 rounded-xl border border-black overflow-hidden">
              <Image
                src="/cabinet/cabinet_1.jpg"
                alt="Intérieur du cabinet"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl border border-black overflow-hidden">
              <Image
                src="/cabinet/cabinet_2.jpg"
                alt="Salle de traitement"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-64 rounded-xl border border-black overflow-hidden">
              <Image
                src="/cabinet/cabinet_3.jpg"
                alt="Salle d'attente"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Carte et accès */}
          <div className="rounded-xl border-2 border-dashed border-black p-4 space-y-4">
            <h3 className="text-xl font-semibold">Accès et stationnement</h3>

            <div className="aspect-video rounded-lg overflow-hidden border border-black">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2621.345719490937!2d2.060390315850527!3d49.03718489836904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e6f5b0c7c105c1%3A0x259e4b826e356fce!2s10%20Sq.%20Columbia%2C%2095000%20Cergy!5e0!3m2!1sen!2sfr!4v1712345678901"
                className="w-full h-full"
                loading="lazy"
              ></iframe>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <p className="font-medium">Adresse :</p>
                <a
                  href="https://www.google.com/maps/search/?api=1&query=10+Sq.+Columbia+95000+Cergy"
                  target="_blank"
                  className="  font-bold "
                >
                  10 Square Columbia
                  <br />
                  95000 Cergy
                </a>
              </div>

              <div className="space-y-2">
                <p className="font-medium">Stationnement :</p>
                <ul className="list-inside list-disc">
                  <li>Parking Columbia (gratuit 1h)</li>
                  <li>Parking Les Linandes (300m)</li>
                  <li>Parking relais Cergy-Préfecture</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border border-black bg-white p-4 text-center">
              <p>
                Le cabinet est situé au 3ème étage <br /> accéssible via
                ascenseur
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
            <p className="text-lg font-medium">
              Une question sur l&apos;accès ? <br /> Appelez-nous
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
