import type { News } from "../../../data/news";
import NewsCard from "./NewsCard";

interface Props {
  news: News[];
}

export default function FeaturedNews({ news }: Props) {
  if (!news.length) return null;

  return (
    <div className="space-y-8">

      {news.map((item) => (
        <NewsCard
          key={item.id}
          news={item}
          featured
        />
      ))}

    </div>
  );
}