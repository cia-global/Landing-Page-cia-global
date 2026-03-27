import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function HomeStats() {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
     <div ref={ref} className="text-gray-600 text-2xl leading-relaxed text-center sm:text-4xl lg:text-5xl">
      <p>
        Con más de{" "}
        <span className="text-2xl font-bold text-amber-400 sm:text-4xl lg:text-5xl">
          {inView && <CountUp end={25} duration={3} />}
        </span>{" "}
        sedes a nivel nacional,{" "}
        <span className="text-2xl font-bold text-amber-400 sm:text-4xl lg:text-5xl">
          {inView && <CountUp end={20000} duration={2} separator="." />}
        </span>{" "}
        usuarios y{" "}
        <span className="text-2xl font-bold text-amber-400 sm:text-4xl lg:text-5xl">
          {inView && <CountUp end={50000} duration={3} separator="." />}
        </span>{" "}
        cursos impartidos en{" "}
        <span className="font-semibold text-amber-400">2025</span>.
      </p>
    </div>
  );
}