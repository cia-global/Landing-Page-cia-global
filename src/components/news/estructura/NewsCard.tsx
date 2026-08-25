import { Link } from "react-router-dom";
import { CalendarDays, ArrowRight } from "lucide-react";
import type { News } from "../../../data/news";

interface Props {
  news: News;
  featured?: boolean;
}

export default function NewsCard({
  news,
  featured = false,
}: Props) {
  return (
    <article
      className={`
      group
      overflow-hidden
      rounded-3xl
      bg-white
      shadow-sm
      border
      border-slate-200
      hover:shadow-xl
      transition-all
      duration-300
      ${
        featured
          ? "lg:grid lg:grid-cols-2"
          : ""
      }
      `}
    >
      {/* Imagen */}

      <div className="overflow-hidden">
        <img
          src={news.image_url}
          alt={news.title}
          loading="lazy"
          className={`
          w-full
          object-cover
          transition-transform
          duration-500
          group-hover:scale-105
          ${
            featured
              ? "h-full min-h-[320px]"
              : "h-56"
          }
          `}
        />
      </div>

      {/* Contenido */}

      <div className="p-8 flex flex-col">

        {/* Fecha */}

        <div className="flex items-center gap-2 text-sm text-gray-500">

          <CalendarDays size={16} />

          {new Date(
            news.published_date
          ).toLocaleDateString("es-CO", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}

        </div>

        {/* Título */}

        <h2
          className={`
          mt-4
          font-bold
          text-slate-900
          group-hover:text-blue-700
          transition-colors
          ${
            featured
              ? "text-3xl"
              : "text-xl"
          }
          `}
        >
          {news.title}
        </h2>

        {/* Descripción */}

        <p
          className={`
          mt-4
          text-gray-600
          leading-7
          ${
            featured
              ? "text-lg"
              : "text-base"
          }
          `}
        >
          {news.description}
        </p>

        <div className="flex-grow" />

        {/* Botón */}

        <Link
          to={news.link}
          className="
          mt-8
          inline-flex
          items-center
          gap-2
          font-semibold
          text-blue-700
          hover:text-blue-900
          transition-colors
          "
        >
          Leer artículo

          <ArrowRight
            size={18}
            className="
            transition-transform
            group-hover:translate-x-1
            "
          />

        </Link>

      </div>
    </article>
  );
}