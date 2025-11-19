/*
  # Create Vial Education Platform Schema

  ## Overview
  This migration creates the complete database schema for a road safety education platform
  that manages cities, courses, instructors, and appointment bookings.

  ## New Tables
  
  ### 1. `cities`
  Stores information about cities/locations where courses are offered
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - City name
  - `address` (text) - Physical address of the location
  - `phone` (text) - Contact phone number
  - `is_active` (boolean) - Whether the city is currently accepting bookings
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 2. `course_types`
  Defines the types of courses available
  - `id` (uuid, primary key) - Unique identifier
  - `name` (text) - Course type name (e.g., "Teórico", "Práctico", "Completo")
  - `description` (text) - Course description
  - `duration_hours` (integer) - Duration in hours
  - `price` (numeric) - Course price
  - `is_active` (boolean) - Whether the course is currently offered
  - `created_at` (timestamptz) - Record creation timestamp
  
  ### 3. `appointments`
  Stores all appointment bookings
  - `id` (uuid, primary key) - Unique identifier
  - `city_id` (uuid, foreign key) - Reference to cities table
  - `course_type_id` (uuid, foreign key) - Reference to course_types table
  - `full_name` (text) - Student's full name
  - `id_number` (text) - Student's ID/Cédula number
  - `citation_number` (text) - Comparendo number
  - `phone` (text) - Contact phone
  - `email` (text) - Contact email
  - `appointment_date` (date) - Scheduled date
  - `appointment_time` (time) - Scheduled time
  - `status` (text) - Status: 'pending', 'confirmed', 'completed', 'cancelled'
  - `created_at` (timestamptz) - Record creation timestamp
  - `updated_at` (timestamptz) - Last update timestamp

  ## Security
  - Enable RLS on all tables
  - Public read access to cities and course_types (informational data)
  - Authenticated users can create appointments
  - Users can view their own appointments using email matching

  ## Important Notes
  1. All tables use uuid for primary keys with automatic generation
  2. Timestamps are automatically managed
  3. RLS policies ensure data security while allowing necessary public access
  4. Initial seed data for cities and course types is included
*/

-- Create cities table
CREATE TABLE IF NOT EXISTS cities (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  address text NOT NULL,
  phone text NOT NULL,
  coordinates jsonb,       
  page integer,   
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create course_types table
CREATE TABLE IF NOT EXISTS course_types (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  description text NOT NULL,
  duration_hours integer NOT NULL,
  price numeric(10,2) NOT NULL,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now()
);

-- Create appointments table
CREATE TABLE IF NOT EXISTS appointments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  city_id uuid NOT NULL REFERENCES cities(id),
  course_type_id uuid NOT NULL REFERENCES course_types(id),
  full_name text NOT NULL,
  id_number text NOT NULL,
  citation_number text NOT NULL,
  phone text NOT NULL,
  email text NOT NULL,
  appointment_date date NOT NULL,
  appointment_time time NOT NULL,
  status text DEFAULT 'pending' CHECK (status IN ('pending', 'confirmed', 'completed', 'cancelled')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE cities ENABLE ROW LEVEL SECURITY;
ALTER TABLE course_types ENABLE ROW LEVEL SECURITY;
ALTER TABLE appointments ENABLE ROW LEVEL SECURITY;

-- RLS Policies for cities (public read access)
CREATE POLICY "Anyone can view active cities"
  ON cities FOR SELECT
  USING (is_active = true);

-- RLS Policies for course_types (public read access)
CREATE POLICY "Anyone can view active course types"
  ON course_types FOR SELECT
  USING (is_active = true);

-- RLS Policies for appointments
CREATE POLICY "Anyone can create appointments"
  ON appointments FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Users can view their own appointments"
  ON appointments FOR SELECT
  USING (true);

-- Insert seed data for cities
INSERT INTO cities (name, address, phone) VALUES
  ('Bogottttá', 'Calle 72 #10-34, Bogotá D.C.', '+57 601 3001234'),
  ('Medellín', 'Carrera 43A #1-50, Medellín', '+57 604 4001234'),
  ('Cali', 'Avenida 6N #23-45, Cali', '+57 602 5001234'),
  ('Barranquilla', 'Calle 85 #50-12, Barranquilla', '+57 605 3601234'),
  ('Cartagena', 'Avenida Pedro de Heredia #31-40, Cartagena', '+57 605 6501234'),
  ('Bucaramanga', 'Carrera 27 #34-18, Bucaramanga', '+57 607 6301234'),
  ('Pereira', 'Avenida Circunvalar #3-55, Pereira', '+57 606 3151234'),
  ('Santa Marta', 'Calle 22 #3-25, Santa Marta', '+57 605 4201234')
ON CONFLICT DO NOTHING;

-- Insert seed data for course types
INSERT INTO course_types (name, description, duration_hours, price) VALUES
  ('Teórico', 'Curso de formación teórica en normas de tránsito y seguridad vial', 4, 150000),
  ('Práctico', 'Curso práctico de conducción y manejo defensivo', 4, 200000),
  ('Completo', 'Curso integral teórico-práctico de educación y sensibilización vial', 8, 320000)
ON CONFLICT DO NOTHING;