type Props = {
  coordinates: string; // "lat,lng"
};

export default function MapBox({ coordinates }: Props) {
  const url = `https://maps.google.com/maps?q=${coordinates}&z=15&output=embed`;

  return (
    <div className="w-full h-64 rounded-xl overflow-hidden border shadow-lg">
      <iframe
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        src={url}
      ></iframe>
    </div>
  );
}