import Image from "next/image";
import Link from "next/link";

const featured = [
  {
    title: "Implants dentaires",
    description: "Remplacement durable et naturel des dents manquantes",
    image: "/vignettes/11.jpg",
    href: "/les-soins-proposes/implant",
  },
  {
    title: "Esthétique du sourire",
    description: "Facettes, blanchiment et corrections esthétiques",
    image: "/vignettes/7.jpg",
    href: "/les-soins-proposes/facettes",
  },
];

const other = [
  { title: "Couronnes", href: "/les-soins-proposes/couronnes" },
  { title: "Blanchiment", href: "/les-soins-proposes/blanchiment" },
  { title: "Scanner 3D", href: "/les-soins-proposes/scanner-3d" },
  { title: "Bridge", href: "/les-soins-proposes/bridge" },
  { title: "Dévitalisation", href: "/les-soins-proposes/devitalisation" },
  { title: "Urgences", href: "/les-soins-proposes/urgences" },
];

const Services = () => {
  return (
    <section className="w-full py-20 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-2xl md:text-3xl font-Globale mb-2">Nos soins</h2>
          <p className="text-muted-foreground">
            Techniques modernes, résultats durables
          </p>
        </div>

        {/* Featured services - 2 large cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {featured.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="group relative overflow-hidden rounded-2xl bg-muted aspect-[16/10]"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-medium text-white mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-white/70">{service.description}</p>
              </div>
            </Link>
          ))}
        </div>

        {/* Other services - simple list */}
        <div className="flex flex-wrap gap-3">
          {other.map((service) => (
            <Link
              key={service.title}
              href={service.href}
              className="px-4 py-2 rounded-full border border-border bg-card text-sm hover:bg-muted transition-colors"
            >
              {service.title}
            </Link>
          ))}
          <Link
            href="/#services"
            className="px-4 py-2 rounded-full border border-border text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            Tous les soins →
          </Link>
        </div>

        {/* CTA */}
        <div className="mt-10 pt-8 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-muted-foreground">
            Besoin d&apos;un soin ? Contactez-nous.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="tel:+33184244699"
              className="inline-flex items-center gap-2 px-5 py-2.5 border border-border rounded-full text-sm font-medium hover:bg-muted transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              01 84 24 46 99
            </a>
            <a
              href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-full text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
