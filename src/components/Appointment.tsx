import { useEffect, useMemo, useState } from 'react';
import { supabase, City, CourseType, Schedule } from '../lib/supabase';
import { useSearchParams } from 'react-router-dom';
import AppointmentForm from './appointment/AppointmentForm';
import {SuccessMessage} from './appointment/SuccessMessage';
import {LoadingSpinner} from './appointment/LoadingSpinner';
import {PageHeader} from './appointment/PageHeader';
import {API_URL} from '../config/api';
import { Helmet } from 'react-helmet-async';

export interface AppointmentFormData {
  cityId: string;
  courseTypeId: string;
  fullName: string;
  idNumber: string;
  citationNumber: string;
  phone: string;
  email: string;
  appointmentDate: string;
  appointmentTime: string;
}

const initialFormData: AppointmentFormData = {
  cityId: '',
  courseTypeId: '',
  fullName: '',
  idNumber: '',
  citationNumber: '',
  phone: '',
  email: '',
  appointmentDate: '',
  appointmentTime: '',
};

// Mapeo de días en español e inglés
const DAYS_MAP: Record<string, number> = {
  'Sunday': 0, 'Domingo': 0,
  'Monday': 1, 'Lunes': 1,
  'Tuesday': 2, 'Martes': 2,
  'Wednesday': 3, 'Miércoles': 3, 'Miercoles': 3,
  'Thursday': 4, 'Jueves': 4,
  'Friday': 5, 'Viernes': 5,
  'Saturday': 6, 'Sábado': 6, 'Sabado': 6,
};

const DAY_NAMES = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];


// Función para obtener el nombre del día de una fecha
const getDayNameFromDate = (dateString: string): string => {
  if (!dateString) return '';
  const date = new Date(dateString + 'T00:00:00');
  return DAY_NAMES[date.getDay()];
};

// Función para calcular la próxima fecha de un día de la semana
const getNextDateForWeekDay = (dayName: string): string => {
  const dayIndex = DAYS_MAP[dayName];
  
  if (dayIndex === undefined) {
    return new Date().toISOString().split('T')[0];
  }

  const today = new Date();
  const todayIndex = today.getDay();
  
  let daysToAdd = dayIndex - todayIndex;
  
  // Si el día ya pasó esta semana, ir a la próxima semana
  if (daysToAdd <= 0) {
    daysToAdd += 7;
  }
  
  const targetDate = new Date(today);
  targetDate.setDate(today.getDate() + daysToAdd);
  
  return targetDate.toISOString().split('T')[0];
};

