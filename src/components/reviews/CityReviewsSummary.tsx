import { Star } from "lucide-react";

type Props = {
  rating: number;
  reviewsCount: number;
};

export default function CityReviewsSummary({
  rating,
  reviewsCount,
}: Props) {

    if (!reviewsCount) return null;

  return (
    <div className="bg-white rounded-xl shadow-md p-5 flex items-center gap-4">
      
      <div className="flex items-center gap-1">
        <Star
          className="fill-yellow-400 text-yellow-400"
          size={22}
        />
        <span className="text-2xl font-bold">
          {rating}
        </span>
      </div>

      <div className="h-10 w-px bg-gray-200" />

      <div>
        <p className="font-semibold text-gray-900">
          {reviewsCount.toLocaleString()}
        </p>

        <p className="text-sm text-gray-500">
          Opiniones verificadas en Google
        </p>
      </div>

    </div>
  );
}