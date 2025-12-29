import { Calendar, Clock } from 'lucide-react';
import { City, CourseType } from '../../lib/supabase';
import { AppointmentFormData } from '../Appointment';
import {CourseInfo} from './CourseInfo';
import FormInput from './FormInput';
import {FormSelect} from './FormSelect';

interface AppointmentFormProps {
  formData: AppointmentFormData;
  cities: City[];
  courseTypes: CourseType[];
  cityId: string | null;
  submitting: boolean;
  onSubmit: (e: React.FormEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
}

export default function AppointmentForm({
  formData,
  cities,
  cityId,
  courseTypes,
  submitting,
  onSubmit,
  onChange,
}: AppointmentFormProps) {
  const getMinDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  const selectedCourse = courseTypes.find((c) => c.id === formData.courseTypeId);

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
          <option value="">Selecciona una hora</option>
          <option value="08:00">08:00 AM</option>
          <option value="10:00">10:00 AM</option>
          <option value="14:00">02:00 PM</option>
          <option value="16:00">04:00 PM</option>
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
        placeholder="Juan Pérez García"
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

      {/* Botón de Envío */}
      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-gradient-to-r from-blue-600 to-green-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {submitting ? 'Procesando...' : 'Confirmar Agendamiento'}
      </button>
    </form>
  );
}