import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import {API_URL} from "../../config/api";



type Review = {
  id: string;
  author_name: string;
  author_photo: string;
  rating: number;
  review_text: string;
  publish_time: string;
};

type Props = {
  cityId?: string;
  rating?: number;
  reviewsCount?: number;
  placeId?: string;
};

export default function CityReviews({
  cityId, rating, reviewsCount, placeId
}: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     if (!cityId) return;
    fetchReviews();
  }, [cityId]);

  const fetchReviews = async () => {
      if (!cityId) {
    console.log("cityId no disponible, abortando fetch");
    setLoading(false);
    return; // 👈 esto evita llamadas con ID vacío
  }
    try { 
      const response = await fetch(
        `${API_URL}/api/city-reviews/${cityId}`
      );
      const result = await response.json();

      setReviews(result || []);
   
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-8">
        Cargando reseñas...
      </div>
    );
  }

  if (!reviews.length) return null;

  return (
   <section className="py-16 bg-gradient-to-b from-slate-50 to-white">
  <div className="max-w-7xl mx-auto px-4">

    {/* Encabezado */}
    <div className="text-center mb-10">

      <div className="flex justify-center items-center gap-2 mb-3">
        <Star
          size={28}
          className="fill-yellow-400 text-yellow-400"
        />

        <span className="text-4xl font-bold text-slate-900">
          {rating}
        </span>
      </div>

      <h2 className="text-3xl font-bold text-slate-900 mb-2">
        Opiniones de nuestros usuarios
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto">
        Basado en{" "}
        <span className="font-bold text-slate-900">
          {reviewsCount?.toLocaleString()}
        </span>{" "}
        opiniones verificadas en Google.
      </p>

      <div className="flex justify-center mt-4">
        <a
          href={`https://search.google.com/local/writereview?placeid=${placeId}`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 px-5 py-2 rounded-lg font-semibold transition"
        >
          <Star size={18} />
          Escribir una reseña
        </a>
      </div>

    </div>

    {/* Reviews */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

      {reviews.map((review) => (

        <div
          key={review.id}
          className="bg-white rounded-2xl shadow-md border border-slate-100 p-6 hover:shadow-xl transition-all duration-300"
        >

          <div className="flex items-center gap-4 mb-4">

            <img
              src={review.author_photo}
              alt={review.author_name}
              className="w-14 h-14 rounded-full border-2 border-slate-100"
            />

            <div>

              <h3 className="font-semibold text-slate-900">
                {review.author_name}
              </h3>

              <div className="flex mt-1">

                {Array.from({
                  length: review.rating,
                }).map((_, index) => (

                  <Star
                    key={index}
                    size={16}
                    className="fill-yellow-400 text-yellow-400"
                  />

                ))}

              </div>

            </div>

          </div>

          <p className="text-gray-600 leading-relaxed text-sm">
            {review.review_text}
          </p>

        </div>

      ))}

    </div>

  </div>
</section>
  );
}