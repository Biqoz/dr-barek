"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          TIER PAYANT - SANS AVANCE DE FRAIS
        </h2>

        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px]">
          <div className="space-y-6">
            <div className="rounded-lg border-2 border-dashed border-black p-4 bg-gray-50">
              <p>
                Nous appliquons systématiquement le tiers payant pour vos soins,
                vous n&apos;avancez jamais les frais médicaux.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">
                  Types de tiers payant
                </h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Sécurité Sociale : prise en charge immédiate</li>
                  <li>Mutuelle : complément remboursé directement</li>
                </ul>
              </div>

              <div className="rounded-lg border-2 border-dashed border-black p-4">
                <h3 className="text-xl font-semibold mb-2">Avantages</h3>
                <ul className="list-inside list-disc space-y-2">
                  <li>Aucun frais à avancer</li>
                  <li>Gestion automatique des remboursements</li>
                  <li>Conventionné avec la majorité des mutuelles</li>
                </ul>
              </div>
            </div>

            <div className="rounded-lg border-2 border-dashed border-black p-4">
              <h3 className="text-xl font-semibold mb-2">Cas particuliers</h3>
              <ul className="list-inside list-disc space-y-2">
                <li>Prothèses : devis préalable obligatoire</li>
                <li>Soins hors nomenclature : facturation différée</li>
              </ul>
            </div>

            <div className="rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
              <p className="text-lg font-medium">
                Concentrez-vous sur votre santé, nous gérons le reste !<br />
                Aucun frais avancé - Prise en charge instantanée
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
