import { ReactNode } from 'react';

interface FormInputProps {
  type: string;
  id: string;
  name: string;
  label: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  required?: boolean;
  min?: string;
}

export default function FormInput({
  type,
  id,
  name,
  label,
  value,
  onChange,
  placeholder,
  required,
  min,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-gray-900 mb-2">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        min={min}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
    </div>
  );
}