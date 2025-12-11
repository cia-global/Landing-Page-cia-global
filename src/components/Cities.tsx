import { useEffect, useState } from 'react';
import { MapPin, Phone, Search, ChevronRight } from 'lucide-react';
import { supabase, City } from '../lib/supabase';
import { Link } from 'react-router-dom';



export default function Cities() {
  const [cities, setCities] = useState<City[]>([]);
  const [filteredCities, setFilteredCities] = useState<City[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCities();
  }, []);

  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredCities(cities);
    } else {
      const filtered = cities.filter((city) =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCities(filtered);
    }
  }, [searchTerm, cities]);

  const fetchCities = async () => {
    try {
      const { data, error } = await supabase
        .from('cities')
        .select('*')
        .eq('is_active', true)
        .order('name');

      if (error) throw error;
      setCities(data || []);
      setFilteredCities(data || []);
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-16">
      <section className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Nuestras Sedes</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Cobertura nacional con presencia en las principales ciudades de Colombia
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Buscar ciudad..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          {loading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
              <p className="text-gray-600 mt-4">Cargando ciudades...</p>
            </div>
          ) : filteredCities.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                {searchTerm
                  ? 'No se encontraron ciudades con ese nombre'
                  : 'No hay ciudades disponibles'}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCities.map((city) => (
                <div
                  key={city.id}
                  className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 p-6"
                >
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{city.name}</h3>
                      <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mt-1">
                        Disponible
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-start">
                      <MapPin className="text-gray-400 mr-3 flex-shrink-0 mt-1" size={18} />
                      <p className="text-gray-700">{city.address}</p>
                    </div>
                    <div className="flex items-center">
                      <Phone className="text-gray-400 mr-3 flex-shrink-0" size={18} />
                      <p className="text-gray-700">{city.phone}</p>
                    </div>
                  </div>

                  <div className="flex gap-3 mt-6">
                    <Link
                      to={`/cities/${city.id}`}
                      key={city.id}
                      className="flex-1 bg-white border-2 border-blue-600 text-blue-600 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-200 flex items-center justify-center"
                    >
                      Ver detalles
                      <ChevronRight size={18} className="ml-1" />
                    </Link>
                    {/* <button
                      onClick={() => onNavigate('appointment')}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 text-white py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
                    >
                      Agendar
                    </button> */}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            ¿No encuentras tu ciudad?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Estamos en constante expansión. Contáctanos para conocer próximas aperturas o solicitar información sobre tu localidad.
          </p>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
          >
            Contáctanos
          </Link>
        </div>
      </section>
    </div>
  );
}
