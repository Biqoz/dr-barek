const TrustBar = () => {
  return (
    <section className="w-full py-6 border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground">15+</strong> ans d&apos;expérience
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span>
            <strong className="text-foreground">2000+</strong> patients
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span>
            <strong className="text-foreground">100%</strong> conventionné
          </span>
          <span className="hidden sm:inline text-border">|</span>
          <span>
            Ouvert <strong className="text-foreground">7j/7</strong>
          </span>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
