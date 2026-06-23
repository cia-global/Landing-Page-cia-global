type News = {
  id: string;
  title: string;
  description: string;
  image_url?: string;
  published_date: string;
  link?: string;
  is_active: boolean;
  created_at: string;
};


export const newsData: News[] = [
  {
    id: "news-003",
    title: "¿Le Llegó una Fotomulta que No Cometió? Ahora Puede Cambiar el Infractor",
    description:
      "Conozca cómo solicitar el cambio de infractor en fotomultas a través del RUNT y cuándo es posible trasladar la responsabilidad al conductor real.",
    image_url: "/images/news/cambio.png",
    published_date: "2026-06-22",
    is_active: true,
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/cambio-infractor-comparendo",
  },
  {
    id: "news-004",
    title: "Descuento en Comparendos: ¡No te lo pierdas!",
    description:
      "Conozca cómo solicitar el cambio de infractor en fotomultas a través del RUNT y cuándo es posible trasladar la responsabilidad al conductor real.",
    image_url: "/images/news/descuento.png",
    published_date: "2026-06-22",
    is_active: true,
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/descuento-comparendos",
  },
  {
    id: "news-001",
    title: "Nueva sede en Bogotá: ampliamos nuestra cobertura",
    description:
      "Seguimos creciendo. Ahora contamos con una nueva sede en Bogotá para ofrecer una mejor atención y facilitar el acceso a nuestros cursos de comparendos y servicios para conductores. Con esta apertura ampliamos nuestra cobertura y reforzamos nuestro compromiso de brindar atención más cercana, rápida y accesible.",
    image_url: "/images/sedes/bogota.png",
    published_date: "2026-05-25",
    is_active: true,
    created_at: "2026-05-21T10:00:00Z",
    link: "/noticias/nueva-sede-bogota-suba",
  },

  {
    id: "news-002",
    title: "Ahora puedes adquirir tu SOAT en nuestras sedes",
    description:
      "Pensando en brindar más soluciones a nuestros usuarios, ahora ofrecemos la venta de SOAT en nuestras sedes. Consulta disponibilidad y recibe asesoría personalizada para adquirir tu seguro obligatorio de manera rápida, segura y con acompañamiento en el proceso.",
    image_url: "/images/sedes/soat.png",
    published_date: "2026-05-21",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/soat-nacional",
  },
   

];