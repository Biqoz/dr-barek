"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent));
  }, []);

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  const [hovered, setHovered] = useState(false);

  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  return (
    <footer className="flex w-full flex-col items-center justify-center gap-3 p-7 ">
      <main className="flex w-full items-center justify-center rounded-xl border border-black bg-white shadow-[3px_3px_0px_0px]">
        <section className="flex h-16 w-full text-center xl:h-48">
          <div className="flex w-full flex-1 items-center justify-center">
            <a
              href="tel:0184244699"
              className="flex h-full w-full items-center justify-center rounded-l-xl border invert hover:bg-[#DFECF2] hover:invert-0"
            >
              <Image
                src="/icon/Iphone.png"
                alt="Téléphone"
                width={45}
                height={45}
              />
            </a>
          </div>
          <div className="flex w-full flex-1 items-center justify-center invert hover:bg-[#DFECF2] hover:invert-0">
            <a
              href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
              target="_blank"
              className="flex h-full w-full items-center justify-center border p-7"
            >
              <svg
                fill="none"
                height="120"
                viewBox="0 0 472 120"
                width="90"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  clipRule="evenodd"
                  d="m51.1434 3.3155c52.2786 5.55083 52.2786 38.4521 49.2506 55.1046-1.7153 9.7897-10.5967 58.6369-69.8392 58.7379-23.41441 0-26.94676-2.725-25.73567-7.973.58255-2.395 8.67887-32.6449 14.51807-54.4613 3.2653-12.2001 5.8248-21.7629 5.9696-22.342 1.7625-7.0501 8.6408-6.0001 10.055-5.7842.1244.019.2066.0315.2392.0315.2019.1009.3028.3028.3028.5046-.5264 4.5118-6.9356 39.166-10.2108 56.8752-1.1206 6.0591-1.8744 10.1345-1.9001 10.3404-.9083 5.9548 0 6.5598 7.3675 6.5598 36.4336 0 49.6547-25.1299 53.2879-45.3148 6.1564-34.9197-27.956-45.3149-75.69312-41.0761-.04713 0-.1314.0027-.24575.0065h-.00032-.00014c-.86554.0283-3.45132.1127-4.69908-.5111-1.81664-.8074-3.3305-3.0278-3.7341968-4.23885-.1009243-.4037-.1009243-.90832 0-1.11017.1009238-.20185.2018488-.40369.4036968-.40369 15.44141-2.72496 36.83731-6.35823 50.66401-4.94529zm166.8276 91.3869c.025.0252.051.0505.101.0505.303.2018.101.7064-.202 1.0092-3.33 11.6059-13.726 19.5789-25.736 19.8819-10.092.505-20.285-5.248-24.625-14.028-1.716-3.3308-2.725-6.8631-3.129-11.2029-1.514.7065-3.128 1.312-4.743 1.8167-2.12 5.8536-5.753 11.2022-10.698 14.9372-10.698 7.872-25.13 10.294-38.049 3.128-15.8446-11.0005-13.9271-33.103-2.825-46.1222 11.101-13.0192 31.488-15.1386 41.681-8.7804 6.964 4.4407 10.597 12.2118 11.607 20.1849 1.513-1.0093 2.825-2.3213 4.339-4.1379 1.413-1.7157 4.239-5.8536 4.239-5.8536 1.716-2.5231 3.633-4.8444 5.955-6.8629 4.642-4.1379 10.597-6.1564 16.652-6.1564 5.248 0 10.496 1.5139 15.139 4.6426 1.514.9083 1.917 1.5138 1.413 2.3212-.606 1.2111-1.413 2.3213-2.221 3.3305-1.614 2.0185-3.33 1.312-4.44.8074-.202-.1009-.404-.2018-.505-.2018-5.147-1.8167-9.386-1.413-13.726 1.211-9.386 5.7527-10.899 16.8544-9.083 25.433 1.817 8.6794 6.661 11.7076 10.395 12.6156 6.964 1.716 16.148-2.019 22.002-8.8815 1.817-2.1194 4.441-.7064 6.358.8074.051 0 .076.0253.101.0505zm-98.199.9588c7.367 5.2478 19.175 2.5231 24.928-5.9546 4.037-5.9545 7.67-15.8451 1.514-23.4144-7.065-8.6795-19.781-5.7527-27.048 2.3213-7.165 8.0739-7.266 21.3959.606 27.0477zm191.251-40.3697c-10.193-6.3583-30.58-4.2388-41.682 8.7804-6.862 7.973-10.193 19.4784-8.073 29.6717-3.836 3.5323-8.377 5.9545-14.029 4.7434-3.028-.6055-6.459-4.0369-5.349-9.4868.202-1.0093 4.542-24.4237 8.68-47.1316.252 0 .529-.0253.807-.0505s.555-.0505.807-.0505c9.79-.6055 31.287-2.2203 34.214-3.8351 3.431-1.9176 3.229-4.9453 2.926-6.1564-.1-.3027-.302-.5046-.605-.5046-2.523-.1009-15.24-.6055-24.827-.9083-2.725-.1009-6.762-.1009-11.304-.1009 2.019-11.1017 3.734-20.99227 4.542-26.44218.101-.20185-.101-.50462-.303-.50462-.606-.10093-1.211-.20185-1.918-.20185-3.33 0-6.963 1.81663-7.973 5.14713 0 0-2.725 9.48692-6.156 22.00152-5.587 0-10.805.046-14.197.0758-1.633.0144-2.842.0251-3.465.0251-.303 0-.504.2018-.605.5046-.404 1.9176-1.413 8.6795 2.624 10.5971 2.523 1.211 7.064 1.4129 12.211 1.211-5.349 19.5793-11 41.379-11.808 47.7372-.908 7.0647 1.413 14.1289 6.157 18.4689 7.468 6.964 19.68 8.377 28.259 3.129 2.825-1.716 5.349-3.633 7.569-5.652 1.312 1.312 2.725 2.624 4.34 3.734 12.918 7.166 27.35 4.744 38.048-3.128 6.964-5.248 11.404-13.9279 12.414-22.4055 1.715-10.7989-1.716-23.1116-11.304-29.268zm-5.248 34.4151c-5.753 8.4777-17.561 11.2024-24.928 5.9546-7.872-5.6518-7.771-18.9738-.606-27.0477 7.267-8.074 19.983-11.0008 27.048-2.3213 6.156 7.5693 2.523 17.4599-1.514 23.4144zm80.538-63.0776-.606.9083c-2.22 3.9361-2.725 8.7804.908 11.4044 3.23 2.1195 7.267 1.1102 9.79-.8073 1.716-1.3121 2.826-3.4315 3.129-5.7527.303-2.4222-.202-5.8536-2.927-7.5693-1.11-.6056-2.321-.9084-3.532-.9084-1.918 0-3.936.6056-5.551 1.6148-.404.3028-.808.7065-1.211 1.1102zm72.968 80.336c7.065-5.248 11.404-13.9279 12.414-22.4055 1.413-10.7989-2.019-23.1116-11.506-29.268-7.266-4.5416-19.781-4.7435-30.378.3027 1.682-9.1431 4.743-29.8957 6.569-42.2794.694-4.7032 1.21-8.19924 1.404-9.39376v-.00018c0-.20173 0-.30262-.101-.40352-.101-.10092-.202-.20184-.303-.20184-.605-.10093-1.211-.20185-1.816-.20185-3.331 0-6.964 1.81663-7.973 5.14713 0 0-19.378 78.41812-20.084 82.15232-4.542 6.9638-9.992 9.6889-15.845 7.8721-4.761-1.4878-4.551-5.2174-4.446-7.0699l.005-.0957c.111-1.6036 1.706-11.0539 3.275-20.3501 1.295-7.671 2.572-15.2371 2.982-18.203.101-.4037-.202-.8074-.605-.9083-1.009-.2018-2.12-.3028-3.23-.3028-3.532 0-7.266 1.312-9.487 6.762-.101.2018-6.459 22.5061-7.67 27.3504-.05.3027-.126.6055-.202.9082-.075.3028-.151.6056-.202.9084-4.743 7.1657-12.01 13.3216-22.506 11.1017-3.027-.7065-6.358-2.9268-5.349-9.4869.303-1.7157 9.891-57.3249 12.717-75.0876 0-.3028-.101-.4037-.303-.5046-.606-.1009-1.312-.2019-1.918-.2019-3.33 0-6.963 1.8167-7.973 5.1472 0 0-15.34 56.3157-18.671 72.1608-1.513 7.0647-.504 13.8269 5.753 19.3779 5.753 5.147 16.854 6.761 26.139 2.926 5.349-2.22 9.79-5.954 12.919-9.083 4.037 8.074 13.725 13.322 22.607 11.203 6.863-1.615 12.111-6.56 15.542-10.799 1.312 1.917 2.927 3.734 4.643 5.046 7.872 6.358 19.175 7.468 29.268 4.441 5.147-1.11 10.092-3.432 14.331-6.56zm-29.672-37.1404c7.166-8.074 19.983-11.1017 27.048-2.3213 6.156 7.5693 2.422 17.5608-1.615 23.4144-5.753 8.4777-18.873 11.6063-26.24 6.3582-7.973-5.6517-6.358-19.3774.807-27.4513z"
                  fill="#fff"
                  fillRule="evenodd"
                ></path>
              </svg>
            </a>{" "}
          </div>

          <div className="flex w-full flex-1 items-center justify-center rounded-r-xl border invert hover:bg-[#DFECF2] hover:invert-0">
            {isMobile ? (
              <a
                onClick={(e) => {
                  e.preventDefault();
                  if (navigator.platform.indexOf("iPhone") !== -1) {
                    window.location.href = `maps://?q=10+Sq.+Columbia+95000+Cergy`;
                  } else {
                    window.location.href = `https://www.google.com/maps/search/?api=1&query=10+Sq.+Columbia+95000+Cergy`;
                  }
                }}
              >
                <Image
                  src="/icon/Localisation_Teeth.png"
                  alt={"Localisation"}
                  width={45}
                  height={45}
                />
              </a>
            ) : (
              <a
                href="https://www.google.com/maps/search/?api=1&query=10+Sq.+Columbia+95000+Cergy"
                target="_blank"
              >
                <Image
                  src="/icon/Localisation_Teeth.png"
                  alt={"Localisation"}
                  width={45}
                  height={45}
                />
              </a>
            )}
          </div>
        </section>
      </main>
      <section className="flex w-full items-center justify-center rounded-xl border border-black bg-[#DFECF2] p-3 text-center text-sm   shadow-[3px_3px_0px_0px]">
        © Copyright 2025 - Cergydentiste.fr
      </section>
      <section className="flex w-full items-center justify-center rounded-xl border border-black bg-[#DFECF2] p-3 text-center text-sm  shadow-[3px_3px_0px_0px]">
        <Link href="/mentions-legales" className="hover:text-white">
          Mention legales{" "}
        </Link>
      </section>
      <section className="flex w-full items-center justify-center rounded-xl border border-black bg-white p-3 text-center text-sm  shadow-[3px_3px_0px_0px]">
        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="cursor-default transition-colors duration-200 hover:text-white"
          >
            🖤
          </span>
        ))}

        <Link
          href="https://www.malt.fr/profile/nacimmoudjeb"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mx-1"
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <span className="relative inline-block">
            {"Réalisé par Nacim M".split("").map((letter, i) => (
              <span
                key={i}
                className="inline-block transition-transform duration-300 hover:text-green-500 hover:font-bold"
                style={{
                  transform: hovered ? "translateY(-5px)" : "translateY(0)",
                  transitionDelay: `${i * 50}ms`,

                  whiteSpace: "pre",
                }}
              >
                {letter}
              </span>
            ))}
          </span>
        </Link>

        {[...Array(3)].map((_, i) => (
          <span
            key={i}
            className="cursor-default transition-colors duration-200 hover:text-white"
          >
            🖤
          </span>
        ))}
      </section>

      <section className="h-16 w-full"></section>
    </footer>
  );
};

export default Footer;
