import type { SVGProps } from "react";

type WayraSymbolProps = SVGProps<SVGSVGElement> & {
  color?: string;
};

export default function WayraSymbol({
  color = "currentColor",
  className,
  ...props
}: WayraSymbolProps) {
  return (
    <svg
      viewBox="0 0 300 116"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Símbolo de WAYRA"
      {...props}
    >
      <g transform="scale(1.15 1)">
        <path
          d="
            M 8 15
            C 46 11, 68 35, 83 62
            C 87 69, 93 69, 97 61
            C 108 37, 115 14, 130 14
            C 145 14, 152 37, 163 61
            C 167 69, 173 69, 177 62
            C 192 35, 214 11, 252 15
            C 231 25, 222 54, 206 83
            C 190 110, 156 109, 141 81
            C 136 72, 133 65, 130 65
            C 127 65, 124 72, 119 81
            C 104 109, 70 110, 54 83
            C 38 54, 29 25, 8 15
            Z
          "
          fill={color}
        />
      </g>
    </svg>
  );
}