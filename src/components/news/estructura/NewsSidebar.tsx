import { Link } from "react-router-dom";
import {
  Clock3,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import type { News } from "../../../data/news";

interface Props {
  news: News[];
}

export default function NewsSidebar({ news }: Props) {
  return (
    <div className="space-y-8 sticky top-28">

      {/* Últimas noticias */}

      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

        <h3 className="text-xl font-bold mb-6">
          Últimas noticias
        </h3>

        <div className="space-y-5">

          {news.slice(0, 5).map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="group flex gap-4"
            >
              <img
                src={item.image_url}
                alt={item.title}
                className="w-20 h-20 rounded-xl object-cover"
              />

              <div>

                <div className="flex items-center gap-1 text-xs text-gray-500 mb-2">

                  <Clock3 size={12} />

                  {new Date(
                    item.published_date
                  ).toLocaleDateString("es-CO")}

                </div>

                <h4 className="font-semibold text-sm text-slate-800 group-hover:text-blue-700 transition line-clamp-3">

                  {item.title}

                </h4>

              </div>

            </Link>
          ))}

        </div>

      </div>

      {/* Guías */}

      <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

        <h3 className="text-xl font-bold mb-6">
          Guías recomendadas
        </h3>

        <div className="space-y-4">

          <Link
            to="/noticias/descuento-comparendos"
            className="flex items-center justify-between group"
          >
            <span className="flex items-center gap-2">
              <BookOpen size={18} />
              Descuento en comparendos
            </span>

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </Link>

          <Link
            to="/noticias/tabla-comparendos-2026"
            className="flex items-center justify-between group"
          >
            <span className="flex items-center gap-2">
              <BookOpen size={18} />
              Tabla de comparendos
            </span>

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </Link>

          <Link
            to="/noticias/pagar-comparendo"
            className="flex items-center justify-between group"
          >
            <span className="flex items-center gap-2">
              <BookOpen size={18} />
              Cómo pagar un comparendo
            </span>

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </Link>

          <Link
            to="/noticias/pagar-fotomulta"
            className="flex items-center justify-between group"
          >
            <span className="flex items-center gap-2">
              <BookOpen size={18} />
              Cómo pagar una fotomulta
            </span>

            <ChevronRight
              size={18}
              className="group-hover:translate-x-1 transition"
            />
          </Link>

        </div>

      </div>

    </div>
  );
}