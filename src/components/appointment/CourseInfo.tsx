import { CourseType } from '../../lib/supabase';

interface CourseInfoProps {
  course: CourseType;
}

export function CourseInfo({ course }: CourseInfoProps) {
  return (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <p className="text-sm text-blue-900">
        <strong>Descripción:</strong> {course.description}
      </p>
      <p className="text-sm text-blue-900 mt-2">
        <strong>Duración:</strong> {course.duration_hours} horas
      </p>
    </div>
  );
}

