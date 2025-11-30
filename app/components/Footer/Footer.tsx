import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-muted/30">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/logo_cergydentiste.png"
                alt="Cabinet Dentaire Cergy"
                width={60}
                height={60}
                className="w-12 h-auto"
              />
            </Link>
            <p className="text-sm text-muted-foreground mb-4">
              Cabinet dentaire moderne à Cergy.
              <br />
              Dr Samy Barek, chirurgien-dentiste.
            </p>
            <div className="flex items-center gap-1.5 text-sm">
              <span className="font-medium">5,0</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-3.5 h-3.5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="text-muted-foreground">(139 avis)<sup className="text-[9px] ml-0.5">*</sup></span>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium mb-4">Contact</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+33184244699"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  01 84 24 46 99
                </a>
              </li>
              <li>
                <a
                  href="https://www.google.com/maps/place/Cabinet+Dentaire+Cergy+-+Dr+BAREK/@49.0338929,2.0745645,17z/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>
                    10 Square Columbia
                    <br />
                    95000 Cergy
                  </span>
                </a>
              </li>
              <li className="flex items-start gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>
                  Lun - Dim : 8h - 21h
                  <br />
                  <span className="text-xs">Urgences 7j/7</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-medium mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="/dr-barek"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dr Barek
                </Link>
              </li>
              <li>
                <Link
                  href="/le-cabinet"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Le cabinet
                </Link>
              </li>
              <li>
                <Link
                  href="/avis"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Avis patients
                </Link>
              </li>
              <li>
                <Link
                  href="/tarifs/tarifs-generaux"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tarifs
                </Link>
              </li>
              <li>
                <Link
                  href="/nous-contacter"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Soins */}
          <div>
            <h3 className="font-medium mb-4">Nos soins</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/les-soins-proposes/implant"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Implants dentaires
                </Link>
              </li>
              <li>
                <Link
                  href="/les-soins-proposes/facettes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Facettes
                </Link>
              </li>
              <li>
                <Link
                  href="/les-soins-proposes/blanchiment"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blanchiment
                </Link>
              </li>
              <li>
                <Link
                  href="/les-soins-proposes/couronnes"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Couronnes
                </Link>
              </li>
              <li>
                <Link
                  href="/les-soins-proposes/urgences"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Urgences dentaires
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              Prenez rendez-vous en ligne 24h/24
            </p>
            <a
              href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 472 120"
                fill="currentColor"
                className="opacity-80"
              >
                <path
                  clipRule="evenodd"
                  d="m51.1434 3.3155c52.2786 5.55083 52.2786 38.4521 49.2506 55.1046-1.7153 9.7897-10.5967 58.6369-69.8392 58.7379-23.41441 0-26.94676-2.725-25.73567-7.973.58255-2.395 8.67887-32.6449 14.51807-54.4613 3.2653-12.2001 5.8248-21.7629 5.9696-22.342 1.7625-7.0501 8.6408-6.0001 10.055-5.7842.1244.019.2066.0315.2392.0315.2019.1009.3028.3028.3028.5046-.5264 4.5118-6.9356 39.166-10.2108 56.8752-1.1206 6.0591-1.8744 10.1345-1.9001 10.3404-.9083 5.9548 0 6.5598 7.3675 6.5598 36.4336 0 49.6547-25.1299 53.2879-45.3148 6.1564-34.9197-27.956-45.3149-75.69312-41.0761-.04713 0-.1314.0027-.24575.0065h-.00032-.00014c-.86554.0283-3.45132.1127-4.69908-.5111-1.81664-.8074-3.3305-3.0278-3.7341968-4.23885-.1009243-.4037-.1009243-.90832 0-1.11017.1009238-.20185.2018488-.40369.4036968-.40369 15.44141-2.72496 36.83731-6.35823 50.66401-4.94529z"
                  fillRule="evenodd"
                />
              </svg>
              Doctolib
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© 2025 Cabinet Dentaire Cergy - Dr Barek</p>
            <div className="flex items-center gap-4">
              <Link
                href="/mentions-legales"
                className="hover:text-foreground transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-border">|</span>
              <span>* Avis Google sur les 18 derniers mois</span>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground/60 mt-3">
            Réalisé par{" "}
            <a
              href="https://www.malt.fr/profile/nacimmoudjeb"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Nacim M.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
