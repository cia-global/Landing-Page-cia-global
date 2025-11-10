import { Target, Eye, Heart, Award, Shield, Users } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Quiénes Somos</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Líderes en educación y sensibilización vial en Colombia
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Nuestra Historia
              </h2>
              <p className="text-gray-700 text-lg mb-4 leading-relaxed">
                Somos una empresa especializada en la formación y sensibilización vial para infractores vehiculares en Colombia. Con años de experiencia en el sector, nos hemos consolidado como referentes en la educación para la seguridad vial.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nuestro compromiso va más allá del cumplimiento normativo: buscamos generar conciencia real sobre la importancia de conducir con responsabilidad, respeto y conocimiento de las normas de tránsito.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-2xl">
              <div className="space-y-6">
                <div className="flex items-start">
                  <Award className="text-blue-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Certificación Oficial
                    </h3>
                    <p className="text-gray-700">
                      Avalados por las autoridades de tránsito colombianas
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Shield className="text-green-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Instructores Calificados
                    </h3>
                    <p className="text-gray-700">
                      Profesionales con experiencia y formación especializada
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Users className="text-blue-600 mr-4 flex-shrink-0" size={32} />
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-1">
                      Cobertura Nacional
                    </h3>
                    <p className="text-gray-700">
                      Presencia en las principales ciudades del país
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Misión</h3>
              <p className="text-gray-700 leading-relaxed">
                Formar conductores responsables mediante programas educativos de calidad, contribuyendo a la reducción de accidentes de tránsito y promoviendo una cultura de seguridad vial en Colombia.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Eye className="text-green-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Visión</h3>
              <p className="text-gray-700 leading-relaxed">
                Ser la empresa líder en educación vial en Colombia, reconocida por la excelencia de nuestros programas y por nuestro impacto positivo en la seguridad vial del país.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                <Heart className="text-blue-600" size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Valores</h3>
              <ul className="text-gray-700 text-left space-y-2">
                <li>• Responsabilidad social</li>
                <li>• Excelencia educativa</li>
                <li>• Compromiso con la seguridad</li>
                <li>• Integridad y transparencia</li>
                <li>• Respeto y empatía</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">
            Nuestro Compromiso
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-700 text-lg leading-relaxed text-center mb-8">
              Más allá de cumplir con una obligación legal, nuestros cursos buscan generar un cambio real en la forma de conducir de cada participante. Trabajamos con metodologías pedagógicas actualizadas, casos prácticos y contenidos que promueven la reflexión sobre el impacto de nuestras acciones en la vía.
            </p>
            <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white p-8 rounded-2xl text-center">
              <h3 className="text-2xl font-bold mb-4">
                La seguridad vial es responsabilidad de todos
              </h3>
              <p className="text-blue-100 text-lg">
                Juntos construimos vías más seguras para Colombia
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
