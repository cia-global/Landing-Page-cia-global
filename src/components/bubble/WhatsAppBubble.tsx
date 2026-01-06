export default function WhatsAppBubble() {
  const phoneNumber = '573207713935';
  const message = encodeURIComponent(
    'Hola, quiero información para agendar mi curso de concientización vial.'
  );

  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
  <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed bottom-6 right-6 z-50
        bg-green-500 hover:bg-green-600
        text-white rounded-full
        w-14 h-14
        flex items-center justify-center
        shadow-lg
        transition-transform duration-200
        hover:scale-110
      "
      aria-label="Chat en WhatsApp"
    >
      <img
        src="/images/whatsapp.png"
        alt="Banner decorativo"
        className="centered-icon w-8 h-8"
      />
    </a>
  );
}