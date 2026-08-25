import { Link } from "react-router-dom";
import { ArrowRight, CalendarCheck } from "lucide-react";

export default function NewsCTA() {
  return (
    <section className="bg-gradient-to-r from-blue-900 via-slate-900 to-blue-800 py-20 mt-20">
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">

          <div className="inline-flex items-center gap-2 rounded-full bg-yellow-400/20 border border-yellow-400/30 px-5 py-2 mb-6 text-yellow-300">
            <CalendarCheck size={18} />
            Curso autorizado por la ley
          </div>

          <h2 className="text-4xl font-bold text-white leading-tight">
            ¿Tiene un comparendo y desea obtener el descuento?
          </h2>

          <p className="mt-6 text-lg text-slate-300 leading-8">
            Agende su curso de seguridad vial en cualquiera de nuestras sedes
            autorizadas y aproveche los descuentos establecidos por la ley.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">

            <Link
              to="/appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-yellow-400 px-8 py-4 font-semibold text-slate-900 hover:bg-yellow-300 transition"
            >
              Agendar Curso
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/cities"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-8 py-4 font-semibold text-white hover:bg-white/10 transition"
            >
              Ver sedes
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}