import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Star, ArrowRight, Wallet } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] w-full">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)] py-12 lg:py-0">
          {/* Left - Content */}
          <div className="space-y-6">
            {/* Rating */}
            <a
              href="https://www.google.com/maps/place/Cabinet+Dentaire+Cergy+-+Dr+BAREK/@49.0338929,2.0745645,17z/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <span className="font-medium text-foreground">Avis patients</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <span className="text-muted-foreground">
                sur 139 avis<sup className="text-[9px] ml-0.5">*</sup>
              </span>
            </a>

            {/* Headline */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-Globale leading-tight">
                Votre sourire,
                <br />
                <span className="text-muted-foreground">notre expertise</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Cabinet dentaire moderne à Cergy. Soins de qualité, équipements
                de pointe et équipe bienveillante.
              </p>
            </div>

            {/* Desktop: Info pills */}
            <div className="hidden sm:flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border shadow-sm">
                <Clock className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Ouvert 7j/7</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-card border border-border shadow-sm">
                <MapPin className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm">Cergy - Parking gratuit</span>
              </div>
            </div>

            {/* Mobile: Photo + infos side by side */}
            <div className="sm:hidden flex gap-4 items-center">
              <Image
                src="/banniere.png"
                alt="Dr Barek"
                width={140}
                height={170}
                className="h-auto object-contain flex-shrink-0"
              />
              <div className="space-y-3">
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Wallet className="w-3 h-3" />
                  <span>Sans avance de frais</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>Ouvert 7j/7</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <MapPin className="w-3 h-3" />
                  <span>Cergy - Parking gratuit</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg" className="text-base px-8 shadow-md">
                <a
                  href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="text-base px-8"
              >
                <a href="tel:+33184244699">
                  <Phone className="w-4 h-4 mr-2" />
                  01 84 24 46 99
                </a>
              </Button>
            </div>

            {/* Infos */}
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <div className="flex items-center">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                <span>Créneaux disponibles</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-1.5 h-1.5 bg-foreground/40 rounded-full mr-2" />
                <span>Urgences acceptées</span>
              </div>
              <div className="flex items-center">
                <span className="inline-block w-1.5 h-1.5 bg-foreground/40 rounded-full mr-2" />
                <span>Tiers payant</span>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div className="relative hidden sm:block">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-accent/30 rounded-2xl translate-x-4 translate-y-4" />

              {/* Main image container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/banniere.png"
                  alt="Dr Barek - Chirurgien dentiste à Cergy"
                  fill
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
