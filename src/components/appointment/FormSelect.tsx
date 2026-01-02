import { ReactNode } from 'react';

interface FormSelectProps {
  id: string;
  name: string;
  label: ReactNode;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  children: ReactNode;
  disabled?: boolean; 
}

export function FormSelect({
  id,
  name,
  label,
  value,
  onChange,
  required,
  children,
  disabled = false,
}: FormSelectProps) {
  return (
     <div>
      <label
        htmlFor={id}
        className={`block text-sm font-semibold mb-2 ${
          disabled ? 'text-gray-400' : 'text-gray-900'
        }`}
      >
        {label}
      </label>

      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        disabled={disabled}
        className={`w-full px-4 py-2 border rounded-lg transition-all
          ${
            disabled
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed border-gray-200'
              : 'border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent'
          }
        `}
      >
        {children}
      </select>
    </div>
  );
}