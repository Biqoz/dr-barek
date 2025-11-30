"use client";

import Link from "next/link";
import { reviews as allReviews } from "@/lib/reviews";

// Utiliser tous les avis répartis sur 5 rangées
const reviews = allReviews;
const row1 = reviews.slice(0, 14);
const row2 = reviews.slice(14, 28);
const row3 = reviews.slice(28, 42);
const row4 = reviews.slice(42, 56);
const row5 = reviews.slice(56, 69);

const StarIcon = () => (
  <svg className="w-3 h-3 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {[...Array(count)].map((_, i) => (
      <StarIcon key={i} />
    ))}
  </div>
);

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length > 1 ? `${parts[0][0]}${parts[1][0]}` : name.slice(0, 2);
};

const getColor = (name: string) => {
  const colors = ["bg-blue-500", "bg-green-500", "bg-purple-500", "bg-pink-500", "bg-indigo-500", "bg-teal-500"];
  return colors[name.charCodeAt(0) % colors.length];
};

const ReviewCard = ({ author, text, rating }: { author: string; text: string; rating: number }) => (
  <div className="flex-shrink-0 w-[300px] mx-2 p-4 rounded-lg bg-card border border-border/40">
    <div className="flex items-center gap-2 mb-2">
      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs ${getColor(author)}`}>
        {getInitials(author)}
      </div>
      <span className="text-sm font-medium truncate">{author}</span>
    </div>
    <Stars count={rating} />
    <p className="text-sm mt-2 line-clamp-2 text-muted-foreground">{text}</p>
  </div>
);

const MarqueeRow = ({
  items,
  direction = "left",
  duration = 30,
}: {
  items: typeof reviews;
  direction?: "left" | "right";
  duration?: number;
}) => {
  const duplicated = [...items, ...items];

  return (
    <div className="flex overflow-hidden">
      <div
        className={`flex ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ animationDuration: `${duration}s` }}
      >
        {duplicated.map((review, i) => (
          <ReviewCard key={`${review.id}-${i}`} author={review.author} text={review.text} rating={review.rating} />
        ))}
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <section className="w-full py-20 lg:py-24 overflow-hidden">
      {/* Header - subtle */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <h2 className="text-xl font-medium">Avis patients</h2>
            <span className="text-sm text-muted-foreground flex items-center gap-1">
              <span className="flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </span>
              <span>sur 139 avis<sup className="text-[10px] ml-0.5">*</sup></span>
            </span>
          </div>
          <Link
            href="/avis"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            Tous les avis →
          </Link>
        </div>
      </div>

      {/* Marquee rows */}
      <div className="space-y-3">
        <MarqueeRow items={row1} direction="left" duration={50} />
        <MarqueeRow items={row2} direction="right" duration={55} />
        <MarqueeRow items={row3} direction="left" duration={52} />
        <MarqueeRow items={row4} direction="right" duration={48} />
        <MarqueeRow items={row5} direction="left" duration={53} />
      </div>

      {/* Call to action */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-12 text-center">
        <p className="text-lg text-muted-foreground mb-6">
          Comme eux, faites-nous confiance pour votre sourire
        </p>
        <a
          href="https://www.doctolib.fr/dentiste/cergy/samy-barek"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-black rounded-full hover:bg-black/80 transition-colors"
        >
          Prendre rendez-vous
        </a>
      </div>
    </section>
  );
};

export default Testimonials;
