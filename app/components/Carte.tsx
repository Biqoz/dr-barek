"use client";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface CarteProps {
  title: string | JSX.Element;
  videoUrl?: string;
  modalTitle?: string | JSX.Element;
  buttonText?: string;
  buttonLink?: string;
  description?: string;
  icon: string;
}

const Carte: React.FC<CarteProps> = ({
  title,
  videoUrl,
  buttonText = "En savoir plus",
  buttonLink = "#",
  description = "",
  icon,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [initialStyles, setInitialStyles] = useState({
    overflow: "",
    touchAction: "",
  });

  const cardRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const modalVideoRef = useRef<HTMLVideoElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  const activeCard = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    const resizeHandler = () => {
      checkMobile();
      activeCard.current = null;
    };

    window.addEventListener("resize", resizeHandler);

    setInitialStyles({
      overflow: document.body.style.overflow,
      touchAction: document.body.style.touchAction,
    });

    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  // Gestion de l'activation centrale
  useEffect(() => {
    const currentCard = cardRef.current;
    if (!videoUrl || !currentCard) return;

    observer.current = new IntersectionObserver(
      ([entry]) => {
        const rect = entry.boundingClientRect;
        const linePosition = window.innerHeight * 0.65; // Ajustez cette valeur selon vos besoins
        const isIntersectingLine =
          rect.top <= linePosition && rect.bottom >= linePosition;

        if (entry.isIntersecting && isIntersectingLine) {
          if (activeCard.current && activeCard.current !== currentCard) {
            const prevVideo = activeCard.current.querySelector("video");
            prevVideo?.pause();
            prevVideo && (prevVideo.currentTime = 0);
            const prevImage = activeCard.current.querySelector("img");
            prevImage?.classList.remove("opacity-0");
            prevImage?.classList.add("opacity-100");
          }

          activeCard.current = currentCard;
          setIsActive(true);
          videoRef.current?.play().catch((e) => {
            if (e.name !== "AbortError") console.error("Erreur lecture:", e);
          });
        } else if (activeCard.current === currentCard) {
          setIsActive(false);
          videoRef.current?.pause();
          videoRef.current && (videoRef.current.currentTime = 0);
          activeCard.current = null;
        }
      },
      {
        threshold: [0, 1],
        rootMargin: "0px",
      }
    );

    observer.current.observe(currentCard);

    return () => {
      observer.current?.unobserve(currentCard);
      observer.current?.disconnect();
    };
  }, [videoUrl, isMobile]);

  // Gestion hover desktop
  const handleHover = (hover: boolean) => {
    if (!isMobile && videoUrl) {
      setIsActive(hover);
      if (hover) {
        videoRef.current?.play().catch((e) => {
          if (e.name !== "AbortError") console.error("Erreur hover:", e);
        });
      } else {
        videoRef.current?.pause();
        videoRef.current && (videoRef.current.currentTime = 0);
      }
    }
  };

  // Gestion modale
  const handleOpen = () => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";
  };

  const handleClose = () => {
    setIsOpen(false);
    document.body.style.overflow = initialStyles.overflow;
    document.body.style.touchAction = initialStyles.touchAction;
    modalVideoRef.current?.pause();
    modalVideoRef.current && (modalVideoRef.current.currentTime = 0);
  };

  return (
    <div className="relative ">
      <div
        className="relative space-y-3"
        ref={cardRef}
        onMouseEnter={() => handleHover(true)}
        onMouseLeave={() => handleHover(false)}
      >
        {/* Carte principale */}
        <div
          onClick={handleOpen}
          className="relative w-full h-[15vh] min-h-60  flex flex-col justify-center items-center cursor-pointer shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl"
        >
          <Image
            src={icon}
            alt="Carte icon"
            fill
            className={`w-full rounded-xl object-cover border border-black transition-opacity duration-1000 ${
              isActive ? "opacity-0" : "opacity-100"
            }`}
            priority={!videoUrl}
          />

          {videoUrl && (
            <video
              ref={videoRef}
              muted
              loop
              playsInline
              className={`absolute inset-0 w-full h-full object-cover rounded-xl border border-black transition-opacity duration-1000 ${
                isActive ? "opacity-100" : "opacity-0"
              }`}
              preload="auto"
              disablePictureInPicture
              disableRemotePlayback
            >
              <source src={`/${videoUrl}#t=0.1`} type="video/mp4" />
            </video>
          )}
        </div>

        {/* Titre */}
        <div className="w-full h-12 shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl border border-black flex justify-center items-center bg-white">
          {title}
        </div>

        {/* Modal */}
        {isOpen && videoUrl && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[9999] flex items-center justify-center">
            <div className="bg-white rounded-xl border border-black max-w-full lg:max-w-[50vw] overflow-y-auto mx-4">
              <div className="flex items-center justify-between p-1 border-black relative">
                <div className="absolute w-full text-center left-0">
                  <h2 className="text-xl font-bold whitespace-nowrap">
                    {title}
                  </h2>
                </div>
                <button
                  onClick={handleClose}
                  className="relative z-10 p-2 hover:bg-gray-100 rounded-full ml-auto"
                >
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <div className="p-4">
                <video
                  ref={modalVideoRef}
                  autoPlay
                  muted
                  playsInline
                  className="border w-full h-full"
                >
                  <source src={`/${videoUrl}`} type="video/mp4" />
                </video>

                <div className="p-5">
                  <p className="text-9xl text-center">{description}</p>
                  <div className="flex justify-center mt-4">
                    <a
                      href={buttonLink}
                      className="px-12 p-3 border border-black shadow-[3px_3px_0px_0px] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[0px_0px_0px_0px] transition-all duration-300 rounded-xl"
                    >
                      {buttonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Carte;
