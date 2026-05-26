type Props = {
  placeId: string;
};

export default function MapBox({ placeId }: Props) {

  if (!placeId) {
    return (
      <div className="w-full h-64 flex items-center justify-center border rounded-xl">
        <p className="text-slate-500">Ubicación no disponible</p>
      </div>
    );
  }

  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY;
  const url = `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=place_id:${placeId}&zoom=15`;

  return (
    <div className="w-full h-64 rounded-xl overflow-hidden border shadow-lg">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={url}
      />
    </div>
  );
}