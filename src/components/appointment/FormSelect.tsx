import { ReactNode } from 'react';

interface FormSelectProps {
  id: string;
  name: string;
  label: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  children: ReactNode;
}

export function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  required,
  children,
}: FormSelectProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
      </label>
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        {children}
      </select>
    </div>
  );
}