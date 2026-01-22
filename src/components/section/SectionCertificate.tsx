import { CheckCircle } from 'lucide-react';

interface Certification {
  title: string;
  issuer: string;
  year: string;
  image: string;
  color: string;
}

export default function SectionCertificate() {

     const certifications: Certification[] = [
        {
          title: 'Certificación Ministerio de Transporte',
          issuer: 'Ministerio de Transporte - Colombia',
          year: '2024',
          image: '/images/certification/iconmin.png',
          color: 'bg-white',
        },
        {
          title: 'Certificación ISO 9001',
          issuer: 'Calidad en Servicios de Capacitación',
          year: '2023',
          image: '/images/certification/iconiso.png',
          color: 'bg-white',
        },
        {
          title: 'Certificación ACW',
          issuer: 'Certificacion de escuelas',
          year: '2024',
          image: '/images/certification/iconacw.png',
          color: 'bg-white',
        },
        {
          title: 'Certificación ONAC',
          issuer: 'Organismo Nacional de Acreditación de Colombia',
          year: '2023',
          image: '/images/certification/icononac.jpg',
          color: 'bg-white',
        },
      ];
    

    return (
         <section className="bg-gradient-to-br from-gray-50 to-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Nuestras Certificaciones
            </h2>
            <p className="text-lg text-gray-600">
              Avalados por las principales autoridades de tránsito y movilidad en Colombia
            </p>
          </div>

          {/* Certificaciones en tarjetas horizontales compactas */}
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden"
              >
                <div className="flex items-center gap-4 p-4">
                  {/* Logo de la certificadora - LO MÁS DESTACADO */}
                  <div className={`flex-shrink-0 w-24 h-24 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center shadow-lg group-hover:scale-105 transition-transform duration-300`}>
                      <img
                      src={cert.image}
                      alt="Logo de la certificadora"
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Información de la certificación */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-semibold">
                        <CheckCircle className="w-3 h-3" />
                        {cert.year}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}