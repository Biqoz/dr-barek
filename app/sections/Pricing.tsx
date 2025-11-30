import Link from "next/link";

const Pricing = () => {
  return (
    <section className="w-full py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-Globale mb-2">
            Accès aux soins facilité
          </h2>
          <p className="text-muted-foreground">
            Des solutions pour tous les budgets
          </p>
        </div>

        {/* Main features - clean list */}
        <div className="grid md:grid-cols-2 gap-x-16 gap-y-8 mb-10">
          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground/60 w-5 shrink-0">01</span>
            <div>
              <h3 className="font-medium mb-1">Tiers payant généralisé</h3>
              <p className="text-sm text-muted-foreground">
                Aucune avance de frais. Nous gérons directement avec la Sécurité Sociale
                et votre mutuelle.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground/60 w-5 shrink-0">02</span>
            <div>
              <h3 className="font-medium mb-1">CMU-CSS acceptée</h3>
              <p className="text-sm text-muted-foreground">
                Soins courants, prothèses et urgences pris en charge intégralement
                pour les bénéficiaires.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground/60 w-5 shrink-0">03</span>
            <div>
              <h3 className="font-medium mb-1">100% Santé</h3>
              <p className="text-sm text-muted-foreground">
                Couronnes, bridges et prothèses sans reste à charge grâce au
                dispositif national.
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <span className="text-sm text-muted-foreground/60 w-5 shrink-0">04</span>
            <div>
              <h3 className="font-medium mb-1">Paiement en plusieurs fois</h3>
              <p className="text-sm text-muted-foreground">
                Échelonnement possible jusqu&apos;à 12 mois sans frais pour les
                traitements importants.
              </p>
            </div>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-3">
          <Link
            href="/tarifs/tiers-payant"
            className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:bg-muted transition-colors"
          >
            Tiers payant
          </Link>
          <Link
            href="/tarifs/cmu"
            className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:bg-muted transition-colors"
          >
            CMU-CSS
          </Link>
          <Link
            href="/tarifs/reste-a-charge-zero"
            className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:bg-muted transition-colors"
          >
            100% Santé
          </Link>
          <Link
            href="/tarifs/facilite-de-paiement"
            className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:bg-muted transition-colors"
          >
            Facilités de paiement
          </Link>
          <Link
            href="/tarifs/tarifs-generaux"
            className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            Tous les tarifs →
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="font-medium">Devis gratuit et sans engagement</p>
            <p className="text-sm text-muted-foreground">
              Nous étudions votre prise en charge avant tout traitement
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href="/tarifs/tarifs-generaux"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
            >
              Voir les tarifs
            </a>
            <a
              href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Demander un devis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
