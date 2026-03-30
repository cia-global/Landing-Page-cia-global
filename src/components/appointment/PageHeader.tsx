export function PageHeader() {
  const phoneNumber = '573207713935';
  const message = encodeURIComponent(
    'Hola, quiero información para agendar mi curso de concientización vial.'
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
  const handleWhatsAppClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
  e.preventDefault(); // 👈 detiene la navegación hasta que gtag responda

    const callback = () => {
      window.open(whatsappUrl, '_blank'); // abre WhatsApp después del evento
    };

      if (typeof window.gtag === 'undefined') {
      callback();
      return;
    }

    // 👇 Si gtag tarda o falla, abre WhatsApp igual después de 1s
    const timeout = setTimeout(callback, 1000);

    window.gtag('event', 'conversion', {
      send_to: 'AW-17906931957/d5AsCPylpoMcEPWx2NpC',
      event_callback: () => {
        clearTimeout(timeout); // gtag respondió, cancelar el timeout
        callback();
      },
    });
  };


  return (
      <section className="bg-gradient-to-br from-blue-900 via-indigo-900 to-gray-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -mr-48 -mt-48"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full -ml-48 -mb-48"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Agendar mi Curso</h1>
              <p className="text-xl text-blue-100 mb-8">
                Completa el formulario para reservar tu curso de educación vial
              </p>
            </div>
            <div className="flex flex-col gap-4 lg:text-right">
              <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-6 border border-white border-opacity-20">
                <p className="text-blue-100 text-sm mb-2">¿Necesitas ayuda?</p>
                <p className="text-lg mb-4">Escribenos ahora mismo</p>
                <a
                  href={whatsappUrl}
                    onClick={handleWhatsAppClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center lg:justify-end w-full gap-3   bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold transition-all duration-200 hover:scale-105 transform"
                >
                   <img
                    src="/images/whatsapp.png"
                    alt="Banner decorativo"
                    className="centered-icon w-8 h-8"
                      />
                  +57 3207713935
                </a>
             
              </div>
            </div>
          </div>
        </div>
      </section>
    
  );
}