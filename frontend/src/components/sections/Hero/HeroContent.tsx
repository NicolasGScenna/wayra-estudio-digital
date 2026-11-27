"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import styles from "./Hero.module.css";

export default function HeroContent() {
  const reduceMotion = useReducedMotion();

  return (
    <section className={styles.content}>
      <motion.div
        className={styles.copy}
        initial={reduceMotion ? false : { opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: reduceMotion ? 0 : 1,
          delay: reduceMotion ? 0 : 0.2,
        }}
      >
        <span className={styles.eyebrow}>ESTUDIO DIGITAL CREATIVO</span>

        <h1>
          Ideas en
          <br />
          <span>movimiento.</span>
        </h1>

        <p>
          Creamos soluciones digitales para que tus ideas lleguen más lejos.
        </p>

        <a href="#contacto" className={styles.button}>
          Hablemos
          <ArrowUpRight size={18} strokeWidth={1.6} />
        </a>
      </motion.div>
    </section>
  );
}
