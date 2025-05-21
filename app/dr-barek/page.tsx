"use client";
import Image from "next/image";

export default function Home() {
  const videoUrl = "/videos/Presentation.mp4";

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        {/* En-tête vidéo */}
        <div className="w-full rounded-xl border border-black bg-white shadow-[3px_3px_0px_0px] overflow-hidden">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-96 object-cover"
          >
            <source src={videoUrl} type="video/mp4" />
            Votre navigateur ne supporte pas la lecture vidéo.
          </video>
          <div className="p-6 text-center">
            <h1 className="text-4xl font-bold mb-4">Dr Barek</h1>
            <p className="text-xl ">
              Excellence et innovation en dentisterie moderne
            </p>
          </div>
        </div>

        {/* Grille de valeurs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-xl border-2 border-dashed border-black p-6">
            <h3 className="text-xl font-semibold mb-4">Formation</h3>
            <p>
              Diplômé de la Faculté de Garancière à Paris, spécialisé en
              chirurgie implantaire.
            </p>
          </div>

          <div className="rounded-xl border-2 border-dashed border-black p-6">
            <h3 className="text-xl font-semibold mb-4">Expertise</h3>
            <p>
              Technologies de pointe pour des soins dentaires d&apos;excellence.
            </p>
          </div>

          <div className="rounded-xl border-2 border-dashed border-black p-6">
            <h3 className="text-xl font-semibold mb-4">Innovation</h3>
            <p>Cabinet équipé des dernières technologies de diagnostic.</p>
          </div>
        </div>

        {/* Sections détaillées */}
        <div className="space-y-6">
          <div className="rounded-xl border border-black p-6">
            <h2 className="text-2xl font-bold mb-4">Expérience</h2>
            <p>
              Le Dr Barek traite une large gamme de cas dentaires avec une
              approche centrée sur le bien-être du patient.
            </p>
          </div>

          <div className="rounded-xl border border-black p-6">
            <h2 className="text-2xl font-bold mb-4">Formation Continue</h2>
            <ul className="list-inside list-disc space-y-2    ">
              <li>
                Participation annuelle au Congrès International
                d&apos;Implantologie
              </li>
              <li>Certification en dentisterie numérique CAD/CAM</li>
              <li>Formation continue en anesthésiologie dentaire</li>
            </ul>
          </div>

          <div className="rounded-xl border border-black p-6">
            <h2 className="text-2xl font-bold mb-4">Engagement</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 border-2 border-dashed border-black rounded-lg">
                <h3 className="font-semibold">Communauté</h3>
                <p>Initiatives locales de santé bucco-dentaire</p>
              </div>
              <div className="p-4 border-2 border-dashed border-black rounded-lg">
                <h3 className="font-semibold">Éthique</h3>
                <p>Transparence absolue sur les traitements</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="w-full rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
          <p className="text-lg font-medium">
            Prenez rendez-vous avec un professionnel engagé dans
            l&apos;excellence
            <br />
            et bénéficiez de soins dentaires de dernière génération.
          </p>
        </div>
      </section>
    </main>
  );
}
