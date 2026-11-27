import Navbar from "@/components/layout/Navbar/Navbar";
import HeroContent from "@/components/sections/Hero/HeroContent";
import Landscape from "@/components/graphics/Landscape/Landscape";
import TopographicWaves from "@/components/graphics/TopographicWaves/TopographicWaves";

import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <main className={styles.hero} id="inicio">
      <Landscape />

      <Navbar />
      <HeroContent />

      <TopographicWaves />

      <div className={styles.bottomLabel}>
        CREATIVIDAD · TECNOLOGÍA · DISEÑO
      </div>
    </main>
  );
}
