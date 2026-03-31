import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import { drawPath, stateCode } from "@react-map/colombia/src/constants";
import { useNavigate } from 'react-router-dom';

// ─── Colores ──────────────────────────────────────────────────────────────────
const COLOR_DEFAULT  = "rgba(217,217,217)";
const COLOR_HOVER    = "rgba(250,250,250)";
const STROKE_COLOR   = "rgba(0,0,0,0.30)";


// ─── Pines en coordenadas del viewBox SVG ────────────────────────────────────
interface Pin {
  id: number;
  ciudad: string;
  cx: number;
  cy: number;
    cityId: string; 
}

const PINES: Pin[] = [
  { id: 1,  ciudad: "Acacias",         cx: 335, cy: 360, cityId: "acacias" },
  { id: 2,  ciudad: "Aguachica",       cx: 335, cy: 185, cityId: "aguachica" },
  { id: 3,  ciudad: "Barrancabermeja", cx: 330, cy: 230, cityId: "barrancabermeja" },
  { id: 4,  ciudad: "Bogotá",          cx: 310, cy: 340, cityId: "bogota" },
  { id: 5,  ciudad: "Bucaramanga",     cx: 355, cy: 230, cityId: "bucaramanga" },
  { id: 6,  ciudad: "Calarca",         cx: 250, cy: 350, cityId: "calarca" },
  { id: 7,  ciudad: "Dosquebradas",    cx: 234, cy: 310, cityId: "dosquebradas" },
  { id: 8,  ciudad: "Florencia",       cx: 253, cy: 454, cityId: "florencia" },
  { id: 9,  ciudad: "Floridablanca",   cx: 357, cy: 245, cityId: "floridablanca" },
  { id: 10, ciudad: "Granada",         cx: 335, cy: 390, cityId: "granada" },
  { id: 11, ciudad: "Ibagué",          cx: 270, cy: 350, cityId: "ibague" },
  { id: 12, ciudad: "Los patios",      cx: 370, cy: 200, cityId: "los-patios" },
  { id: 13, ciudad: "Manizales",       cx: 267, cy: 305, cityId: "manizales" },
  { id: 14, ciudad: "Neiva",           cx: 260, cy: 405, cityId: "neiva" },
  { id: 15, ciudad: "Pasto",           cx: 180, cy: 470, cityId: "pasto" },
  { id: 16, ciudad: "Pereira",         cx: 245, cy: 320, cityId: "pereira" },
  { id: 17, ciudad: "Piedecuesta",     cx: 360, cy: 258, cityId: "piedecuesta" },
  { id: 18, ciudad: "Restrepo",        cx: 335, cy: 350, cityId: "restrepo" },
  { id: 19, ciudad: "Tulua",           cx: 217, cy: 368, cityId: "tulua" },
  { id: 20, ciudad: "Yopal",           cx: 390, cy: 300, cityId: "yopal" },
  { id: 21, ciudad: "La plata",        cx: 250, cy: 425, cityId: "la-plata" },  
];

// ─── Tipos ────────────────────────────────────────────────────────────────────
interface HoveredDepto {
  code: string;
  // posición en coordenadas del viewBox para el tooltip
  x: number;
  y: number;
}


