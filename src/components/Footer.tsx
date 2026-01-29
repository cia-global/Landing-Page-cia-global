import { Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Educación Vial</h3>
            <p className="text-gray-400 mb-4">
              Comprometidos con la seguridad vial y la formación de conductores responsables en Colombia.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/profile.php?id=61583609490273"     
                  target="_blank"
                  
                  aria-label="Visítanos en Facebook" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.instagram.com/cursoscomparendos/" target="_blank" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              {/* <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a> */}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone size={18} className="mr-3 text-green-500" />
                <span className="text-gray-400">+57 3207713935</span>
              </div>
              <div className="flex items-center">
                <Mail size={18} className="mr-3 text-green-500" />
                <span className="text-gray-400">sistemasciaglobal@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin size={18} className="mr-3 text-green-500" />
                <span className="text-gray-400">Cobertura Nacional</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/terms-and-conditions"
                className="text-gray-400 hover:text-white transition-colors">
                  Términos y Condiciones
                </Link>
               
              </li>
              <li>
                <Link 
                  to="/privacy-policy"
                className="text-gray-400 hover:text-white transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact#more-questions"
                className="text-gray-400 hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2026 Educación Vial Colombia. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
