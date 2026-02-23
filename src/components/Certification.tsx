/**
 * Certificados.tsx
 * Ruta: /certificados  (con Header y Footer)
 *
 * Opciones:
 *  1. Reducción de comparendos → redirige al SIMIT
 *  2. Otros cursos → buscador por cédula → lista desplegable → seleccionar
 */

import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL as string,
  import.meta.env.VITE_SUPABASE_ANON_KEY as string
);

const SIMIT_URL = "https://www.simit.org.co/";

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface Certificado {
  id: string | number;
  codigo: string;
  empresa: string;
  nombre_completo: string;
  documento: string;
  curso: string;
  fecha_certificado: string;
  horas: string | number;
  foto_url?: string;
}

type EstadoBuscador = "idle" | "loading" | "results" | "error";

// ─── Helper fecha ─────────────────────────────────────────────────────────────
const MESES_CORTOS = [
  "Ene","Feb","Mar","Abr","May","Jun",
  "Jul","Ago","Sep","Oct","Nov","Dic",
];

function formatFechaCorta(fechaStr: string): string {
  const d = new Date(fechaStr + "T00:00:00");
  return `${d.getDate()} ${MESES_CORTOS[d.getMonth()]} ${d.getFullYear()}`;
}

// ─── Sección animada que se despliega ────────────────────────────────────────
interface CollapseProps {
  open: boolean;
  children: React.ReactNode;
}

