import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Tarifs - Grille tarifaire",
  description: "Consultez nos tarifs pour les soins dentaires. Cabinet dentaire à Cergy - Dr Barek.",
};

const tarifs = [
  { soin: "Consultation", prix: "23€", remboursement: "70%" },
  { soin: "Détartrage", prix: "28,92€", remboursement: "70%" },
  { soin: "Traitement carie (1 face)", prix: "26,97€", remboursement: "70%" },
  { soin: "Traitement carie (2 faces)", prix: "45,38€", remboursement: "70%" },
  { soin: "Dévitalisation incisive", prix: "33,74€", remboursement: "70%" },
  { soin: "Dévitalisation molaire", prix: "81,94€", remboursement: "70%" },
  { soin: "Extraction simple", prix: "33,44€", remboursement: "70%" },
  { soin: "Extraction complexe", prix: "À partir de 79€", remboursement: "Variable" },
];

const protheses = [
  { soin: "Couronne céramique", prix: "À partir de 500€", remboursement: "100% Santé possible" },
  { soin: "Couronne zircone", prix: "À partir de 600€", remboursement: "Partiel" },
  { soin: "Bridge 3 éléments", prix: "À partir de 1200€", remboursement: "100% Santé possible" },
  { soin: "Implant dentaire", prix: "À partir de 1200€", remboursement: "Non remboursé" },
  { soin: "Prothèse amovible complète", prix: "À partir de 950€", remboursement: "100% Santé possible" },
];

export default function TarifsGenerauxPage() {
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
            Grille tarifaire
          </h1>
          <p className="text-lg text-muted-foreground">
            Tarifs indicatifs des principaux soins. Un devis personnalisé vous sera
            remis avant tout traitement.
          </p>
        </div>

        {/* Content */}
        <div className="space-y-10">
          {/* Soins courants */}
          <div>
            <h2 className="text-lg font-medium mb-4">Soins courants</h2>
            <div className="space-y-2">
              {tarifs.map((item) => (
                <div
                  key={item.soin}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-sm">{item.soin}</p>
                    <p className="text-xs text-muted-foreground">
                      Remboursement : {item.remboursement}
                    </p>
                  </div>
                  <p className="text-sm font-medium">{item.prix}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Prothèses */}
          <div>
            <h2 className="text-lg font-medium mb-4">Prothèses et implants</h2>
            <div className="space-y-2">
              {protheses.map((item) => (
                <div
                  key={item.soin}
                  className="flex items-center justify-between py-3 border-b border-border last:border-0"
                >
                  <div>
                    <p className="text-sm">{item.soin}</p>
                    <p className="text-xs text-muted-foreground">
                      {item.remboursement}
                    </p>
                  </div>
                  <p className="text-sm font-medium">{item.prix}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="p-5 rounded-xl bg-muted/50">
            <p className="text-sm text-muted-foreground">
              Ces tarifs sont donnés à titre indicatif. Le montant exact dépend
              de votre situation clinique et sera précisé dans un devis détaillé
              avant tout traitement. La plupart des soins courants sont pris en
              charge à 70% par la Sécurité Sociale, le reste par votre mutuelle.
            </p>
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
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
              Obtenez un devis personnalisé gratuit.
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
