"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

import Navbar from "@/components/layout/Navbar/Navbar";
import Landscape from "@/components/graphics/Landscape/Landscape";
import TopographicWaves from "@/components/graphics/TopographicWaves/TopographicWaves";

import styles from "./Hero.module.css";


export default function Hero() {
  return (
    <main className={styles.hero} id="inicio">
      <Landscape />

      <Navbar />

      <section className={styles.content}>
        <motion.div
          className={styles.copy}
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
        >
          <span className={styles.eyebrow}>
            ESTUDIO DIGITAL CREATIVO
          </span>

          <h1>
            Ideas en
            <br />
            <span>movimiento.</span>
          </h1>

          <p>
            Creamos soluciones digitales para que tus
            ideas lleguen más lejos.
          </p>

          <a
            href="#contacto"
            className={styles.button}
          >
            Hablemos
            <ArrowUpRight size={18} strokeWidth={1.6} />
          </a>
        </motion.div>
      </section>

      <TopographicWaves />

      <div className={styles.bottomLabel}>
        CREATIVIDAD · TECNOLOGÍA · DISEÑO
      </div>
    </main>
  );
}
