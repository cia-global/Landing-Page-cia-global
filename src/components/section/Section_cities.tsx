import {  MapPin, Clock, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { supabase, City } from '../../lib/supabase';

interface SectionCitiesProps {
  onNavigate: (section: string) => void;
}


export default function SectionCities ({ onNavigate }: SectionCitiesProps) {

     const [cities, setCities] = useState<City[]>([]);
  const [loadingCities, setLoadingCities] = useState(true);

  useEffect(() => {
    fetchCities();
  }, []);

  const fetchCities = async () => {
    try {
      const { data, error } = await supabase
        .from('cities')
        .select('*')
        .eq('is_active', true)
        .order('name')
        .limit(6);

      if (error) throw error;
      setCities(data || []);
    } catch (error) {
      console.error('Error fetching cities:', error);
    } finally {
      setLoadingCities(false);
    }
  };

    return (
        <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-gray-900">
            Nuestras Sedes
          </h2>
          <p className="text-center text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
            Disponemos de cobertura en las principales ciudades de Colombia
          </p>

          {loadingCities ? (
            <div className="flex justify-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {cities.map((city) => (
                <div
                  key={city.id}
                  className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900">{city.name}</h3>
                    <MapPin className="text-green-600" size={24} />
                  </div>
                  <p className="text-sm text-gray-600 flex items-start mb-3">
                    <MapPin size={16} className="mr-2 mt-0.5 text-gray-400 flex-shrink-0" />
                    {city.address}
                  </p>
                  <p className="text-sm text-gray-600 flex items-center">
                    <Clock size={16} className="mr-2 text-gray-400" />
                    {city.phone}
                  </p>
                </div>
              ))}
            </div>
          )}

          <div className="text-center">
            <button
              onClick={() => onNavigate('cities')}
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
            >
              Ver todas las ciudades
              <ArrowRight size={20} className="ml-2" />
            </button>
          </div>
        </div>
      </section>
    );
   };

   