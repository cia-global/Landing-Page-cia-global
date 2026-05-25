import { ChevronRight, Newspaper } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { newsData } from '../../data/news';



export default function SectionNotice() {
  
    const [loadingNews, setLoadingNews] = useState(true);
    const activeNews = newsData.filter(news => news.is_active);

    useEffect(() => {
      setLoadingNews(false);
    }, []);

  return (
     <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2 flex items-center">
                <Newspaper className="mr-3 text-yellow-600" size={32} />
                Noticias
              </h2>
              <p className="text-gray-600">Mantente informado sobre educación vial</p>
            </div>
          </div>

          {loadingNews ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-yellow-600"></div>
            </div>
          ) : activeNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 overflow-hidden group"
                >
                  {item.image_url && (
                    <div className="h-48 overflow-hidden">
                      <img
                        src={item.image_url}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <p className="text-sm text-yellow-600 font-semibold mb-2">
                      {new Date(item.published_date).toLocaleDateString('es-CO')}
                    </p>
                    <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {item.description}
                    </p>
                    <Link to={`${item.link || '#'}`} 
                    className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors flex items-center">
                      Leer más
                      <ChevronRight size={16} className="ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-lg p-8 text-center">
              <p className="text-gray-600">No hay noticias disponibles en este momento</p>
            </div>
          )}
        </div>
      </section>
  );
}