export type News = {
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
    id: "news-008",
    title: "Paso a paso para pagar tu comparendo en colombia",
    description:
      "Consulta, plazos, descuentos y el paso a paso para pagar menos usando el SIMIT y el curso pedagógico autorizado.",
    image_url: "/images/news/noticia7.webp",
    published_date: "2026-08-21",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/como-pagar-un-comparendo",
  },
    {
    id: "news-009",
    title: "Paso a paso para pagar tu fotomulta en colombia",
    description:
      "Todo lo que necesita saber: consulta, plazos exactos, descuentos, cambio de infractor e impugnación.",
    image_url: "/images/news/noticia8.webp",
    published_date: "2026-08-21",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/como-pagar-una-fotomulta",
  },
   {
    id: "news-005",
    title: "Tabla Oficial de Comparendos y Fotomultas en Colombia 2026",
    description:
      "Consulte los valores actualizados de las multas de tránsito, las categorías A, B, C, D y E, y conozca cómo acceder hasta al 50% de descuento.",
    image_url: "/images/news/noticia5.png",
    published_date: "2026-07-06",
    is_active: true,
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/tabla-comparendos-2026",
  },
   {
    id: "news-010",
    title: "Nueva sede en Madrid, Cundinamarca: ampliamos nuestra cobertura",
    description:
      "Seguimos creciendo. Ahora contamos con una nueva sede en Madrid, Cundinamarca para ofrecer una mejor atención y facilitar el acceso a nuestros cursos de comparendos y servicios para conductores. Con esta apertura ampliamos nuestra cobertura y reforzamos nuestro compromiso de brindar atención más cercana, rápida y accesible.",
    image_url: "/images/sedes/madrid.webp",
    published_date: "2026-07-28",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/nueva-sede-madrid",
  },
  {
    id: "news-003",
    title: "¿Le Llegó una Fotomulta que No Cometió? Ahora Puede Cambiar el Infractor",
    description:
      "Conozca cómo solicitar el cambio de infractor en fotomultas a través del RUNT y cuándo es posible trasladar la responsabilidad al conductor real.",
    image_url: "/images/news/cambio.png",
    published_date: "2026-06-23",
    is_active: true,
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/cambio-infractor-comparendo",
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

export const newsTotal: News[] = [
    {
    id: "news-001",
    title: "Nueva sede en Bogotá: ampliamos nuestra cobertura",
    description:
      "Seguimos creciendo. Ahora contamos con una nueva sede en Bogotá para ofrecer una mejor atención y facilitar el acceso a nuestros cursos de comparendos y servicios para conductores. Con esta apertura ampliamos nuestra cobertura y reforzamos nuestro compromiso de brindar atención más cercana, rápida y accesible.",
    image_url: "/images/sedes/bogota.webp",
    published_date: "2026-05-21",
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
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/radiografia-accidentalidad",
  },
   {
    id: "news-003",
    title: "RUNT Habilita el Cambio de Infractor en Fotomultas: Así Funciona el Trámite",
    description:
      "Los propietarios de vehículos ya pueden solicitar de forma virtual que determinadas fotomultas sean trasladadas al conductor que realmente cometió la infracción.",
    image_url: "/images/news/cambio.png",
    published_date: "2026-06-22",
    is_active: true,
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/cambio-infractor-comparendo",
  },
  {
    id: "news-004",
    title: "descuento en Comparendos: ¡No te lo pierdas!",
    description:
      "Aprovecha el descuento del 50% en la cancelación de comparendos y fotomultas vigente hasta el 30 de junio.",
    image_url: "/images/news/descuento.png",
    published_date: "2026-06-23",
    is_active: true,
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/descuento-comparendos",
  },
  {
    id: "news-005",
    title: "Tabla Oficial de Comparendos y Fotomultas en Colombia 2026",
    description:
      "Conozca los valores actualizados de las multas de tránsito, las categorías A, B, C, D y E, y conozca cómo acceder hasta al 50% de descuento.",
    image_url: "/images/news/noticia5.png",
    published_date: "2026-06-23",
    is_active: true,
    created_at: "2026-6-22T11:00:00Z",
    link: "/noticias/tabla-comparendos-2026",
  },
 
  {
    id: "news-006",
    title: "Radiografía de la Accidentalidad Vial en Colombia",
    description:
      "Conozca las principales causas de los accidentes de tránsito en Colombia, las cifras más recientes y las acciones necesarias para reducir la siniestralidad vial.",
    image_url: "/images/news/noticia6.png",
    published_date: "2026-05-21",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/radiografia-accidentalidad",
  },
    {
    id: "news-007",
    title: "Nueva sede en Bogotá: ampliamos nuestra cobertura",
    description:
      "Seguimos creciendo. Ahora contamos con una nueva sede en Bogotá para ofrecer una mejor atención y facilitar el acceso a nuestros cursos de comparendos y servicios para conductores. Con esta apertura ampliamos nuestra cobertura y reforzamos nuestro compromiso de brindar atención más cercana, rápida y accesible.",
    image_url: "/images/sedes/bogotaNp.webp",
    published_date: "2026-07-22",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/nueva-sede-bogota-north-point",
  },
    {
    id: "news-008",
    title: "Paso a paso para pagar tu comparendo en colombia",
    description:
      "Consulta, plazos, descuentos y el paso a paso para pagar menos usando el SIMIT y el curso pedagógico autorizado.",
    image_url: "/images/news/noticia7.webp",
    published_date: "2026-08-21",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/como-pagar-un-comparendo",
  },
    {
    id: "news-009",
    title: "Paso a paso para pagar tu fotomulta en colombia",
    description:
      "Todo lo que necesita saber: consulta, plazos exactos, descuentos, cambio de infractor e impugnación.",
    image_url: "/images/news/noticia8.webp",
    published_date: "2026-08-21",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/como-pagar-una-fotomulta",
  },
    {
    id: "news-010",
    title: "Nueva sede en Madrid, Cundinamarca: ampliamos nuestra cobertura",
    description:
      "Seguimos creciendo. Ahora contamos con una nueva sede en Madrid, Cundinamarca para ofrecer una mejor atención y facilitar el acceso a nuestros cursos de comparendos y servicios para conductores. Con esta apertura ampliamos nuestra cobertura y reforzamos nuestro compromiso de brindar atención más cercana, rápida y accesible.",
    image_url: "/images/sedes/madrid.webp",
    published_date: "2026-07-28",
    is_active: true,
    created_at: "2026-05-21T11:00:00Z",
    link: "/noticias/nueva-sede-madrid",
  },
  //   {
  //   id: "news-011",
  //   title: "Nueva sede en Bogotá: ampliamos nuestra cobertura",
  //   description:
  //     "Seguimos creciendo. Ahora contamos con una nueva sede en Bogotá para ofrecer una mejor atención y facilitar el acceso a nuestros cursos de comparendos y servicios para conductores. Con esta apertura ampliamos nuestra cobertura y reforzamos nuestro compromiso de brindar atención más cercana, rápida y accesible.",
  //   image_url: "/images/sedes/madrid.webp",
  //   published_date: "2026-08-'4",
  //   is_active: true,
  //   created_at: "2026-05-21T11:00:00Z",
  //   link: "/noticias/nueva-sede-bogota-fontibon",
  // },
   
 ].reverse();