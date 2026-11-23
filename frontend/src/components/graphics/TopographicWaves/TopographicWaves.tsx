
"use client";

import { motion, useReducedMotion } from "framer-motion";
import styles from "./TopographicWaves.module.css";

// Tres recorridos diferentes para evitar que todas las líneas
// repitan la misma geometría.
const wavePatterns = [
  {
    id: "flow-a",
    path: `
      M 250 760
      C 500 620, 420 500, 700 420
      C 920 350, 780 240, 1050 220
      C 1260 200, 1180 360, 1390 330
      C 1510 310, 1550 250, 1740 205
    `,
  },
  {
    id: "flow-b",
    path: `
      M 100 760
      C 330 650, 560 730, 650 560
      C 740 390, 570 350, 800 300
      C 990 250, 1050 420, 1200 350
      C 1340 280, 1270 170, 1450 160
      C 1570 150, 1620 230, 1740 190
    `,
  },
  {
    id: "flow-c",
    path: `
      M 330 760
      C 520 540, 720 700, 820 520
      C 900 370, 760 260, 980 250
      C 1180 240, 1190 470, 1380 410
      C 1530 360, 1500 240, 1740 220
    `,
  },
{
  id: "flow-d",
  path: `
    M 760 760
    C 940 610, 1080 700, 1120 520
    C 1160 360, 980 300, 1160 230
    C 1330 170, 1390 350, 1510 300
    C 1640 245, 1570 145, 1780 115
  `,
},

];

const linesPerPattern = 5;
const lineSpacing = 14;

export default function TopographicWaves() {
  const shouldReduceMotion = useReducedMotion();

  const firstMovement = shouldReduceMotion
    ? {}
    : {
        animate: {
          x: [0, 9, 0],
          y: [0, -5, 0],
        },
        transition: {
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  const secondMovement = shouldReduceMotion
    ? {}
    : {
        animate: {
          x: [0, -7, 0],
          y: [0, 4, 0],
        },
        transition: {
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut" as const,
        },
      };

  return (
    <motion.svg
      className={styles.waves}
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 0.85, y: 0 }}
      transition={{ duration: 1.8, ease: "easeOut" }}
      aria-hidden="true"
    >
      <motion.g {...firstMovement}>
        {wavePatterns.slice(0, 2).map((pattern, patternIndex) => (
          <g key={pattern.id}>
            {Array.from({ length: linesPerPattern }, (_, index) => (
              <path
                key={`${pattern.id}-${index}`}
                d={pattern.path}
                transform={`translate(0 ${index * lineSpacing})`}
                className={styles.wave}
                opacity={0.48 - index * 0.045 - patternIndex * 0.04}
              />
            ))}
          </g>
        ))}
      </motion.g>

      <motion.g {...secondMovement}>
        {wavePatterns.slice(2).map((pattern) => (
          <g key={pattern.id}>
            {Array.from({ length: linesPerPattern }, (_, index) => (
              <path
                key={`${pattern.id}-${index}`}
                d={pattern.path}
                transform={`translate(0 ${index * lineSpacing})`}
                className={styles.wave}
                opacity={0.34 - index * 0.035}
              />
            ))}
          </g>
        ))}
      </motion.g>
      <motion.g {...firstMovement}>
  {wavePatterns.slice(3).map((pattern) => (
    <g key={pattern.id}>
      {Array.from({ length: linesPerPattern }, (_, index) => (
        <path
          key={`${pattern.id}-${index}`}
          d={pattern.path}
          transform={`translate(0 ${index * lineSpacing})`}
          className={styles.wave}
          opacity={0.38 - index * 0.035}
        />
      ))}
    </g>
  ))}
</motion.g>
    </motion.svg>
  );
}
