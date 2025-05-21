"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          100% SANTÉ DENTAIRE
        </h2>

        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px]">
          <div className="space-y-6">
            <div className="rounded-lg border-2 border-dashed border-black p-4 bg-gray-50">
              <p>
                Bénéficiez de soins essentiels sans reste à charge grâce au
                dispositif 100% Santé et à notre partenariat avec les mutuelles.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">Soins couverts</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Couronnes métalliques</li>
                  <li>Couronnes céramo-métalliques (dents antérieures)</li>
                  <li>Bridges céramo-métalliques</li>
                  <li>Prothèses amovibles en résine</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">Non couvert</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Implants dentaires</li>
                  <li>Options esthétiques premium</li>
                  <li>Orthodontie adulte</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-2 border-dashed border-black p-4">
              <h3 className="text-xl font-semibold mb-2">Notre engagement</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Aucun frais à avancer</li>
                <li>Gestion administrative complète</li>
                <li>Matériaux conformes au panier 100% Santé</li>
              </ul>
            </div>

            <div className="rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
              <p className="text-lg font-medium">
                Accédez à des soins de qualité sans reste à charge
                <br />
                Vérifiez votre éligibilité avec notre équipe
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
