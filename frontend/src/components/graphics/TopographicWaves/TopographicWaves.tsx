"use client";

import { motion, useReducedMotion } from "framer-motion";

import styles from "./TopographicWaves.module.css";

type WindField = {
  id: string;
  startX: number;
  endX: number;
  startY: number;
  rise: number;
  amplitude: number;
  detail: number;
  phase: number;
  count: number;
  opacity: number;
};

const windFields: WindField[] = [
  {
    id: "breeze-a",
    startX: -700,
    endX: 2050,
    startY: 200,
    rise: 310,
    amplitude: 54,
    detail: 17,
    phase: 0.4,
    count: 9,
    opacity: 0.52,
  },
  {
    id: "breeze-b",
    startX: -900,
    endX: 2100,
    startY: 120,
    rise: 360,
    amplitude: 50,
    detail: 20,
    phase: 2.4,
    count: 9,
    opacity: 0.46,
  },
  {
    id: "breeze-c",
    startX: -600,
    endX: 1900,
    startY: 270,
    rise: 270,
    amplitude: 46,
    detail: 14,
    phase: 4.2,
    count: 9,
    opacity: 0.5,
  },
];

function makeWindPath(field: WindField, lineIndex: number) {
  const sampleCount = 72;
  const lineOffset = lineIndex * 14;
  const linePhase = field.phase + lineIndex * 0.035;
  const points = Array.from({ length: sampleCount }, (_, index) => {
    const progress = index / (sampleCount - 1);
    const x = field.startX + (field.endX - field.startX) * progress;
    const broadWave = Math.sin(progress * Math.PI * 3.4 + linePhase) * field.amplitude;
    const fineWave = Math.sin(progress * Math.PI * 9 + linePhase * 0.72) * field.detail;
    const leftwardDrop = 180 * (1 - progress) ** 2;
    const y =
      field.startY +
      progress * field.rise +
      broadWave +
      fineWave +
      lineOffset +
      leftwardDrop;

    return `${index === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`;
  });

  return points.join(" ");
}

const windFieldsWithPaths = windFields.map((field) => ({
  ...field,
  paths: Array.from({ length: field.count }, (_, lineIndex) =>
    makeWindPath(field, lineIndex),
  ),
}));

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

  const initial = shouldReduceMotion ? false : { opacity: 0, y: 18 };

  return (
    <motion.svg
      className={styles.waves}
      viewBox="0 0 1600 700"
      preserveAspectRatio="xMidYMid slice"
      initial={initial}
      animate={{ opacity: 0.85, y: 0 }}
      transition={{ duration: shouldReduceMotion ? 0 : 1.8, ease: "easeOut" }}
      aria-hidden="true"
    >
      <motion.g {...firstMovement}>
        {windFieldsWithPaths.slice(0, 2).map((field) => (
          <g key={field.id}>
            {field.paths.map((path, lineIndex) => (
              <path
                key={`${field.id}-${lineIndex}`}
                d={path}
                className={styles.wave}
                opacity={field.opacity - lineIndex * 0.008}
              />
            ))}
          </g>
        ))}
      </motion.g>

      <motion.g {...secondMovement}>
        {windFieldsWithPaths.slice(2).map((field) => (
          <g key={field.id}>
            {field.paths.map((path, lineIndex) => (
              <path
                key={`${field.id}-${lineIndex}`}
                d={path}
                className={styles.wave}
                opacity={field.opacity - lineIndex * 0.008}
              />
            ))}
          </g>
        ))}
      </motion.g>
    </motion.svg>
  );
}
