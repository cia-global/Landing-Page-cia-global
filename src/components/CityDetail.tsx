import { useEffect, useState } from 'react';
import { MapPin, Phone, Mail, Clock, ArrowLeft, Calendar } from 'lucide-react';
import { supabase, City } from '../lib/supabase';
import MapBox from './map/MapBox';

interface CityDetailProps {
  cityId: string;
  onNavigate: (section: string, cityId?: string) => void;
}

export default function CityDetail({ cityId, onNavigate }: CityDetailProps) {
  const [city, setCity] = useState<City | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCity();
  }, [cityId]);

  const fetchCity = async () => {
    try {
      const { data, error } = await supabase
        .from('cities')
        .select('*')
        .eq('id', cityId)
        .maybeSingle();

      if (error) throw error;
      setCity(data);
    } catch (error) {
      console.error('Error fetching city:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">Cargando información...</p>
        </div>
      </div>
    );
  }

  if (!city) {
    return (
      <div className="pt-16 min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-xl shadow-lg p-8 text-center">
            <p className="text-gray-600 text-lg mb-6">Ciudad no encontrada</p>
            <button
              onClick={() => onNavigate('cities')}
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver a Ciudades
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <button
          onClick={() => onNavigate('cities')}
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver a Ciudades
        </button>
      </div>

      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-4">{city.nameSede}</h1>
              <p className="text-xl text-blue-100">
                Sede de educación y sensibilización vial
              </p>
            </div>
            <div className="w-20 h-20 bg-white bg-opacity-20 rounded-full flex items-center justify-center hidden md:flex">
              <MapPin size={48} className="text-white" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 ">
            <div className="lg:col-span-2">

              <div className="bg-white rounded-xl shadow-md p-8 mb-8">
  <h2 className="text-2xl font-bold text-gray-900 mb-6">
    Información de la Sede
  </h2>

  {/* Contenedor general (izquierda info / derecha mapa) */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* Columna Izquierda: Información */}
    <div className="space-y-6">
      <div className="flex items-start">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <MapPin className="text-blue-600" size={24} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Ubicación
          </h3>
          <p className="text-gray-700 text-lg">{city.address}</p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Phone className="text-green-600" size={24} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Teléfono
          </h3>
          <p className="text-gray-700 text-lg">{city.phone}</p>
          <p className="text-sm text-gray-500 mt-2">
            Llama para más información o reservas
          </p>
        </div>
      </div>

      <div className="flex items-start">
        <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Clock className="text-blue-600" size={24} />
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Horarios de Atención
          </h3>
          <ul className="text-gray-700 space-y-1">
            <li>Lunes a Viernes: 8:00 AM - 6:00 PM</li>
            <li>Sábados: 8:00 AM - 12:00 PM</li>
            <li>Domingos y Festivos: Cerrado</li>
          </ul>
        </div>
      </div>

      <div className="flex items-start">
        {/* <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
          <Mail className="text-green-600" size={24} />
        </div> */}
        {/* <div className="ml-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            Correo Electrónico
          </h3>
          <p className="text-gray-700">info@educacionvial.co</p>
        </div> */}
      </div>
    </div>

    {/* Columna Derecha: Mapa */}
    <div className="w-full">
      <MapBox coordinates={`${city.coordinates.lat},${city.coordinates.lng}`} />
    </div>

  </div>
</div>


              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Cursos Disponibles
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4 py-2">
                    <h3 className="font-semibold text-gray-900">Curso Teórico</h3>
                    <p className="text-gray-600">
                      Formación teórica en normas de tránsito y seguridad vial
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Duración: 4 horas | Precio: $150.000
                    </p>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4 py-2">
                    <h3 className="font-semibold text-gray-900">Curso Práctico</h3>
                    <p className="text-gray-600">
                      Conducción defensiva y manejo práctico
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Duración: 4 horas | Precio: $200.000
                    </p>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4 py-2">
                    <h3 className="font-semibold text-gray-900">Curso Completo</h3>
                    <p className="text-gray-600">
                      Formación integral teórico-práctica en educación vial
                    </p>
                    <p className="text-sm text-gray-500 mt-2">
                      Duración: 8 horas | Precio: $320.000
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">¿Listo para agendar?</h2>

                <p className="mb-6 text-blue-100">
                  Elige tu fecha, hora y tipo de curso en nuestra plataforma en línea.
                </p>

                <button
                  onClick={() => onNavigate('appointment')}
                  className="w-full bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center mb-4"
                >
                  <Calendar size={20} className="mr-2" />
                  Agendar Clase
                </button>

                <div className="border-t border-blue-400 pt-6">
                  <h3 className="font-semibold mb-3">¿Necesitas ayuda?</h3>
                  <p className="text-sm text-blue-100 mb-3">
                    Contáctanos directamente
                  </p>
                  <a
                    href="tel:+576013001234"
                    className="block w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-opacity-30 transition-colors mb-2"
                  >
                    Llamar ahora
                  </a>
                  <a
                    href="mailto:info@educacionvial.co"
                    className="block w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-opacity-30 transition-colors"
                  >
                    Enviar Email
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 mt-6">
                <h3 className="font-bold text-gray-900 mb-4">Información Importante</h3>
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                    <span>Instructores certificados y experimentados</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                    <span>Certificado válido ante autoridades</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                    <span>Metodología práctica y actualizada</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2 flex-shrink-0">✓</span>
                    <span>Flexibilidad en horarios</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}