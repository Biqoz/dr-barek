"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          FACILITÉS DE PAIEMENT
        </h2>

        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px]">
          <div className="space-y-6">
            <div className="rounded-lg border-2 border-dashed border-black p-4 bg-gray-50">
              <p>
                Nous adaptons nos solutions financières pour que vos soins
                dentaires restent accessibles sans compromis sur la qualité.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Options disponibles
                </h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Échelonnement sur 3 mois sans frais</li>
                  <li>Plans personnalisés jusqu&apos;à 12 mois</li>
                  <li>Prise en charge tiers payant</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">Notre engagement</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Aucun acompte requis</li>
                  <li>Transparence totale sur les coûts</li>
                  <li>Solutions confidentielles</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-2 border-dashed border-black p-4">
              <h3 className="text-xl font-semibold mb-2">
                Démarche simplifiée
              </h3>
              <ol className="list-inside list-decimal space-y-2">
                <li>Estimation détaillée lors de la consultation</li>
                <li>Validation ensemble du plan de paiement</li>
                <li>Mise en place immédiate des échéances</li>
              </ol>
            </div>

            <div className="rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
              <p className="text-lg font-medium">
                Discutons de votre projet sans engagement
                <br />
                Solutions flexibles et adaptées à votre situation
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
