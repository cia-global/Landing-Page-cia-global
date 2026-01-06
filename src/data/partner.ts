export interface Partner {
  id: string;
  name: string;
  description: string;
  image: string; // ruta local dentro del proyecto
}

export const partnersData: Partner[] = [
  {
    id: "1",
    name: "EDUCAR S.A.S",
    description: "Centro autorizado para la formación y sensibilización vial",
    image: "/images/partners/educar.png",
  },
  {
    id: "2",
    name: "CIA GLOBAL",
    description: "Cursos de concientización vial certificados, enfocados en educación y responsabilidad al conducir",
    image: "/images/partners/global.png",
  },
  {
    id: "3",
    name: "Previal",
    description: "Centro integral de atención PREVIAL S.A.S.",
    image: "/images/partners/previal.png",
  },
  {
    id: "4",
    name: "SETVIAL",
    description: "Educación vial orientada a la seguridad, prevención y cumplimiento de la ley de tránsito",
    image: "/images/partners/setvial.png",
  },
  {
    id: "5",
    name: "VIALSEG",
    description: "Centro de atención vial especializado en cursos para la reducción de sanciones de tránsito",
    image: "/images/partners/vialseg.png",
  },
  {
    id: "6",
    name: "VIP",
    description: "Capacitación vial responsable que promueve una movilidad más segura y consciente",
    image: "/images/partners/vip.png",
  }
];