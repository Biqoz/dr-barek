"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          CMU-CSS
        </h2>

        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px]">
          <div className="space-y-6">
            <div className="rounded-lg border-2 border-dashed border-black p-4 bg-gray-50">
              <p>
                Chez Dr Barek, nous nous engageons à vous offrir les meilleurs
                soins dentaires sans avance de frais pour les bénéficiaires de
                la CMU.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Prise en charge incluse
                </h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Soins dentaires courants</li>
                  <li>Prothèses conformes (couronnes, bridges, appareils)</li>
                  <li>Traitements urgents</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">Limitations</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Implants dentaires non couverts</li>
                  <li>Remboursement partiel des couronnes</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-2 border-dashed border-black p-4">
              <h3 className="text-xl font-semibold mb-2">Documents requis</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Carte Vitale à jour</li>
                <li>Attestation de droits CMU valide</li>
              </ul>
            </div>

            <div className="rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
              <p className="text-lg font-medium">
                Nous gérons toutes les démarches administratives
                <br />
                Prise de rendez-vous urgente possible
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
