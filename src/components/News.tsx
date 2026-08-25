import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  Newspaper,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

import { newsTotal } from "../data/news";
import FeaturedNews from "./news/estructura/FeaturedNews";
import NewsGrid from "./news/estructura/NewsGrid";
import NewsSidebar from "./news/estructura/NewsSidebar";
import NewsCTA from "./news/estructura/NewsCTA";

export default function News() {
  const featured = newsTotal.slice(0, 2);
  const latest = newsTotal.slice(2);

  return (
    <>
      <Helmet>
        <title>
          Noticias de Tránsito y Seguridad Vial | Cursos Comparendos
        </title>

        <meta
          name="description"
          content="Noticias, guías y novedades sobre comparendos, fotomultas, SOAT, licencias de conducción, seguridad vial y normatividad en Colombia."
        />

        <link
          rel="canonical"
          href="https://www.pagocursoscomparendos.com/noticias"
        />
      </Helmet>

      <main className="bg-gray-50 min-h-screen">

        {/* HERO */}

        <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-slate-800 to-blue-900 pt-8">

          <div className="absolute inset-0 opacity-10">
            <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-yellow-400 blur-3xl" />
            <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-blue-500 blur-3xl" />
          </div>

          <div className="relative container mx-auto px-6 py-20">

            {/* Breadcrumb */}

            <nav className="flex items-center gap-2 text-sm text-gray-300 mb-2">

              <Link
                to="/"
                className="hover:text-yellow-400 transition"
              >
                Inicio
              </Link>

              <ChevronRight size={16} />

              <span className="text-white">
                Noticias
              </span>

            </nav>

            <div className="max-w-3xl">

              <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/10 border border-yellow-400/30 px-4 py-2 text-yellow-300 mb-2">

                <Newspaper size={18} />

                <span className="text-sm font-medium">
                  Centro de Información Vial
                </span>

              </div>

              <h1 className="text-5xl font-extrabold leading-tight text-white">

                Noticias y Guías sobre Comparendos, Fotomultas y Seguridad Vial

              </h1>

              <p className="mt-6 text-lg text-gray-300 leading-relaxed">

                Manténgase informado con artículos actualizados sobre
                comparendos, fotomultas, SOAT, licencias de conducción,
                seguridad vial y todos los cambios de la normatividad
                colombiana.

              </p>

              <div className="mt-8 flex flex-wrap gap-3">

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  Comparendos
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  Fotomultas
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  Licencias
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  SOAT
                </span>

                <span className="rounded-full bg-white/10 px-4 py-2 text-sm text-white">
                  Seguridad Vial
                </span>

              </div>

            </div>

          </div>

        </section>

        {/* CONTENIDO */}

        <section className="container mx-auto px-6 py-16">

          <div className="grid lg:grid-cols-4 gap-12">

            <div className="lg:col-span-3 space-y-14">

              {/* Noticias destacadas */}

              <section>

                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h2 className="text-3xl font-bold text-slate-900">

                      Noticias Destacadas

                    </h2>

                    <p className="text-gray-600 mt-2">

                      Los artículos más recientes publicados por nuestro
                      equipo editorial.

                    </p>

                  </div>

                </div>

                <FeaturedNews news={featured} />

              </section>

              {/* Todas */}

              <section>

                <div className="flex items-center justify-between mb-8">

                  <h2 className="text-3xl font-bold text-slate-900">

                    Todas las Noticias

                  </h2>

                  <span className="text-sm font-medium text-blue-700">

                    {newsTotal.length} artículos publicados

                  </span>

                </div>

                <NewsGrid news={latest} />

              </section>

            </div>

            {/* Sidebar */}

            <aside>

              <NewsSidebar news={newsTotal} />

            </aside>

          </div>

        </section>

        {/* CTA */}

        <NewsCTA />

      </main>
    </>
  );
}