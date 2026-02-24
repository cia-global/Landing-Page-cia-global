import { useEffect, useState } from 'react';
import { MapPin, Phone, Clock, ArrowLeft, Calendar } from 'lucide-react';
import { supabase, City, Schedule, CityHours } from '../lib/supabase';
import MapBox from './map/MapBox';
import { useParams, Link } from 'react-router-dom';
import { formatTime12h } from '../utils/time';
import { Helmet } from 'react-helmet-async';




export default function CityDetail() {
  const [city, setCity] = useState<City | null>(null);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loading, setLoading] = useState(true);
  const { cityId } = useParams<{ cityId: string }>();
  const [loadingSchedules, setLoadingSchedules] = useState(false);
  const [selectedDay, setSelectedDay] = useState<string | null>(null);
  const [selectedSchedule, setSelectedSchedule] = useState<Schedule | null>(null);
  const [cityHours, setCityHours] = useState<CityHours[]>([]);
  const [loadingHours, setLoadingHours] = useState(false);

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const dayLabels: Record<string, string> = {
    Monday: 'Lun',
    Tuesday: 'Mar',
    Wednesday: 'Mié',
    Thursday: 'Jue',
    Friday: 'Vie',
    Saturday: 'Sáb',
    Sunday: 'Dom'
  };

  const whatsappNumber = '573207713935';

const whatsappMessage = encodeURIComponent(
  `Hola, quiero información sobre los cursos de concientización vial en la sede de ${city?.name}.`
);

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
       if (data) {
        fetchSchedules(data.id);
        fetchCityHours(data.id);
      }
    } catch (error) {
      console.error('Error fetching city:', error);
    } finally {
      setLoading(false);
    }
  };

   const fetchSchedules = async (cId: string) => {
    try {
      setLoadingSchedules(true);
      const { data, error } = await supabase
        .from('schedules')
        .select('*')
        .eq('city_id', cId)
        .eq('is_active', true)
        .order('day_of_week');

      if (error) throw error;
      setSchedules(data || []);
      if (data && data.length > 0) {
        setSelectedDay(data[0].day_of_week);
      }
    } catch (error) {
      console.error('Error fetching schedules:', error);
    } finally {
      setLoadingSchedules(false);
    }
  };

  const fetchCityHours = async (cId: string) => {
  try {
    setLoadingHours(true);
    const { data, error } = await supabase
      .from('city_business_hours') // ⬅️ Asegúrate que este sea el nombre correcto de tu tabla
      .select('*')
      .eq('city_id', cId)
      .order('applies_to'); // Ordena por tipo: friday, saturday, weekday

    if (error) throw error;
    
    // Filtra horarios vacíos (si start_time o end_time son null)
    const validHours = (data || []).filter(
      hour => hour.start_time && hour.end_time
    );
    setCityHours(validHours);
  } catch (error) {
    console.error('Error fetching city hours:', error);
    setCityHours([]);
  } finally {
    setLoadingHours(false);
  }
};

// 4. FUNCIONES HELPER: Para mostrar los horarios organizados
const getHoursByType = (type: 'weekday' | 'friday' | 'saturday') => {
  return cityHours.filter(hour => hour.applies_to === type);
};

// Formatear hora de 24h a 12h (opcional)
const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  const hour = parseInt(hours);
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = hour % 12 || 12;
  return `${hour12}:${minutes} ${ampm}`;
};

 const weekdayHours = getHoursByType('weekday');
const fridayHours = getHoursByType('friday');
const saturdayHours = getHoursByType('saturday');

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
            <Link
              to="/cities"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              <ArrowLeft size={20} className="mr-2" />
              Volver a Ciudades
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
  {/* Título dinámico por ciudad */}
  <title>Cursos Comparendos {city.name} | Sedes, Horarios y Teléfonos</title>
  
  {/* Descripción dinámica */}
  <meta 
    name="description" 
    content={`Cursos de comparendos en ${city.name}, Colombia. 50% descuento, horarios flexibles, sedes autorizadas. Dirección: ${city.address}. Tel: ${city.phone}`}
  />
  
  {/* Keywords dinámicas */}
  <meta 
    name="keywords" 
    content={`cursos comparendos ${city.name}, CIA ${city.name}, reducir multas ${city.name}, curso tránsito ${city.name}`}
  />
  
  {/* Geo tags específicos */}
  <meta name="geo.placename" content={`${city.name}, Colombia`} />
  <meta name="geo.position" content={`${city.coordinates.lat};${city.coordinates.lng}`} />
  
  {/* Canonical dinámico */}
  <link rel="canonical" href={`https://www.pagocursoscomparendos.com/cities/${city.id}`} />
  
  {/* Open Graph */}
  <meta property="og:title" content={`Cursos Comparendos ${city.name} - Sedes y Horarios`} />
  <meta 
    property="og:description" 
    content={`Encuentra sedes, horarios y contacto en ${city.name}. 50% descuento en comparendos.`}
  />
  <meta property="og:url" content={`https://www.pagocursoscomparendos.com/cities/${city.id}`} />
  <meta property="og:image" content={`https://www.pagocursoscomparendos.com/images/cities/${city.id}.jpg`} />
