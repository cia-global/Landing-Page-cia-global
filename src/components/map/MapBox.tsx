type Props = {
  coordinates: string; // "lat,lng"
};

export default function MapBox({ coordinates }: Props) {
 
  if (!coordinates) {
    return (
      <div className="w-full h-64 flex items-center justify-center border rounded-xl">
        <p className="text-slate-500">Ubicación no disponible</p>
      </div>
    );
  }

  const url = `https://maps.google.com/maps?q=${coordinates}&z=15&output=embed`;
  return (
    <div className="w-full h-64 rounded-xl overflow-hidden border shadow-lg">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={url}
      />
    </div>
  );
}