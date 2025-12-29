export function LoadingSpinner() {
  return (
    <div className="pt-16 min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4">Cargando formulario...</p>
      </div>
    </div>
  );
}