export default function Appointment() {
  const [params] = useSearchParams();
  const [cities, setCities] = useState<City[]>([]);
  const [courseTypes, setCourseTypes] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState<AppointmentFormData>(initialFormData);
  const [schedules, setSchedules] = useState<Schedule[]>([]);
  const [loadingSchedules, setLoadingSchedules] = useState(false);
  
  // Parámetros URL
  const cityIdParam = params.get('city');
  const dayParam = params.get('day'); // Día de la semana (ej: "Monday")
  const scheduleIdParam = params.get('schedule');

  // Cargar datos iniciales
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const [citiesResponse, courseTypesResponse] = await Promise.all([
        supabase.from('cities').select('*').eq('is_active', true).order('name'),
        supabase.from('course_types').select('*').eq('is_active', true).order('name'),
      ]);

      if (citiesResponse.error) throw citiesResponse.error;
      if (courseTypesResponse.error) throw courseTypesResponse.error;

      setCities(citiesResponse.data || []);
      setCourseTypes(courseTypesResponse.data || []);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // Cargar horarios cuando cambia la ciudad
  useEffect(() => {
    if (!formData.cityId) {
      setSchedules([]);
      return;
    }

    const fetchSchedules = async () => {
      setLoadingSchedules(true);
      try {
        const { data, error } = await supabase
          .from('schedules')
          .select('*')
          .eq('city_id', formData.cityId)
          .eq('is_active', true)
          .order('day_of_week');

        if (error) throw error;
        setSchedules(data || []);
      } catch (error) {
        console.error('Error fetching schedules:', error);
        setSchedules([]);
      } finally {
        setLoadingSchedules(false);
      }
    };

    fetchSchedules();
  }, [formData.cityId]);

  // Inicializar con parámetros URL solo al montar
  useEffect(() => {
    const updates: Partial<AppointmentFormData> = {};
    
    if (cityIdParam) {
      updates.cityId = cityIdParam;
    }
    
    if (dayParam) {
      // Convertir día de la semana a fecha
      const nextDate = getNextDateForWeekDay(dayParam);
      updates.appointmentDate = nextDate;
    }
    
    if (Object.keys(updates).length > 0) {
      setFormData(prev => ({ ...prev, ...updates }));
    }
  }, []); // Solo al montar

  // Cuando se cargan los schedules y hay un scheduleId en la URL, seleccionarlo
  useEffect(() => {
    if (!scheduleIdParam || schedules.length === 0 || !formData.appointmentDate) return;

    const schedule = schedules.find(s => s.id === scheduleIdParam);
    if (!schedule) return;

    // Verificar que el schedule corresponda al día seleccionado
    const selectedDayName = getDayNameFromDate(formData.appointmentDate);
    if (schedule.day_of_week === selectedDayName) {
      setFormData(prev => ({
        ...prev,
        appointmentTime: schedule.start_time,
      }));
    }
  }, [scheduleIdParam, schedules, formData.appointmentDate]);

  // Calcular los horarios filtrados según la fecha seleccionada
  const filteredSchedules = useMemo(() => {
    if (!formData.appointmentDate || schedules.length === 0) return [];

    const selectedDayName = getDayNameFromDate(formData.appointmentDate);
    
    return schedules
      .filter(s => s.day_of_week === selectedDayName)
      .sort((a, b) => a.start_time.localeCompare(b.start_time));
  }, [schedules, formData.appointmentDate]);

  // Limpiar la hora seleccionada si ya no está en los horarios filtrados
  useEffect(() => {
    if (!formData.appointmentTime) return;
    
    const isTimeStillValid = filteredSchedules.some(
      s => s.start_time === formData.appointmentTime
    );
    
    if (!isTimeStillValid) {
      setFormData(prev => ({ ...prev, appointmentTime: '' }));
    }
  }, [filteredSchedules, formData.appointmentTime]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
     console.log('📤 Datos que se envían:', formData);
  console.log('🌐 URL:', `${API_URL}/api/appointments`);
    try {
      const response = await fetch(`${API_URL}/api/appointments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          city_id: formData.cityId,
          course_type_id: formData.courseTypeId,
          full_name: formData.fullName,
          id_number: formData.idNumber,
          citation_number: formData.citationNumber,
          phone: formData.phone,
          email: formData.email,
          appointment_date: formData.appointmentDate,
          appointment_time: formData.appointmentTime,
          status: 'pending',
        }),
      });
       
       const data = await response.json();
         console.log('📥 Respuesta del backend:', data);
    console.log('📊 Status:', response.status);
      if (!response.ok || !data.success) {
      throw new Error(data.error || 'Error al crear el agendamiento');
    }
       
      setSuccess(true);
      setFormData(initialFormData);
    } catch (error) {
      console.error('Error creating appointment:', error);
      alert('Hubo un error al agendar tu cita. Por favor intenta nuevamente.');
    } finally {
      setSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    
    setFormData(prev => {
      const updates: Partial<AppointmentFormData> = { [name]: value };
      
      // Si cambia la ciudad, resetear horarios
      if (name === 'cityId') {
        updates.appointmentTime = '';
      }
      
      // Si cambia la fecha, resetear la hora
      if (name === 'appointmentDate') {
        updates.appointmentTime = '';
      }
      
      return { ...prev, ...updates };
    });
  };

  const handleNewAppointment = () => setSuccess(false);

  const canSelectSchedule = Boolean(formData.cityId && formData.appointmentDate);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (success) {
    return <SuccessMessage onNewAppointment={handleNewAppointment} />;
  }

  return (
    <>
      <Helmet>
        <title>Agendar Curso de Comparendos en Colombia | Cita en Línea</title>
        <meta name="description" content="Agenda tu curso de comparendos en minutos. Elige ciudad, fecha y horario. Proceso 100% en línea, confirmación inmediata. ¡Reserva tu cupo ahora!" />
        <meta name="keywords" content="agendar curso comparendos, reservar curso tránsito, cita curso educación vial, horarios cursos comparendos," />
        <link rel="canonical" href="https://www.pagocursoscomparendos.com/appointment" />
        <meta name="author" content="Cursos comparendos Colombia" />
        <meta property="og:title" content="agendamiento cursos comparendos" />
        <meta property="og:description" content="Agenda tu cita de forma fácil y rápida." />
        <meta property="og:type" content="website" />
         <meta name="robots" content="index,follow" />
      </Helmet>
    
    <div className="pt-16 min-h-screen bg-gray-50">
      <PageHeader />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AppointmentForm
              formData={formData}
              cities={cities}
              cityId={cityIdParam}
              schedules={filteredSchedules}
              courseTypes={courseTypes}
              submitting={submitting}
              canSelectSchedule={canSelectSchedule}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
    </div>
    </>
  );
}