function Collapse({ open, children }: CollapseProps) {
  const innerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (!innerRef.current) return;
    if (open) {
      setHeight(innerRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [open]);

  // Recalcular si el contenido cambia (ej: llegan resultados)
  useEffect(() => {
    if (!open || !innerRef.current) return;
    const observer = new ResizeObserver(() => {
      if (innerRef.current) setHeight(innerRef.current.scrollHeight);
    });
    observer.observe(innerRef.current);
    return () => observer.disconnect();
  }, [open]);

  return (
    <div
      style={{
        height: height,
        overflow: "hidden",
        transition: "height 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div ref={innerRef}>
        {children}
      </div>
    </div>
  );
}

// ─── Componente principal ─────────────────────────────────────────────────────
export default function Certificados() {
  const navigate = useNavigate();

  const [mostrarBuscador, setMostrarBuscador] = useState<boolean>(false);
  const buscadorRef = useRef<HTMLDivElement>(null);

  const [cedula, setCedula] = useState<string>("");
  const [estado, setEstado] = useState<EstadoBuscador>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [resultados, setResultados] = useState<Certificado[]>([]);

  function handleToggleBuscador() {
    const siguiente = !mostrarBuscador;
    setMostrarBuscador(siguiente);
    if (siguiente) {
      setTimeout(() => {
        buscadorRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 420); // esperar que termine la animación
    }
  }

  async function handleBuscar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = cedula.trim();

    if (!value) {
      setErrorMsg("Por favor ingresa tu número de cédula.");
      setEstado("error");
      return;
    }

    setEstado("loading");
    setErrorMsg("");
    setResultados([]);

    const { data, error } = await supabase
      .from("certificados")
      .select("*")
      .eq("documento", value);

    if (error) {
      console.error(error);
      setEstado("error");
      setErrorMsg("Ocurrió un error al consultar. Intenta de nuevo.");
      return;
    }

    if (!data || data.length === 0) {
      setEstado("error");
      setErrorMsg("No se encontró ningún certificado con esa cédula.");
      return;
    }

    setResultados(data as Certificado[]);
    setEstado("results");
  }

  function handleSeleccionar(cert: Certificado) {
    navigate(`/certificado/${cert.codigo}`);
  }

  return (
    <section className="min-h-screen bg-gray-50 py-32 px-4">
      <div className="max-w-3xl mx-auto">

        {/* Título */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-2">
            Consulta tu Certificado
          </h1>
          <p className="text-gray-500 text-base">
            Selecciona el tipo de certificado que deseas consultar.
          </p>
        </div>

        {/* ── Tarjetas de opciones ── */}
        <div className="grid sm:grid-cols-2 gap-6 mb-6">

          {/* Opción 1 – SIMIT */}
          <a
            href={SIMIT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-4 bg-white border-2 border-gray-200 hover:border-sky-500 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all text-center"
          >
            <div className="w-14 h-14 rounded-full bg-sky-100 group-hover:bg-sky-200 flex items-center justify-center transition-colors">
              <svg className="w-7 h-7 text-sky-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-800 text-base mb-1">Reducción de Comparendos</p>
              <p className="text-gray-500 text-sm">
                Consulta tu certificado directamente en el portal del SIMIT.
              </p>
            </div>
            <span className="mt-auto inline-flex items-center gap-1 text-sky-600 text-xs font-semibold group-hover:underline">
              Ir al SIMIT
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>

          {/* Opción 2 – Otros cursos */}
          <button
            onClick={handleToggleBuscador}
            className={`group flex flex-col items-center gap-4 bg-white border-2 rounded-2xl p-8 shadow-sm hover:shadow-md transition-all text-center ${
              mostrarBuscador
                ? "border-emerald-500 shadow-md"
                : "border-gray-200 hover:border-emerald-500"
            }`}
          >
            <div className={`w-14 h-14 rounded-full flex items-center justify-center transition-colors ${
              mostrarBuscador ? "bg-emerald-200" : "bg-emerald-100 group-hover:bg-emerald-200"
            }`}>
              <svg className="w-7 h-7 text-emerald-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div>
              <p className="font-bold text-gray-800 text-base mb-1">Otros Cursos</p>
              <p className="text-gray-500 text-sm">
                Consulta certificados de otros cursos realizados con nosotros.
              </p>
            </div>
            <span className="mt-auto inline-flex items-center gap-1 text-emerald-600 text-xs font-semibold">
              {mostrarBuscador ? "Ocultar buscador" : "Buscar certificado"}
              <svg
                className={`w-3.5 h-3.5 transition-transform duration-300 ${mostrarBuscador ? "rotate-180" : ""}`}
                fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </span>
          </button>

        </div>

        {/* ── Panel buscador animado ── */}
        <div ref={buscadorRef}>
          <Collapse open={mostrarBuscador}>
            <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 space-y-6 mt-2">

              <div className="text-center">
                <h2 className="text-xl font-bold text-gray-800 mb-1">Buscar por Cédula</h2>
                <p className="text-gray-500 text-sm">
                  Ingresa tu número de cédula y te mostraremos tus certificados disponibles.
                </p>
              </div>

              {/* Formulario */}
              <form onSubmit={handleBuscar} className="flex gap-3">
                <input
                  type="text"
                  inputMode="numeric"
                  placeholder="Ej: 1234567890"
                  value={cedula}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setCedula(e.target.value.replace(/\D/g, ""));
                    setEstado("idle");
                    setErrorMsg("");
                    setResultados([]);
                  }}
                  className="flex-1 border-2 border-gray-200 rounded-xl px-4 py-3 text-gray-800 text-sm focus:outline-none focus:border-sky-500 transition-colors"
                  maxLength={12}
                  autoComplete="off"
                />
                <button
                  type="submit"
                  disabled={estado === "loading"}
                  className="bg-sky-600 hover:bg-sky-700 disabled:bg-sky-300 text-white font-bold px-6 py-3 rounded-xl transition-colors text-sm whitespace-nowrap"
                >
                  {estado === "loading" ? "Buscando..." : "Buscar"}
                </button>
              </form>

              {/* Error */}
              {estado === "error" && (
                <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3">
                  <svg className="w-4 h-4 text-red-500 shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-red-600 text-sm">{errorMsg}</p>
                </div>
              )}

              {/* Resultados */}
              {estado === "results" && resultados.length > 0 && (
                <div className="space-y-3">
                  <p className="text-sm font-semibold text-gray-600">
                    Se encontraron{" "}
                    <span className="text-sky-600">{resultados.length}</span>{" "}
                    certificado(s) para{" "}
                    <span className="text-gray-800">{resultados[0].nombre_completo}</span>:
                  </p>

                  {resultados.map((cert) => (
                    <button
                      key={cert.codigo}
                      onClick={() => handleSeleccionar(cert)}
                      className="w-full flex items-center justify-between gap-4 bg-gray-50 hover:bg-sky-50 border border-gray-200 hover:border-sky-400 rounded-xl px-5 py-4 transition-all text-left group"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-lg bg-sky-100 group-hover:bg-sky-200 flex items-center justify-center shrink-0 transition-colors">
                          <svg className="w-5 h-5 text-sky-600" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{cert.curso}</p>
                          <p className="text-gray-400 text-xs mt-0.5">
                            {formatFechaCorta(cert.fecha_certificado)} · {cert.horas} horas
                          </p>
                        </div>
                      </div>
                      <svg className="w-4 h-4 text-gray-400 group-hover:text-sky-500 transition-colors shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                  ))}
                </div>
              )}

            </div>
          </Collapse>
        </div>

      </div>
    </section>
  );
}