import { useEffect, useMemo, useState } from 'react';
import { supabase, City, CourseType, Schedule } from '../lib/supabase';
import { useSearchParams } from 'react-router-dom';
import AppointmentForm from './appointment/AppointmentForm';
import {SuccessMessage} from './appointment/SuccessMessage';
import {LoadingSpinner} from './appointment/LoadingSpinner';
import {PageHeader} from './appointment/PageHeader';

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
  const cityId = params.get('city');
  const day = params.get('day');
  const scheduleId = params.get('schedule');
  const [selectedCityId, setSelectedCityId] = useState<string | null>(cityId);
const [selectedDay, setSelectedDay] = useState<string | null>(day);
const [selectedScheduleId, setSelectedScheduleId] = useState<string | null>(scheduleId);
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

  useEffect(() => {
  if (!formData.cityId) return;

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
    } finally {
      setLoadingSchedules(false);
    }
  };

  fetchSchedules();
}, [formData.cityId]);

const effectiveWeekDay = useMemo(() => {
  return selectedDay || day || null;
}, [selectedDay, day]);

const filteredSchedules = useMemo(() => {
  if (!effectiveWeekDay) return [];

  return schedules
    .filter(s => s.day_of_week === effectiveWeekDay)
    .sort((a, b) => a.start_time.localeCompare(b.start_time));
}, [schedules, effectiveWeekDay]);


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const { error } = await supabase.from('appointments').insert([
        {
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
        },
      ]);

      if (error) throw error;

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
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleNewAppointment = () => setSuccess(false);

  const canSelectSchedule = Boolean(formData.cityId && (selectedDay || formData.appointmentDate));


  useEffect(() => {
  if (cityId) {
    setFormData(prev => ({
      ...prev,
      cityId,
    }));
  }
}, [cityId]);


useEffect(() => {
  if (!selectedDay || !selectedScheduleId || schedules.length === 0) return;

  const schedule = schedules.find(s => s.id === selectedScheduleId);
  if (!schedule) return;

  setFormData(prev => ({
    ...prev,
    appointmentDate: selectedDay,
    appointmentTime: schedule.start_time,
  }));
}, [selectedDay, selectedScheduleId, schedules]);


 const getValidDateForSelectedDay = (selectedDay: string): string => {
  const daysMap: Record<string, number> = {
    Sunday: 0,
    Monday: 1,
    Tuesday: 2,
    Wednesday: 3,
    Thursday: 4,
    Friday: 5,
    Saturday: 6,
  };

  const today = new Date();
  const todayIndex = today.getDay();
  const selectedDayIndex = daysMap[selectedDay];

  // Si el día no es válido, devolver hoy
  if (selectedDayIndex === undefined) {
    return today.toISOString().split('T')[0];
  }

  // Si el día seleccionado es hoy o ya pasó → hoy
  if (selectedDayIndex <= todayIndex) {
    return today.toISOString().split('T')[0];
  }

  // Si el día es posterior en la semana → avanzar días
  const diffDays = selectedDayIndex - todayIndex;
  const resultDate = new Date(today);
  resultDate.setDate(today.getDate() + diffDays);

  return resultDate.toISOString().split('T')[0];
};


useEffect(() => {
  if (!selectedDay) return;

  const nextDate = getValidDateForSelectedDay(selectedDay);

  setFormData(prev => ({
    ...prev,
    appointmentDate: nextDate,
    appointmentTime: '',
  }));
}, [selectedDay]);



  if (loading) {
    return <LoadingSpinner />;
  }

  if (success) {
    return <SuccessMessage onNewAppointment={handleNewAppointment} />;
  }

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      <PageHeader />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <AppointmentForm
              formData={formData}
              cities={cities}
              cityId={cityId}
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
  );
}