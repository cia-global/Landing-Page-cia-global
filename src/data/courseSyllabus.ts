type Modulo = {
  modulo: string;
  sesiones: string[];
};


export const courseSyllabus: Record<string, Modulo[]> = {
  "CURSO PARA CONDUCTORES DE VEHÍCULOS DE EMERGENCIA": [
    {
      modulo: "Módulo 1. Conceptos generales",
      sesiones: [
        "Normatividad para vehículos de emergencia",
        "Emergencias y siniestralidad vial en contexto global y local",
        "Equidad de género, inclusión y prevención de riesgos sociales",
      ],
    },

    {
      modulo: "Módulo 2. Manejo de estrés y situaciones de riesgo",
      sesiones: [
        "Introducción al estrés en la conducción",
        "Efectos del estrés en el cuerpo y la mente",
        "Inteligencia emocional y autocontrol",
        "Estrategias de afrontamiento",
        "Situaciones de riesgo frecuentes y primeros auxilios psicológicos",
        "Plan personal de manejo del estrés y aplicación de PAP en escenarios críticos",
      ],
    },

    {
      modulo: "Módulo 3. Conducción segura",
      sesiones: [
        "Conceptos básicos de los vehículos de emergencia",
        "Habilidades de conducción segura",
        "Técnicas de manejo defensivo",
        "Mecánica básica y mantenimiento preventivo para vehículos de emergencia",
      ],
    },

    {
      modulo: "Módulo 4. Protocolos de primeros auxilios y conductas pos-siniestro",
      sesiones: [
        "Introducción a los primeros auxilios",
        "Primeros auxilios",
      ],
    },
  ],

  "Curso Comparendos": [
    {
      modulo: "Módulo único",
      sesiones: [
        "Normatividad vial",
        "Comportamiento ciudadano",
        "Seguridad vial",
      ],
    },
  ],
};