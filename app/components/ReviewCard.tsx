import type { Review } from "@/lib/reviews";

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-3.5 h-3.5 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const Stars = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[1, 2, 3, 4, 5].map((star) => (
      <StarIcon key={star} filled={star <= rating} />
    ))}
  </div>
);

const getInitials = (name: string) => {
  const parts = name.split(" ");
  return parts.length > 1
    ? `${parts[0][0]}${parts[1][0]}`.toUpperCase()
    : name.slice(0, 2).toUpperCase();
};

const getAvatarColor = (name: string) => {
  const colors = [
    "bg-blue-500",
    "bg-green-500",
    "bg-purple-500",
    "bg-pink-500",
    "bg-indigo-500",
    "bg-teal-500",
    "bg-orange-500",
    "bg-cyan-500",
  ];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

interface ReviewCardProps {
  review: Review;
  compact?: boolean;
}

export const ReviewCard = ({ review, compact = false }: ReviewCardProps) => {
  return (
    <div
      className={`bg-card rounded-lg border border-border/50 ${compact ? "p-4" : "p-5"}`}
    >
      {/* Header */}
      <div className="flex items-start gap-3 mb-3">
        {/* Avatar */}
        <div
          className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${getAvatarColor(review.author)}`}
        >
          {getInitials(review.author)}
        </div>

        {/* Author info */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className="font-medium text-sm truncate">{review.author}</span>
            {review.localGuide && (
              <span className="text-xs text-muted-foreground bg-muted px-1.5 py-0.5 rounded">
                Local Guide
              </span>
            )}
          </div>
          {review.reviewCount && (
            <p className="text-xs text-muted-foreground">
              {review.reviewCount} avis
            </p>
          )}
        </div>
      </div>

      {/* Rating + Date */}
      <div className="flex items-center gap-2 mb-2">
        <Stars rating={review.rating} />
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      {/* Review text */}
      <p className={`text-sm leading-relaxed ${compact ? "line-clamp-3" : ""}`}>
        {review.text}
      </p>
    </div>
  );
};

export const ReviewCardCompact = ({ review }: { review: Review }) => {
  return (
    <div className="flex-shrink-0 w-[300px] p-4 bg-card rounded-lg border border-border/50">
      {/* Header with avatar */}
      <div className="flex items-center gap-2 mb-2">
        <div
          className={`w-7 h-7 rounded-full flex items-center justify-center text-white text-xs font-medium ${getAvatarColor(review.author)}`}
        >
          {getInitials(review.author)}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium truncate">{review.author}</p>
        </div>
      </div>

      {/* Stars */}
      <div className="flex items-center gap-2 mb-2">
        <Stars rating={review.rating} />
        <span className="text-xs text-muted-foreground">{review.date}</span>
      </div>

      {/* Text */}
      <p className="text-sm line-clamp-2">{review.text}</p>
    </div>
  );
};

export default ReviewCard;
