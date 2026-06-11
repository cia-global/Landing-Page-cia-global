import { useEffect, useState } from "react";
import { Star, MapPin, MessageSquare } from "lucide-react";

const API_URL = import.meta.env.VITE_API_URL;

type ReviewsStats = {
  totalReviews: number;
  averageRating: number;
  totalCities: number;
};

export default function ReviewsStats() {
  const [stats, setStats] = useState<ReviewsStats | null>(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      const response = await fetch(
        `${API_URL}/api/reviews-stats`
      );

      const data = await response.json();

      setStats(data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!stats) return null;

  return (
    <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-12">
          <div className="flex justify-center mb-4">
            <Star
              size={42}
              className="fill-yellow-400 text-yellow-400"
            />
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-3">
            La confianza de miles de colombianos
          </h2>

          <p className="text-slate-300 max-w-2xl mx-auto">
            Opiniones reales verificadas en Google de usuarios que
            han realizado sus cursos en nuestras sedes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
            <MessageSquare
              size={36}
              className="mx-auto mb-3 text-yellow-400"
            />

            <p className="text-4xl font-bold">
              +{stats.totalReviews.toLocaleString()}
            </p>

            <p className="text-slate-300 mt-2">
              Opiniones verificadas
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
            <Star
              size={36}
              className="mx-auto mb-3 fill-yellow-400 text-yellow-400"
            />

            <p className="text-4xl font-bold">
              {Number(stats.averageRating).toFixed(1)}
            </p>

            <p className="text-slate-300 mt-2">
              Calificación promedio
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur rounded-2xl p-8 text-center">
            <MapPin
              size={36}
              className="mx-auto mb-3 text-yellow-400"
            />

            <p className="text-4xl font-bold">
              {stats.totalCities}
            </p>

            <p className="text-slate-300 mt-2">
              Sedes a nivel nacional
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}