"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          PRENDRE RENDEZ-VOUS
        </h2>

        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px]">
          <div className="space-y-8">
            <div className="rounded-lg border-2 border-dashed border-black p-4 bg-gray-50">
              <p className="text-center    ">
                Notre équipe est disponible 7j/7 de 8h à 20h pour répondre à vos
                demandes
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-lg border-2 border-dashed border-black p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Par téléphone</h3>
                <p className="text-2xl font-bold ">01 84 24 46 99</p>
                <p className="text-sm mt-2">Appel direct et immédiat</p>
              </div>

              <div className="rounded-lg border-2 border-dashed border-black p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.23a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">Par email</h3>
                <p className="text-lg font-medium">contact@drbarek.com</p>
                <p className="text-sm mt-2">Réponse sous 24h</p>
              </div>

              <div className="rounded-lg border-2 border-dashed border-black p-6 text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 mx-auto mb-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
                <p className="text-lg font-medium">+33 6 12 34 56 78</p>
                <p className="text-sm mt-2">Messagerie instantanée</p>
              </div>
            </div>

            <div className="rounded-lg border-2 border-dashed border-black p-4">
              <h3 className="text-xl font-semibold mb-4 text-center">
                Horaires d&apos;ouverture
              </h3>
              <ul className="space-y-2 text-center">
                <li>Lundi à Vendredi : 8h - 20h</li>
                <li>Samedi : 8h - 18h</li>
                <li>Dimanche : 9h - 13h</li>
              </ul>
            </div>

            <div className="rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
              <p className="text-lg font-medium">
                Urgence dentaire ? Appelez-nous directement au
                <br />
                <span className="text-2xl font-bold text-red-600">
                  08 36 65 65 65
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
