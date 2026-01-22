import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import{Link, useLocation} from 'react-router-dom';


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { id: 'home', label: 'Inicio', path: '/' },
    { id: 'about', label: 'Quiénes Somos', path: '/about' },
    { id: 'cities', label: 'Ciudades', path: '/cities' },
    { id: 'appointment', label: 'Agendar Curso', path: '/appointment' },
    { id: 'contact', label: 'Contacto', path: '/contact' },
  ];

  const isActive = (path: string, itemId: string) => {
    // Para el home, solo activar si estamos exactamente en "/"
    if (path === '/') {
      return location.pathname === '/';
    }
    
    // Para "Ciudades", activar si estamos en /cities o /cities/:cityId
    if (itemId === 'cities') {
      return location.pathname.startsWith('/cities');
    }
    
    // Para las demás rutas, verificar si la ruta actual comienza con el path
    return location.pathname.startsWith(path);
  };
  return (
    <header className="bg-white shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center cursor-pointer">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-green-500 rounded-full flex items-center justify-center">
             
      <img
        src="/images/icon.png"
        alt="Banner decorativo"
        // className="absolute right-0 top-0 h-full w-5.1/12 object-contain opacity-30 md:opacity-40"
      />
              {/* <span className="text-white font-bold text-xl">CC</span> */}
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-blue-900">Cursos Comparendos</h1>
              <p className="text-xs text-gray-600">Seguridad y Responsabilidad</p>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.id}
                to={item.path || '#'}
                className={`font-medium transition-colors duration-200 ${
                  isActive(item.path!, item.id)
                    ? 'text-blue-600 border-b-2 border-blue-600 pb-1'
                    : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-3">
              {menuItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path!}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium transition-colors duration-200 text-left py-2 ${
                    isActive(item.path!, item.id)
                      ? 'text-blue-600 font-semibold border-l-4 border-blue-600 pl-3'
                      : 'text-gray-700 hover:text-blue-600 pl-3'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}