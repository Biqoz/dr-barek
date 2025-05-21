import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-between p-3 pt-28">
      <div className="w-full max-w-2xl">
        <h1 className="w-full rounded-xl border border-black bg-white p-7 text-3xl shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
          Mentions légales
        </h1>

        <section className="pl-7 pt-5">
          <h2 className="w-full rounded-xl border border-black p-3 text-xl shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
            Éditeur du site
          </h2>
          <p className="p-3 pl-7">
            Raison sociale: Propulse Solutions Co (FZC)
            <br />
            Adresse: SRTIP FREEZONE
            <br />
            Téléphone : +971 56 1024 856
            <br />
            Email : moudjeb.nacim@gmail.com
          </p>
        </section>

        <section className="pl-7">
          <h2 className="w-full rounded-xl border border-black p-3 text-xl shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
            Hébergement
          </h2>
          <p className="p-3 pl-7">
            Hébergeur: Hostinger
            <br />
            Adresse: HOSTINGER INTERNATIONAL LTD 61 Lordou Vironos Street, 6023
            Larnaca, Chypre.
            <br />
            Site web: https://www.hostinger.fr
          </p>
        </section>

        <section className="pl-7">
          <h2 className="w-full rounded-xl border border-black p-3 text-xl shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
            Propriété intellectuelle
          </h2>
          <p className="p-3 pl-7">
            Le contenu de ce site (textes, images, vidéos) est protégé par le
            droit d&apos;auteur.
            <br />
            Toute reproduction sans autorisation écrite est interdite.
          </p>
        </section>

        <section className="pl-7">
          <h2 className="w-full rounded-xl border border-black p-3 text-xl shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px]">
            Protection des données
          </h2>
          <p className="p-3 pl-7">
            Ce site vitrine{" "}
            <strong>ne collecte aucune donnée personnelle</strong> <br />
            <br />
            (ni formulaire, ni cookies analytiques ou traceurs).
            <br />
            Aucun traitement de données n&apos;est effectué, conformément au{" "}
            <a
              href="https://www.cnil.fr/fr/rgpd-de-quoi-parle-t-on"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold"
            >
              RGPD
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
