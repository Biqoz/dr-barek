import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facilités de Paiement",
  description: "Échelonnez vos soins dentaires en plusieurs fois sans frais. Cabinet dentaire à Cergy.",
};

export default function FacilitePaiementPage() {
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
            Facilités de paiement
          </h1>
          <p className="text-lg text-muted-foreground">
            Pour les traitements importants, nous proposons des solutions
            d&apos;échelonnement adaptées à votre budget.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-medium mb-4">Options disponibles</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <div>
                  <p className="text-sm font-medium mb-1">Paiement en 3 fois</p>
                  <p className="text-sm text-muted-foreground">
                    Sans frais, idéal pour les soins de 300€ à 1000€
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <div>
                  <p className="text-sm font-medium mb-1">Échelonnement jusqu&apos;à 12 mois</p>
                  <p className="text-sm text-muted-foreground">
                    Pour les traitements plus importants (implants, prothèses complètes)
                  </p>
                </div>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <div>
                  <p className="text-sm font-medium mb-1">Plan personnalisé</p>
                  <p className="text-sm text-muted-foreground">
                    Nous adaptons les mensualités à votre situation
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Notre engagement</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Aucun acompte obligatoire
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Pas de frais supplémentaires
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Devis détaillé avant engagement
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Confidentialité totale
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Comment ça marche</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">1</span>
                <p className="text-sm">
                  Consultation et devis détaillé gratuit
                </p>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">2</span>
                <p className="text-sm">
                  On définit ensemble le plan de paiement adapté
                </p>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">3</span>
                <p className="text-sm">
                  Début des soins sans attendre
                </p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Parlons de votre projet sans engagement.
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
