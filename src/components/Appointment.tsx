import { useEffect, useState } from 'react';
import { supabase, City, CourseType } from '../lib/supabase';
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
  useEffect(() => {
  if (cityId) {
    setFormData(prev => ({
      ...prev,
      cityId,
    }));
  }
}, [cityId]);
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
              courseTypes={courseTypes}
              submitting={submitting}
              onSubmit={handleSubmit}
              onChange={handleChange}
            />
          </div>
        </div>
      </section>
    </div>
  );
}