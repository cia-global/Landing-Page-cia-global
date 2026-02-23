import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase, Certificado} from '../../lib/supabase';



// ─── Tipos ────────────────────────────────────────────────────────────────────




const MESES = [
  "Enero","Febrero","Marzo","Abril","Mayo","Junio",
  "Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre",
];

function formatFecha(fechaStr: string){
  const d = new Date(fechaStr + "T00:00:00");
  return `Dado en Yopal, ${MESES[d.getMonth()]} ${d.getDate()} de ${d.getFullYear()}`;
}

const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='150'%3E%3Crect width='120' height='150' fill='%23e5e7eb'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%236b7280' font-family='Arial' font-size='14'%3ESin foto%3C/text%3E%3C/svg%3E";

// ─── Loader ───────────────────────────────────────────────────────────────────
function Loader() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <img src="https://i.gifer.com/XYdq.gif" alt="Cargando..." className="rounded-full w-64" />
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function CertificadoDetalle() {
  const { codigo } = useParams();
  const navigate = useNavigate();

  const [cert, setCert] = useState<Certificado[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [imgSrc, setImgSrc] = useState(PLACEHOLDER);

  useEffect(() => {
    if (!codigo) {
      setError("Código de certificado no proporcionado.");
      setLoading(false);
      return;
    }

    (async () => {
      const { data, error: sbError } = await supabase
        .from("certificados")
        .select("*")
        .eq("codigo", codigo)
        .single();

      if (sbError || !data) {
        console.error(sbError);
        setError("Certificado no encontrado.");
        setLoading(false);
        return;
      }

      const result = data;

      if (result.foto_url) {
        let path = result.foto_url;
        if (!path.startsWith("/") && !path.startsWith("http")) path = "/" + path;
        setImgSrc(path);
      }

      setCert(result);
      setLoading(false);
    })();
  }, [codigo]);

  if (loading) return <Loader />;

  if (error || !cert) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 gap-4">
        <p className="text-xl font-semibold text-gray-700">{error ?? "Certificado no encontrado."}</p>
        <button
          onClick={() => navigate("/certificados")}
          className="text-sky-600 hover:underline text-sm font-semibold"
        >
          ← Volver a certificados
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-200 py-10 px-4 font-[Montserrat,sans-serif] italic">

      {/* Botón volver */}
      <div className="max-w-3xl mx-auto mb-4">
        <button
          onClick={() => navigate("/certificados")}
          className="flex items-center gap-2 text-sky-700 hover:text-sky-900 font-semibold text-sm transition-colors not-italic"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Volver a certificados
        </button>
      </div>

      {/* Tarjeta */}
      <div className="relative max-w-3xl mx-auto bg-white rounded-2xl overflow-hidden shadow-2xl p-10 py-32">

        {/* Marca de agua */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "url(/images/certificados/Fondo.jpg)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            backgroundPosition: "center",
            transform: "rotate(30deg) scale(1.2)",
            opacity: 0.6,
            zIndex: 0,
          }}
        />

        <div className="relative z-10 space-y-6">

          {/* Encabezado */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <img src="/images/certificados/escudo.jpg" alt="Escudo de Colombia" className="w-20" />
            <div className="text-center">
              <p className="font-bold text-lg tracking-wide">REPÚBLICA DE COLOMBIA</p>
              <p className="text-sm text-gray-600">{cert.empresa}</p>
            </div>
          </div>

          {/* Decreto */}
          <div className="text-center text-sm leading-relaxed text-gray-700">
            Conforme el Decreto único reglamentario 1075 del 26 de mayo de 2015 expedido
            por el ministerio de Educación Nacional y estricto cumplimiento de los
            requisitos establecidos en el artículo 2.6.6.8.
            <br /><br />
            <p className="font-semibold">CENTRO INTEGRAL DE ATENCIÓN PREVIAL S.A.S</p>
            <p>NIT.: 900462369-9 - Matrícula Mercantil 87978</p>
          </div>

          {/* Cuerpo */}
          <div className="text-center space-y-3">

            {/* Foto + nombre */}
            <div className="flex flex-wrap items-center justify-center gap-6 text-left">
              <img
                src={imgSrc}
                alt={`Foto de ${cert.nombre_completo}`}
                onError={() => setImgSrc(PLACEHOLDER)}
                className="w-28 h-auto rounded-lg shadow-md border border-gray-200 object-cover"
              />
              <div>
                <p className="font-bold text-sm uppercase tracking-widest text-gray-500">
                  HACE CONSTAR QUE:
                </p>
                <p className="text-xl sm:text-2xl font-bold text-gray-800 mt-1">
                  {cert.nombre_completo}
                </p>
              </div>
            </div>

            {/* Cédula */}
            <span className="inline-block bg-sky-300 text-gray-800 font-semibold px-5 py-2 rounded-full text-sm">
              Identificado con cédula de ciudadanía N° {cert.documento}
            </span>

            <p className="text-gray-600 text-sm">Asistió al</p>
            <p className="font-bold text-base text-gray-800">{cert.curso}</p>
            <p className="text-gray-700 text-sm">{formatFecha(cert.fecha_certificado)}</p>
            <p className="text-gray-600 text-sm">Duración: {cert.horas || "0"} horas</p>
          </div>

          {/* Firma */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-8 mt-10">
            <div className="text-center">
              <img
                src="/images/certificados/Firma.png"
                alt="Firma Representante Legal"
                className="mx-auto mb-1"
                style={{ maxWidth: 260, minWidth: 160, width: "40%" }}
              />
              <p className="text-xs font-bold border-t border-gray-400 pt-1 inline-block">
                CLAUDIA ISABEL CASTAÑEDA SANCHEZ
              </p>
              <p className="text-xs text-gray-500">REPRESENTANTE LEGAL</p>
            </div>
            <div className="text-center">
              <img src="/images/certificados/Logo.jpg" alt="Logo" className="w-28 mx-auto" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}