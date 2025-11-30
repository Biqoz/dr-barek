import { reviews, reviewStats } from "@/lib/reviews";
import { ReviewCard } from "@/app/components/ReviewCard";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export const metadata = {
  title: "Avis patients",
  description:
    "Découvrez les avis de nos patients sur le cabinet dentaire du Dr Barek à Cergy.",
};

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-5 h-5 ${filled ? "text-yellow-400" : "text-gray-200"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function AvisPage() {
  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-3xl font-Globale mb-6">Avis patients</h1>

          {/* Stats summary */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 p-6 rounded-xl bg-muted/50 border border-border/50">
            <div className="text-center sm:text-left">
              <div className="text-5xl font-Globale mb-1">
                {reviewStats.averageRating}
              </div>
              <div className="flex justify-center sm:justify-start mb-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= 5} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground">
                {reviewStats.totalReviews} avis Google
              </p>
            </div>

            {/* Distribution bars */}
            <div className="flex-1 space-y-1.5">
              {[5, 4, 3, 2, 1].map((rating) => {
                const count =
                  reviewStats.distribution[
                    rating as keyof typeof reviewStats.distribution
                  ];
                const percentage = (count / reviewStats.totalReviews) * 100;
                return (
                  <div key={rating} className="flex items-center gap-2 text-sm">
                    <span className="w-3 text-muted-foreground">{rating}</span>
                    <div className="flex-1 h-2 bg-border/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-yellow-400 rounded-full"
                        style={{ width: `${percentage}%` }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Google link */}
          <div className="mt-4">
            <Button asChild variant="outline" size="sm">
              <a
                href="https://www.google.com/search?q=dr+barek+cergy+avis"
                target="_blank"
                rel="noopener noreferrer"
              >
                Voir sur Google
                <ExternalLink className="w-3.5 h-3.5 ml-2" />
              </a>
            </Button>
          </div>
        </div>

        {/* Reviews list */}
        <div className="space-y-4">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
}
