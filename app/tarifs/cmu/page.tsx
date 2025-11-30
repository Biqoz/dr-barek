import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "CMU-CSS - Complémentaire Santé Solidaire",
  description: "Soins dentaires pris en charge intégralement pour les bénéficiaires de la CMU-CSS à Cergy.",
};

export default function CMUPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/#tarifs"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-4 inline-block"
          >
            ← Retour
          </Link>
          <h1 className="text-3xl md:text-4xl font-Globale mb-4">
            CMU-CSS acceptée
          </h1>
          <p className="text-lg text-muted-foreground">
            Bénéficiaires de la Complémentaire Santé Solidaire, nous vous accueillons
            sans avance de frais pour l&apos;ensemble des soins couverts.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-medium mb-4">Soins pris en charge</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Consultations et soins dentaires courants
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Détartrage et traitement des caries
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Extractions dentaires
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Prothèses du panier CMU (couronnes, bridges, appareils)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Urgences dentaires
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Non couvert par la CMU</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                Implants dentaires
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                Prothèses hors panier (options esthétiques)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                Orthodontie adulte
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Documents à apporter</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Carte Vitale à jour
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Attestation de droits CMU-CSS en cours de validité
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Nous gérons toutes les démarches administratives pour vous.
            </p>
            <a
              href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 text-sm font-medium text-white bg-foreground rounded-full hover:bg-foreground/90 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
