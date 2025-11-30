import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Location = () => {
  return (
    <section className="w-full py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Map */}
          <div className="lg:col-span-3 rounded-xl overflow-hidden border border-border/50 h-[350px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2619.8!2d2.074565!3d49.033885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDnCsDAyJzAyLjAiTiAywrAwNCczMi40IkU!5e0!3m2!1sfr!2sfr!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localisation du cabinet"
            />
          </div>

          {/* Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h2 className="text-2xl font-Globale mb-1">Cabinet dentaire</h2>
              <p className="text-muted-foreground">Dr Samy Barek</p>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Adresse</p>
                <p>10 Square Columbia, 95000 Cergy</p>
              </div>

              <div>
                <p className="text-muted-foreground mb-1">Téléphone</p>
                <a href="tel:+33184244699" className="hover:underline">
                  01 84 24 46 99
                </a>
              </div>

              <div>
                <p className="text-muted-foreground mb-1">Horaires</p>
                <div className="space-y-1">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Lun - Ven</span>
                    <span>08h - 21h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Samedi</span>
                    <span>09h - 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Dimanche</span>
                    <span>10h - 16h</span>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground">
                Parking gratuit à proximité
              </p>
            </div>

            <Button asChild className="w-full">
              <a
                href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
                target="_blank"
                rel="noopener noreferrer"
              >
                Prendre rendez-vous
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Location;
