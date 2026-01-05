import { Calendar, Clock, MapPin, BookOpen, User, Phone, Mail, CreditCard, FileText } from 'lucide-react';
import { City, CourseType, Schedule } from '../../lib/supabase';
import { AppointmentFormData } from '../Appointment';
import {CourseInfo} from './CourseInfo';
import FormInput from './FormInput';
import {FormSelect} from './FormSelect';
import { formatTime12h } from '../../utils/time';

interface AppointmentFormProps {
  formData: AppointmentFormData;
  cities: City[];
  courseTypes: CourseType[];
  cityId: string | null;
  schedules: Schedule[];
  submitting: boolean;
  canSelectSchedule: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function AppointmentForm({
  formData,
  cities,
  schedules,
  courseTypes,
  submitting,
  onSubmit,
  canSelectSchedule,
  onChange,
}: AppointmentFormProps) {
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const selectedCourse = courseTypes.find((c) => c.id === formData.courseTypeId);
  const selectedCity = cities.find((c) => c.id === formData.cityId);

  // Formatear fecha legible
  const formatDate = (dateString: string) => {
    if (!dateString) return '';
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('es-CO', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  // Verificar si el formulario está completo para mostrar el resumen
  const isFormComplete = 
    formData.cityId && 
    formData.courseTypeId && 
    formData.appointmentDate && 
    formData.appointmentTime &&
    formData.fullName &&
    formData.idNumber &&
    formData.citationNumber &&
    formData.phone &&
    formData.email;

  return (
    <form onSubmit={onSubmit} className="space-y-6">
      {/* Ciudad y Tipo de Curso */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormSelect
          id="cityId"
          name="cityId"
          label="Ciudad / Sede *"
          value={formData.cityId}
          onChange={onChange}
          required
        >
          <option value="">Selecciona una ciudad</option>
          {cities.map((city) => (
            <option key={city.id} value={city.id}>
              {city.name}
            </option>
          ))}
        </FormSelect>

        <FormSelect
          id="courseTypeId"
          name="courseTypeId"
          label="Tipo de Curso *"
          value={formData.courseTypeId}
          onChange={onChange}
          required
        >
          <option value="">Selecciona un curso</option>
          {courseTypes.map((course) => (
            <option key={course.id} value={course.id}>
              {course.name} - ${course.price.toLocaleString()}
            </option>
          ))}
        </FormSelect>
      </div>

      {/* Información del Curso */}
      {selectedCourse && <CourseInfo course={selectedCourse} />}

      {/* Fecha y Hora */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          type="date"
          id="appointmentDate"
          name="appointmentDate"
          label={
            <>
              <Calendar className="inline mr-2" size={16} />
              Fecha *
            </>
          }
          value={formData.appointmentDate}
          onChange={onChange}
          min={getMinDate()}
          required
        />

        <FormSelect
          id="appointmentTime"
          name="appointmentTime"
          disabled={!canSelectSchedule}
          label={
            <>
              <Clock className="inline mr-2" size={16} />
              Hora *
            </>
          }
          value={formData.appointmentTime}
          onChange={onChange}
          required
        >
          <option value="">Selecciona un horario</option>
          {schedules.map((schedule) => (
            <option key={schedule.id} value={schedule.start_time}>
              {formatTime12h(schedule.start_time)}
            </option>
          ))}
        </FormSelect>
      </div>

      {/* Nombre Completo */}
      <FormInput
        type="text"
        id="fullName"
        name="fullName"
        label="Nombre Completo *"
        value={formData.fullName}
        onChange={onChange}
        placeholder="Nombre Apellido"
        required
      />

      {/* Cédula y Comparendo */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          type="text"
          id="idNumber"
          name="idNumber"
          label="Número de Cédula *"
          value={formData.idNumber}
          onChange={onChange}
          placeholder="1234567890"
          required
        />

        <FormInput
          type="text"
          id="citationNumber"
          name="citationNumber"
          label="Número de Comparendo *"
          value={formData.citationNumber}
          onChange={onChange}
          placeholder="ABC123456"
          required
        />
      </div>

      {/* Teléfono y Email */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <FormInput
          type="tel"
          id="phone"
          name="phone"
          label="Teléfono *"
          value={formData.phone}
          onChange={onChange}
          placeholder="3001234567"
          required
        />

        <FormInput
          type="email"
          id="email"
          name="email"
          label="Correo Electrónico *"
          value={formData.email}
          onChange={onChange}
          placeholder="correo@ejemplo.com"
          required
        />
      </div>

      {/* Resumen del Agendamiento */}
      {isFormComplete && (
        <div className="bg-gradient-to-br from-blue-50 to-green-50 border-2 border-blue-200 rounded-xl p-6 mt-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <FileText className="mr-2 text-blue-600" size={24} />
            Resumen de tu Agendamiento
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Información del Curso */}
            <div className="space-y-3">
              <div className="flex items-start">
                <BookOpen className="mr-3 text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Curso</p>
                  <p className="text-gray-900 font-semibold">{selectedCourse?.name}</p>
                  <p className="text-green-600 font-bold">${selectedCourse?.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-start">
                <MapPin className="mr-3 text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Sede</p>
                  <p className="text-gray-900 font-semibold">{selectedCity?.name}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Calendar className="mr-3 text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Fecha</p>
                  <p className="text-gray-900 font-semibold capitalize">{formatDate(formData.appointmentDate)}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="mr-3 text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Hora</p>
                  <p className="text-gray-900 font-semibold">{formatTime12h(formData.appointmentTime)}</p>
                </div>
              </div>
            </div>

            {/* Información Personal */}
            <div className="space-y-3">
              <div className="flex items-start">
                <User className="mr-3 text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Nombre</p>
                  <p className="text-gray-900 font-semibold">{formData.fullName}</p>
                </div>
              </div>

              <div className="flex items-start">
                <CreditCard className="mr-3 text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Cédula</p>
                  <p className="text-gray-900 font-semibold">{formData.idNumber}</p>
                </div>
              </div>

              <div className="flex items-start">
                <FileText className="mr-3 text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Comparendo</p>
                  <p className="text-gray-900 font-semibold">{formData.citationNumber}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Phone className="mr-3 text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Teléfono</p>
                  <p className="text-gray-900 font-semibold">{formData.phone}</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="mr-3 text-green-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-sm text-gray-600 font-medium">Email</p>
                  <p className="text-gray-900 font-semibold break-all">{formData.email}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
            <p className="text-sm text-yellow-800">
              ⚠️ Por favor verifica que todos los datos sean correctos antes de confirmar tu agendamiento.
            </p>
          </div>
        </div>
      )}

      {/* Botón de Envío */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98]"
      >
        {submitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Procesando...
          </span>
        ) : (
          '✓ Confirmar Agendamiento'
        )}
      </button>
    </form>
  );
}