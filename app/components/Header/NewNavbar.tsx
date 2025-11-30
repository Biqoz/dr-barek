"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Nos soins", href: "/#services" },
  { name: "Le cabinet", href: "/le-cabinet" },
  { name: "Dr Barek", href: "/dr-barek" },
  { name: "Tarifs", href: "/tarifs/tarifs-generaux" },
  { name: "Contact", href: "/nous-contacter" },
];

const NewNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-sm"
            : "bg-background/50 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo_cergydentiste.png"
                alt="Cabinet Dentaire Cergy"
                width={60}
                height={60}
                priority
                className="w-14 h-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+33184244699"
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                <Phone className="w-4 h-4" />
                01 84 24 46 99
              </a>
              <Button asChild size="sm">
                <a
                  href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prendre RDV
                </a>
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-accent/50 transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-lg"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-background border-t border-border overflow-y-auto pt-20">
            <div className="px-6 py-8 space-y-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-lg font-medium hover:text-muted-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-6 border-t border-border space-y-4">
                <a
                  href="tel:+33184244699"
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <Phone className="w-5 h-5" />
                  01 84 24 46 99
                </a>
                <Button asChild className="w-full" size="lg">
                  <a
                    href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Prendre rendez-vous
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewNavbar;