</Helmet>

    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Link
          to="/cities"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8 transition-colors"
        >
          <ArrowLeft size={20} className="mr-2" />
          Volver a Ciudades
        </Link>
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
             {weekdayHours.map((hour) => (
            <p key={hour.id} className="text-gray-600">
            {fridayHours.length > 0 ? 'Lunes a Jueves: ' : 'Lunes a Viernes: '}{formatTime(hour.start_time)} - {formatTime(hour.end_time)}
            </p>
          ))}
             {/* Viernes */}

          {fridayHours.map((hour) => (
            <p key={hour.id} className="text-gray-600">
             Viernes: {formatTime(hour.start_time)} - {formatTime(hour.end_time)}
            </p>
          ))}

      {/* Sábados */}
          {saturdayHours.map((hour) => (
            <p key={hour.id} className="text-gray-600">
             Sabados: {formatTime(hour.start_time)} - {formatTime(hour.end_time)}
            </p>
          ))}
    
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
       <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="relative h-64 overflow-hidden bg-gray-200">
                      {city.image ? (
                        <img
                          src={city.image}
                          alt={city.name}
                          className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-100 to-green-100">
                          <span className="text-gray-400 text-sm">Sin imagen</span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="h-8"></div>
      <MapBox coordinates={`${city.coordinates.lat},${city.coordinates.lng}`} />
    </div>

  </div>
</div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Horarios Disponibles
                </h2>
                 
                {loadingSchedules ? (
                  <div className="flex justify-center py-8">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
                  </div>
                ) : schedules.length > 0 ? (
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">
                        Selecciona un día de la semana
                      </h3>
                      <div className="grid grid-cols-7 gap-2">
                        {daysOfWeek.map((day) => (
                          <button
                            key={day}
                            onClick={() => setSelectedDay(day)}
                            className={`py-3 px-2 rounded-lg font-semibold transition-all duration-200 text-center text-sm ${
                              selectedDay === day
                                ? 'bg-blue-600 text-white shadow-lg scale-105'
                                : schedules.some((s) => s.day_of_week === day)
                                ? 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                                : 'bg-gray-50 text-gray-400 cursor-not-allowed'
                            }`}
                            disabled={!schedules.some((s) => s.day_of_week === day)}
                          >
                            {dayLabels[day]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {selectedDay && (
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-4">
                          Horarios disponibles para {selectedDay === 'Monday' ? 'Lunes' : selectedDay === 'Tuesday' ? 'Martes' : selectedDay === 'Wednesday' ? 'Miércoles' : selectedDay === 'Thursday' ? 'Jueves' : selectedDay === 'Friday' ? 'Viernes' : selectedDay === 'Saturday' ? 'Sábado' : 'Domingo'}
                        </h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                          {schedules
                            .filter((s) => s.day_of_week === selectedDay)
                            .sort((a, b) => a.start_time.localeCompare(b.start_time))
                            .map((schedule) => (
   
                              <button
                                key={schedule.id}
                                onClick={() => setSelectedSchedule(schedule)}
                                className={`py-3 px-4 border-2 rounded-lg transition-all duration-200 text-center group
                                  ${
                                    selectedSchedule?.id === schedule.id
                                    ? 'bg-gradient-to-r from-blue-50 to-green-50 text-white border-blue-600 shadow-lg'
                                    : 'bg-gradient-to-r from-blue-50 to-green-50 border-blue-200 hover:border-blue-600'
                                    }
                                `}
                              >
                                <p className="font-semibold text-blue-600 group-hover:text-blue-700">
                                  {formatTime12h(schedule.start_time)} - {formatTime12h(schedule.end_time)}
                                </p>
                                <p className="text-xs text-gray-600 mt-1">
                                   {selectedSchedule?.id === schedule.id ? 'Seleccionado' : 'Disponible'}</p>
                              </button>
                            ))}
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <p className="text-gray-600">No hay horarios disponibles</p>
                )}
              </div>
            </div>


            <div>
              <div className="bg-gradient-to-br from-blue-600 to-green-600 text-white rounded-xl shadow-lg p-8 sticky top-24">
                <h2 className="text-2xl font-bold mb-6">¿Listo para agendar?</h2>

                <p className="mb-6 text-blue-100">
                  Elige tu fecha, hora y tipo de curso en nuestra plataforma en línea.
                </p>

                <Link
                  to ={`/appointment?city=${city.id}&day=${selectedDay}&schedule=${selectedSchedule?.id}`} 
                  className="w-full bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center mb-4"
                >
                  <Calendar size={20} className="mr-2" />
                  Agendar Clase
                </Link> 

                  
               <div className="border-t border-blue-400 pt-6">
                 <h3 className="font-semibold mb-3">¿Necesitas ayuda?</h3>
                   <p className="text-sm text-blue-100 mb-3">
                    Contáctanos directamente
                  </p> 
                  <a
                     href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
                    className="block w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-opacity-30 transition-colors mb-2"
                  >
                   Escribenos por WhatsApp
                  </a>
                  <a
                    href="tel:3207713935"
                    className="block w-full bg-white bg-opacity-20 text-white px-4 py-2 rounded-lg text-center font-semibold hover:bg-opacity-30 transition-colors"
                  >
                     Llamar ahora
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
    </>
  );
}