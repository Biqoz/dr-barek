import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tiers Payant - Sans Avance de Frais",
  description: "Bénéficiez du tiers payant intégral. Aucune avance de frais pour vos soins dentaires à Cergy.",
};

export default function TiersPayantPage() {
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
            Tiers payant intégral
          </h1>
          <p className="text-lg text-muted-foreground">
            Vous n&apos;avancez jamais les frais. Nous gérons tout directement
            avec la Sécurité Sociale et votre mutuelle.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          <div>
            <h2 className="text-lg font-medium mb-4">Comment ça fonctionne</h2>
            <div className="space-y-3">
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">1</span>
                <p className="text-sm">
                  La part Sécurité Sociale est transmise automatiquement après chaque soin
                </p>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">2</span>
                <p className="text-sm">
                  Votre mutuelle reçoit la demande de complément en temps réel
                </p>
              </div>
              <div className="flex gap-4 p-4 rounded-xl bg-muted/50">
                <span className="text-sm text-muted-foreground/60 w-5 shrink-0">3</span>
                <p className="text-sm">
                  Vous repartez sans rien payer, tout est réglé directement
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Avantages</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Aucune avance de frais pour les soins courants
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Gestion administrative complète par notre équipe
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Conventionné avec la majorité des mutuelles
              </li>
              <li className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-1.5 shrink-0" />
                Remboursements traités sous 48h
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
                Carte de mutuelle ou attestation de droits
              </li>
            </ul>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Une question sur la prise en charge de vos soins ?
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
