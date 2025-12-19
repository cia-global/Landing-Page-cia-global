export interface Partner {
  id: string;
  name: string;
  description: string;
  image: string; // ruta local dentro del proyecto
}

export const partnersData: Partner[] = [
  {
    id: "1",
    name: "AutoSeguros S.A.",
    description: "Empresa líder en seguros vehiculares a nivel nacional.",
    image: "/images/partners/educar.png",
  },
  {
    id: "2",
    name: "ConduFácil",
    description: "Academia de conducción certificada con más de 20 sedes.",
    image: "/images/partners/global.png",
  },
  {
    id: "3",
    name: "MotoRepuestos Plus",
    description: "Distribuidor oficial de repuestos y accesorios para motos.",
    image: "/images/partners/previal.png",
  },
  {
    id: "4",
    name: "MotoRepuestos Plus",
    description: "Distribuidor oficial de repuestos y accesorios para motos.",
    image: "/images/partners/setvial.png",
  },
  {
    id: "5",
    name: "MotoRepuestos Plus",
    description: "Distribuidor oficial de repuestos y accesorios para motos.",
    image: "/images/partners/vialseg.png",
  },
  {
    id: "6",
    name: "MotoRepuestos Plus",
    description: "Distribuidor oficial de repuestos y accesorios para motos.",
    image: "/images/partners/vip.png",
  }
];