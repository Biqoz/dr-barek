import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "100% Santé - Reste à Charge Zéro",
  description: "Prothèses dentaires sans reste à charge grâce au dispositif 100% Santé. Cabinet dentaire à Cergy.",
};

export default function ResteAChargeZeroPage() {
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
            100% Santé dentaire
          </h1>
          <p className="text-lg text-muted-foreground">
            Grâce au dispositif national, accédez à des prothèses de qualité
            entièrement remboursées par la Sécu et votre mutuelle.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-medium mb-4">Prothèses 100% remboursées</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Couronnes céramo-métalliques (dents visibles)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Couronnes métalliques (dents du fond)
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Bridges céramo-métalliques
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Prothèses amovibles en résine
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Conditions d&apos;éligibilité</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">1</span>
                <p className="text-sm">
                  Être affilié à la Sécurité Sociale
                </p>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">2</span>
                <p className="text-sm">
                  Avoir une mutuelle responsable (99% des contrats)
                </p>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">3</span>
                <p className="text-sm">
                  Choisir une prothèse du panier 100% Santé
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Hors dispositif</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                Implants dentaires
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                Couronnes tout céramique premium
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-muted-foreground/40 mt-1.5 shrink-0" />
                Options esthétiques avancées
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Nous vous guidons vers la solution adaptée à votre situation.
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
