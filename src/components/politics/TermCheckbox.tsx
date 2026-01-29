import { Link } from 'react-router-dom';

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
};

export default function TermsCheckbox({ checked, onChange }: Props) {
  return (
    <div className="flex items-start gap-3 mt-4">
      <input
        type="checkbox"
        id="terms"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="mt-1 w-4 h-4"
      />
      <label htmlFor="terms" className="text-sm text-slate-600">
        Acepto los{' '}
        <Link
          to="/terms-and-conditions"
          target="_blank"
          className="text-slate-800 font-medium underline"
        >
          Términos y Condiciones
        </Link>{' '}
        y la{' '}
        <Link
          to="/privacy-policy"
          target="_blank"
          className="text-slate-800 font-medium underline"
        >
          Política de Privacidad
        </Link>
      </label>
    </div>
  );
}