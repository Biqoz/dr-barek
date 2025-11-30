const TopBanner = () => {
  const messages = [
    "Bienvenue au Cabinet Dentaire du Dr Barek",
    "✨ Nouveau patient ? Profitez d'un bilan complet offert",
    "Ouvert 7j/7 — Urgences acceptées",
    "100% Tiers payant — Aucune avance de frais",
  ];

  return (
    <div className="bg-foreground text-background text-xs py-1.5 overflow-hidden">
      <div className="flex animate-marquee-left whitespace-nowrap">
        {[...messages, ...messages].map((message, i) => (
          <span key={i} className="mx-8">
            {message}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopBanner;
