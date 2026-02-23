import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export type City = {
  id: string;
  name: string;
  address: string;
  phone: string;
  coordinates: { lat: number; lng: number };
  page: number;
  is_active: boolean;
  created_at: string;
  nameSede: string;
};

export type CourseType = {
  id: string;
  name: string;
  description: string;
  duration_hours: number;
  price: number;
  is_active: boolean;
  created_at: string;
};

export type Appointment = {
  id: string;
  city_id: string;
  course_type_id: string;
  full_name: string;
  id_number: string;
  citation_number: string;
  phone: string;
  email: string;
  appointment_date: string;
  appointment_time: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
};

export type DayOfWeek =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

export type Schedule = {
  id: string;
  city_id: string;
  day_of_week: DayOfWeek;
  start_time: string; // formato: "08:00:00"
  end_time: string;   // formato: "18:00:00"
  is_active: boolean;
  created_at: string;
};

export type CityHours = {
  id: string;
  city_id: string;
  applies_to: 'weekday' | 'friday' | 'saturday'; // ⬅️ Mejor con union type
  start_time: string; 
  end_time: string;
}

export type Certificado = {
  id: string | number;
  codigo: string;
  empresa: string;
  nombre_completo: string;
  documento: string;
  curso: string;
  fecha_certificado: string;
  horas: string | number;
  foto_url?: string;
}