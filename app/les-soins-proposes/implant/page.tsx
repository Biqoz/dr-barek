"use client";
import Image from "next/image";

export default function Home() {
  const videoUrl = "/videos/Implant.mp4";

  return (
    <main className="flex min-h-screen w-full flex-col items-center justify-center p-6 pt-28">
      <section className="w-full max-w-7xl space-y-6">
        <h2 className="center w-full rounded-xl border border-black bg-white p-6 text-xl font-bold shadow-[3px_3px_0px_0px]">
          IMPLANT DENTAIRE
        </h2>

        <video
          autoPlay
          muted
          playsInline
          loop
          className="h-full w-full rounded-xl border border-black shadow-[3px_3px_0px_0px]"
        >
           <source src={`/${videoUrl}`} type="video/quicktime" />
          <source src={videoUrl} type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
        <div className="w-full rounded-xl border border-black p-6 text-lg shadow-[3px_3px_0px_0px]">
          <p className="mb-4  text-8xl  ">
        A11
          </p>

          <div className="space-y-4">
            <div className="rounded-lg border-2 border-dashed border-black p-4">
              <h3 className="mb-2 text-xl font-semibold">B11</h3>
              <p className="mb-4  text-8xl  ">
        C11
          </p>
            </div>

            <div className="rounded-lg border-2 border-dashed border-black p-4">
              <h3 className="mb-2 text-xl font-semibold">D11</h3>
              <ul className="list-inside list-disc space-y-2    ">
              <p className="mb-4  text-8xl  ">
        E11
          </p>
              </ul>
            </div>
          </div>
        </div>

        <div className="w-full rounded-xl border border-black bg-white p-6 text-center shadow-[3px_3px_0px_0px]">
        <p className="mb-4  text-8xl  ">
        F11
          </p>
        </div>
      </section>
    </main>
  );
}
