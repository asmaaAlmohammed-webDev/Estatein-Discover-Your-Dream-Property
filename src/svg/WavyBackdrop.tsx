import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux"; 
import { ABOUT_HERO } from "./Paths";

type WavyBackdropProps = {
  paths?: string[];
  colorAnimationSpeed?: number;
  waveMoveSpeed?: number;
  hoverStrokeWidth?: number;
  hoverGlow?: boolean;
  glowIntensity?: number;
  glowColor?: string;
  delayBetweenPaths?: number;
};

export default function WavyBackdrop({
  paths = ABOUT_HERO,
  colorAnimationSpeed = 12,
  waveMoveSpeed = 5,
  hoverStrokeWidth = 2,
  hoverGlow = true,
  glowIntensity = 10,
  glowColor = "#ff00ff",
  delayBetweenPaths = 0.5,
}: WavyBackdropProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [viewBox, setViewBox] = useState("0 0 0 0");
  const darkMode = useSelector((state: { theme: { darkMode: boolean } }) => state.theme.darkMode);
  const colors = darkMode 
    ? ["#1A1A1A", "#A685FA4d", "#333333", "#262626"] 
    : ["#ede7fe", "#ede7fe", "#a685fa4d", "#dbcefd"];
  const gradientValues = colors.concat(colors[0]).join(";");

  useEffect(() => {
    if (!svgRef.current || paths.length === 0) return;

    const allPaths = svgRef.current.querySelectorAll("path");
    let minX = Infinity,
      minY = Infinity,
      maxX = -Infinity,
      maxY = -Infinity;

    allPaths.forEach((path) => {
      const box = path.getBBox();
      minX = Math.min(minX, box.x);
      minY = Math.min(minY, box.y);
      maxX = Math.max(maxX, box.x + box.width);
      maxY = Math.max(maxY, box.y + box.height);
    });

    setViewBox(`${minX} ${minY} ${maxX - minX} ${maxY - minY}`);
  }, [paths]);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={viewBox}
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <defs>
          {paths.map((_, i) => (
            <linearGradient
              key={`grad-${i}`}
              id={`gradAnimated-${i}`}
              x1="100%"
              y1="0%"
              x2="0%"
              y2="0%"
            >
              {colors.map((color, idx) => (
                <stop
                  key={idx}
                  offset={`${(idx / (colors.length - 1)) * 100}%`}
                  stopColor={color}
                >
                  <animate
                    attributeName="stop-color"
                    values={gradientValues}
                    dur={`${colorAnimationSpeed}s`}
                    begin={`${i * delayBetweenPaths}s`}
                    repeatCount="indefinite"
                  />
                </stop>
              ))}
              <animateTransform
                attributeName="gradientTransform"
                type="translate"
                from="1 0"
                to="-1 0"
                dur={`${waveMoveSpeed}s`}
                begin={`${i * delayBetweenPaths}s`}
                repeatCount="indefinite"
              />
            </linearGradient>
          ))}

          {hoverGlow && (
            <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
              <feFlood floodColor={glowColor} result="glowColor" />
              <feComposite
                in="glowColor"
                in2="SourceAlpha"
                operator="in"
                result="coloredGlow"
              />
              <feGaussianBlur
                in="coloredGlow"
                stdDeviation={glowIntensity}
                result="blur"
              />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          )}

          <linearGradient id="hoverGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#ff00ff" />
            <stop offset="50%" stopColor="#703BF7" />
            <stop offset="100%" stopColor="#A685FA" />
          </linearGradient>
        </defs>

        <style>
          {`
            .wavy-backdrop-svg path {
              transition: all 0.3s ease;
              cursor: pointer;
            }
            .wavy-backdrop-svg path:hover {
              stroke-width: ${hoverStrokeWidth};
              ${hoverGlow ? "filter: url(#neonGlow);" : ""}
              stroke: url(#hoverGradient);
            }
          `}
        </style>

        {paths.map((d, i) => (
          <path
            key={i}
            d={d}
            fill="none"
            stroke={`url(#gradAnimated-${i})`}
            strokeWidth={1.5}
          />
        ))}
      </svg>
    </div>
  );
}
