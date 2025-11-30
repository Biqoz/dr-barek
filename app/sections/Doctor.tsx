import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Doctor = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Decorative background */}
              <div className="absolute inset-0 bg-accent/30 rounded-2xl translate-x-4 translate-y-4" />

              {/* Main image */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border">
                <Image
                  src="/mbarek.png"
                  alt="Dr Samy Barek"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <div>
              <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">
                Votre praticien
              </p>
              <h2 className="text-3xl md:text-4xl font-Globale">
                Dr Samy Barek
              </h2>
              <p className="text-lg text-muted-foreground mt-1">
                Chirurgien-dentiste
              </p>
            </div>

            <div className="space-y-4 text-muted-foreground">
              <p>
                Diplômé de la faculté de chirurgie dentaire, le Dr Barek exerce
                depuis plus de 15 ans avec passion et dévouement.
              </p>
              <p>
                Spécialisé en implantologie et en esthétique dentaire, il se
                forme continuellement aux dernières techniques pour vous offrir
                des soins de la plus haute qualité.
              </p>
              <p>
                Son approche : écoute, pédagogie et excellence. Parce que chaque
                patient est unique.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button asChild size="lg">
                <a
                  href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Prendre rendez-vous
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/dr-barek">En savoir plus</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctor;
