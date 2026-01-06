import { CheckCircle } from 'lucide-react';

interface SuccessMessageProps {
  onNewAppointment: () => void;
}

export function SuccessMessage({ onNewAppointment }: SuccessMessageProps) {
  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="text-green-600" size={48} />
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            ¡Agendamiento Exitoso!
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            Hemos recibido tu solicitud de agendamiento. En breve recibirás un correo electrónico con la confirmación y detalles de tu clase.
          </p>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-8">
            <p className="text-blue-900 font-medium">
              Revisa tu correo electrónico (incluyendo spam) para más información.
            </p>
          </div>
          <button
            onClick={onNewAppointment}
            className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200"
          >
            Hacer otro agendamiento
          </button>
        </div>
      </div>
    </div>
  );
}