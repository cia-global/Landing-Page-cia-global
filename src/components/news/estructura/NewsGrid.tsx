import type { News } from "../../../data/news";
import NewsCard from "./NewsCard";

interface Props {
  news: News[];
}

export default function NewsGrid({ news }: Props) {
  if (!news.length) {
    return (
      <div className="rounded-3xl border border-dashed border-gray-300 bg-white py-20 text-center">
        <h3 className="text-2xl font-bold text-gray-700">
          No hay noticias disponibles
        </h3>

        <p className="mt-3 text-gray-500">
          Próximamente publicaremos nuevas noticias y artículos sobre
          comparendos, fotomultas y seguridad vial.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-2">
      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
        />
      ))}
    </div>
  );
}