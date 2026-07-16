type SocialLink = {
  icon: string;
  name: string;
  handle: string;
  url: string;
  bg: string;
  color: string;
};

const redes: SocialLink[] = [
  {
    icon: "images/logos/instagram.webp",
    name: "Instagram",
    handle: "@cursoscomparendos",
    url: "https://instagram.com/cursoscomparendos",
    bg: "bg-pink-50",
    color: "text-pink-700",
  },
  {
    icon: "images/logos/facebook.webp",
    name: "Facebook",
    handle: "Cursos Comparendos Colombia",
    url: "https://www.facebook.com/profile.php?id=61583609490273",
    bg: "bg-indigo-50",
    color: "text-indigo-700",
  },
  {
    icon: "images/logos/tictok.webp",
    name: "TikTok",
    handle: "Cursos Comparendos",
    url: "https://www.tiktok.com/@cursoscomparendo?_r=1&_t=ZS-97SDToaZtV2",
    bg: "bg-orange-50",
    color: "text-orange-700",
  },
  {
    icon: "images/logos/youtube.webp",
    name: "YouTube",
    handle: "Cursos Comparendos",
    url: "https://www.youtube.com/channel/UCoR_HQ6OObzuGngwrc4HGhQ",
    bg: "bg-green-50",
    color: "text-green-700",
  },
];

// Reemplaza VIDEO_ID con el ID real de YouTube cuando lo tengas
const YOUTUBE_VIDEO_ID = "ENt6KXsgIYM";

export default function VideoRedesSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* --- MÓVIL: título arriba, video, redes abajo ---
            --- DESKTOP: video izquierda | título + redes derecha --- */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 items-start">

          {/* Título visible solo en móvil (encima del video) */}
          <div className="lg:hidden">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span>📲</span> Síguenos y aprende más
            </p>
            <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
              ¿Sabías que los cursos ilegales pueden costarte más caro?
            </h2>
            <p className="text-gray-500">
              Infórmate sobre los riesgos de contratar centros no autorizados
              y por qué es importante elegir un curso certificado.
            </p>
          </div>

          {/* Video vertical — izquierda en desktop, centro en móvil */}
          <div className="flex justify-center lg:justify-end lg:mr-24">
            <div className="relative w-[260px] sm:w-[300px] lg:w-[320px] aspect-[9/16] bg-black rounded-[24px] overflow-hidden border-[6px] border-gray-900 shadow-2xl">
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}`}
                className="absolute inset-0 w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                title="Video Cursos Comparendos"
              />
            </div>
          </div>

          {/* Columna derecha — título + redes en desktop */}
          <div className="flex flex-col gap-6">

            {/* Título visible solo en desktop (derecha, encima de las redes) */}
            <div className="hidden lg:block">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-3 flex items-center gap-2">
                <span>📲</span> Síguenos y aprende más
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-3">
                ¿Sabías que los cursos ilegales pueden costarte más caro?
              </h2>
              <p className="text-gray-500">
                Infórmate sobre los riesgos de contratar centros no autorizados
                y por qué es importante elegir un curso certificado.
              </p>
            </div>

            {/* Grid 2x2 de redes */}
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
                Encuéntranos en redes
              </p>
              <div className="grid grid-cols-2 gap-3">
                {redes.map((r) => (
                  <a
                    key={r.name}
                    href={r.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center justify-center gap-2 bg-white border border-gray-100 rounded-2xl px-4 py-5 hover:border-gray-300 hover:shadow-sm transition-all duration-200 text-center"
                  >
                    <div className={`w-12 h-12 rounded-xl ${r.bg} flex items-center justify-center`}>
                      <img
                        src={`/${r.icon}`}
                        alt={r.name}
                        className="w-20 h-20 object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                      <p className="text-gray-400 text-xs mt-0.5">{r.handle}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}