// ─── Componente ───────────────────────────────────────────────────────────────
export default function ColombiaMap() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState("0 0 100 100");
  const [hoveredDepto, setHoveredDepto] = useState<HoveredDepto | null>(null);
  const [hoveredPin, setHoveredPin]     = useState<number | null>(null);
    const navigate = useNavigate();

  // Calcular viewBox real tras el montaje
  useEffect(() => {
    if (svgRef.current) {
      const bbox = svgRef.current.getBBox();
      setViewBox(`${bbox.x} ${bbox.y} ${bbox.width} ${bbox.height}`);
    }
  }, []);

  // Radios escalados al viewBox
  const { pinR, pulseR, vbW, vbH, vbX, vbY } = useMemo(() => {
    const parts = viewBox.split(" ").map(Number);
    const vbX = parts[0] ?? 0;
    const vbY = parts[1] ?? 0;
    const vbW = parts[2] ?? 600;
    const vbH = parts[3] ?? 800;
    return {
      vbX, vbY, vbW, vbH,
      pinR:   vbW * 0.012,
      pulseR: vbW * 0.030,
    };
  }, [viewBox]);

  // Convertir evento de mouse a coordenadas del viewBox SVG
  const toSVGCoords = useCallback(
    (e: React.MouseEvent<SVGPathElement>): { x: number; y: number } => {
      const svg = svgRef.current;
      if (!svg) return { x: 0, y: 0 };
      const pt = svg.createSVGPoint();
      pt.x = e.clientX;
      pt.y = e.clientY;
      const svgP = pt.matrixTransform(svg.getScreenCTM()!.inverse());
      return { x: svgP.x, y: svgP.y };
    },
    []
  );

  // Handlers de departamentos
  const handleDeptoEnter = useCallback(
    (e: React.MouseEvent<SVGPathElement>, code: string) => {
      const { x, y } = toSVGCoords(e);
      setHoveredDepto({ code, x, y });
      // Cambiar color directo en el DOM (igual que el original)
      const path = e.currentTarget;
      // todos los departamentos tienen mismo color al hacer hover
      path.style.fill = COLOR_HOVER;
    },
    [toSVGCoords]
  );

  const handleDeptoLeave = useCallback(
    (e: React.MouseEvent<SVGPathElement>, code: string) => {
      setHoveredDepto(null);
      const path = e.currentTarget;
      path.style.fill = COLOR_DEFAULT;
    },
    []
  );

  const handleDeptoMove = useCallback(
    (e: React.MouseEvent<SVGPathElement>) => {
      const { x, y } = toSVGCoords(e);
      setHoveredDepto((prev) => (prev ? { ...prev, x, y } : prev));
    },
    [toSVGCoords]
  );

  // Tooltip del departamento — se posiciona sobre el cursor en coords SVG
  const tooltipW = vbW * 0.18;
  const tooltipH = vbH * 0.04;
  const tooltipOffset = vbH * 0.025;

  return (
    <div  className="select-none w-full">
      <svg
        ref={svgRef}
        version="1.1"
        viewBox={viewBox}
         style={{ width: "100%", height: "auto" }}
      >
        {/* ── Departamentos ── */}
        {(stateCode as string[]).map((code, index) => (
          <path
            key={index}
            d={drawPath[code as keyof typeof drawPath]}
            style={{
              fill:  COLOR_DEFAULT,
              stroke: STROKE_COLOR,
              strokeWidth: 1.2,
              cursor: "default",
              transition: "fill 0.15s ease",
            }}
            onMouseEnter={(e) => handleDeptoEnter(e, code)}
            onMouseLeave={(e) => handleDeptoLeave(e, code)}
            onMouseMove={handleDeptoMove}
          />
        ))}

        {/* ── Líneas de conexión desde Bogotá ── */}
        {PINES.slice(1).map((pin) => (
          <line
            key={`line-${pin.id}`}
            x1={PINES[0].cx} y1={PINES[0].cy}
            x2={pin.cx}      y2={pin.cy}
            stroke="rgba(251,191,36,0.18)"
            strokeWidth={0.8}
            strokeDasharray="4 4"
          />
        ))}

        {/* ── Pines ── */}
        {PINES.map((pin) => (
          <g
            key={pin.id}
            onMouseEnter={() => setHoveredPin(pin.id)}
            onMouseLeave={() => setHoveredPin(null)}
            onClick={() => navigate(`/cities/${pin.cityId}`)}
            style={{ cursor: "pointer" }}
          >
            {/* Pulso */}
            <circle cx={pin.cx} cy={pin.cy} r={pulseR} fill="rgba(250,250,250)">
              <animate attributeName="r"
                from={pinR} to={pulseR}
                dur="2.2s" begin={`${pin.id * 0.25}s`}
                repeatCount="indefinite" />
              <animate attributeName="opacity"
                from="0.6" to="0"
                dur="2.2s" begin={`${pin.id * 0.25}s`}
                repeatCount="indefinite" />
            </circle>
            {/* Anillo exterior */}
            <circle cx={pin.cx} cy={pin.cy}
              r={pinR * 1.7}
              fill="rgba(251,191,36,0.25)"
             
              stroke="gray" strokeWidth={0.8}
            />
            {/* Punto central */}
            <circle cx={pin.cx} cy={pin.cy} r={pinR} fill="#FBBF24" />

            {/* Tooltip del pin */}
            {hoveredPin === pin.id && (
              <g>
                <rect
                  x={pin.cx - tooltipW / 2}
                  y={pin.cy - tooltipH - pinR * 4}
                  width={tooltipW} height={tooltipH}
                  rx={tooltipH * 0.35}
                  fill="rgba(15,23,42,0.90)"
                />
                <polygon
                  points={`
                    ${pin.cx - pinR},${pin.cy - pinR * 4}
                    ${pin.cx + pinR},${pin.cy - pinR * 4}
                    ${pin.cx},${pin.cy - pinR * 2.2}
                  `}
                  fill="rgba(15,23,42,0.90)"
                />
                <text
                  x={pin.cx} y={pin.cy - tooltipH * 0.28 - pinR * 4}
                  textAnchor="middle"
                  fontSize={pinR * 1.8}
                  fontWeight="bold"
                  fill="white"
                  fontFamily="sans-serif"
                >
                  {pin.ciudad}
                </text>
              </g>
            )}
          </g>
        ))}
      </svg>
    </div>
  );
}