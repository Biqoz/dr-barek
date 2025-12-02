"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { menu_superlong } from "../Menu_Long";
import Link from "next/link";

const NavBar = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [showJaw, setShowJaw] = useState(false);
  const [jawClamp, setJawClamp] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [menuScale, setMenuScale] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [staggerItems, setStaggerItems] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    const isHomePage = window.location.pathname === "/";

    if (isHomePage) {
      e.preventDefault(); // Bloque la navigation si déjà sur l'accueil
      window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll vers le haut
    }

    if (isOpen) {
      handleClose(); // Ferme le menu seulement si ouvert
    }
  };
  useEffect(() => {
    if (showMenu) {
      document.body.style.overflow = "hidden";
      document.body.style.touchAction = "none";
    } else {
      document.body.style.removeProperty("overflow");
      document.body.style.removeProperty("touch-action");
    }
  }, [showMenu]);

  const handleMenuClick = () => {
    setIsOpen(true);
    setShowMenu(true); // D'abord afficher le conteneur
    setTimeout(() => setShowJaw(true), 100);
    setTimeout(() => setJawClamp(true), 500);
    setTimeout(() => {
      setTimeout(() => {
        setMenuScale(true);
        setStaggerItems(true); // Activer le stagger après un délai minimal
      }, 50);
    }, 1000);
  };

  const handleClose = () => {
    setMenuScale(false);
    setStaggerItems(false);
    setActiveSubmenu(null);
    setTimeout(() => {
      setJawClamp(false);
      setShowMenu(false);
    }, 600);
    setTimeout(() => setShowJaw(false), 1200);
    setTimeout(() => setIsOpen(false), 2000);
  };

  const handleNavigation = (href: string, e: React.MouseEvent) => {
    e.preventDefault();
    handleClose();
    router.push(href);
  };

  const toggleSubmenu = (menuTitle: string) => {
    setActiveSubmenu(activeSubmenu === menuTitle ? null : menuTitle);
  };

  return (
    <>
      <nav
        className={` pointer-events-auto fixed z-[1000] flex h-24 w-full items-center justify-between px-12 pt-6 ${
          isScrolled ? "bg-[#DFECF2]/50 backdrop-blur-md" : ""
        } transition-all duration-300`}
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          className="flex items-center justify-center"
        >
          <Image
            src="/logo_cergydentiste.png"
            width={83}
            height={83}
            alt="Logo"
            priority
            className="w-[81px] h-auto"
          />
        </Link>

        <button
          onClick={isOpen ? handleClose : handleMenuClick}
          className="group relative p-2"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="relative">
              <Image
                src="/machoir_top.png"
                width={40}
                height={17}
                alt="Machoir Supérieure"
                className={`transition-all duration-300 ${isOpen ? "translate-y-1" : ""}`}
                style={{
                  aspectRatio: "40/17", // Utilisez le ratio original width/height ici
                  height: "auto", // Ajoutez ceci pour forcer le respect du ratio
                }}
              />
              <Image
                src="/machoir_bot.png"
                width={40}
                height={17}
                alt="Machoir Inférieure"
                className={`transition-all duration-300 ${isOpen ? "-translate-y-1" : ""}`}
                style={{
                  aspectRatio: "40/17", // Utilisez le ratio original width/height ici
                  height: "auto", // Ajoutez ceci pour forcer le respect du ratio
                }}
              />
            </div>
            <span className="text-xs tracking-wider opacity-70 transition-opacity group-hover:opacity-100">
              Menu
            </span>
          </div>
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-[999] bg-[#DFECF2] transition-all duration-500 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="fixed inset-0 flex items-center justify-center">
          <div
            className={`absolute transition-all duration-700 ${
              showJaw ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } ${jawClamp ? "-top-[150vh] scale-[3000%]" : "top-[42.5vh]"}`}
          >
            <Image
              src="/machoir_top.png"
              width={100}
              height={50}
              alt="Machoir Supérieure"
              className="relative"
              style={{
                aspectRatio: "100/50", // Utilisez le ratio original width/height ici
                height: "auto", // Ajoutez ceci pour forcer le respect du ratio
              }}
            />
          </div>
          <div
            className={`absolute transition-all duration-700 ${
              showJaw ? "scale-100 opacity-100" : "scale-0 opacity-0"
            } ${jawClamp ? "top-[150vh] scale-[3000%]" : "top-[45vh]"}`}
          >
            <Image
              src="/machoir_bot.png"
              width={100}
              height={50}
              alt="Machoir Inférieure"
              className="relative"
              style={{
                aspectRatio: "100/50", // Utilisez le ratio original width/height ici
                height: "auto", // Ajoutez ceci pour forcer le respect du ratio
              }}
            />
          </div>
        </div>
      </div>

      {showMenu && (
        <div className="fixed inset-0 top-24 z-[1000] flex items-center justify-center p-3 transition-all duration-500">
          <div className="mx-auto w-full max-w-2xl">
            <div className="flex h-full flex-col items-center justify-center">
              <div className="md:h-30 h-[70vh] w-full space-y-3 overflow-y-auto p-3 md:flex md:flex-col md:justify-center">
                {menu_superlong.map((item, index) => (
                  <div
                    key={item.text}
                    className={`transition-all duration-300 ${
                      staggerItems
                        ? "translate-y-0 opacity-100"
                        : "-translate-y-4 opacity-0"
                    }`}
                    style={{
                      transitionDelay: `${
                        staggerItems
                          ? index * 30 // Animation d'entrée (ordre normal)
                          : (menu_superlong.length - index - 1) * 50 // Animation de sortie (ordre inverse)
                      }ms`,
                      transitionTimingFunction: staggerItems
                        ? "cubic-bezier(0.33, 1, 0.68, 1)"
                        : "cubic-bezier(0.33, 1, 0.68, 1)",
                    }}
                  >
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => toggleSubmenu(item.text)}
                          className="flex w-full items-center justify-between rounded-xl border border-black bg-white p-1 px-7 text-xl shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                        >
                          {item.text}
                          <span
                            className={`transform transition-transform duration-300 ${activeSubmenu === item.text ? "rotate-180" : ""}`}
                          >
                            <Image
                              src={item.icon!}
                              alt="icon"
                              width={15}
                              height={15}
                            />
                          </span>
                        </button>

                        <div
                          className={`ml-4 space-y-2 overflow-hidden transition-all duration-500 ${activeSubmenu === item.text ? "grid-rows-[1fr]" : "grid-rows-[0fr]"} grid`}
                        >
                          <div className="min-h-0 space-y-2">
                            <div className="space-y-1 border-l-2 border-black p-2">
                              {item.submenu.map((subitem) => (
                                <a
                                  key={subitem.text}
                                  href={subitem.href}
                                  onClick={(e) =>
                                    handleNavigation(subitem.href, e)
                                  }
                                  className={`block rounded-xl border border-black p-1 px-7 text-sm shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none ${
                                    staggerItems
                                      ? "translate-y-0 opacity-100"
                                      : "-translate-y-4 opacity-0"
                                  }`}
                                >
                                  {subitem.text}
                                </a>
                              ))}
                            </div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <a
                        href={item.href}
                        onClick={(e) => handleNavigation(item.href, e)}
                        className="flex items-center justify-between rounded-xl border border-black bg-white p-1 px-7 text-xl shadow-[3px_3px_0px_0px] transition-all duration-300 hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
                      >
                        {item.text}
                        <Image
                          src={item.icon!}
                          alt="icon"
                          width={15}
                          height={15}
                        />
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBar;
