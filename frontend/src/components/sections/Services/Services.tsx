import { ArrowDown, ArrowUpRight } from "lucide-react";

import ContactForm from "./ContactForm";
import Reveal from "./Reveal";
import styles from "./Services.module.css";

const services = [
  {
    number: "01",
    title: "Sistemas de gestión",
    description:
      "Ordenamos procesos y datos en herramientas claras, para que el trabajo cotidiano fluya mejor.",
    note: "Más claridad en cada día",
    shape: "flow",
  },
  {
    number: "02",
    title: "Sistemas personalizados",
    description:
      "Diseñamos soluciones digitales a medida, nacidas de la forma particular en que trabaja cada equipo.",
    note: "Hechos para tu manera de hacer",
    shape: "orbit",
  },
  {
    number: "03",
    title: "Landing pages",
    description:
      "Páginas enfocadas que cuentan una idea con claridad y acompañan cada visita hacia el próximo paso.",
    note: "Una idea, un camino claro",
    shape: "horizon",
  },
  {
    number: "04",
    title: "Portfolios profesionales",
    description:
      "Un espacio propio para mostrar tu mirada, dar contexto a tu trabajo y dejar que hable por vos.",
    note: "Tu trabajo, en su mejor luz",
    shape: "layers",
  },
  {
    number: "05",
    title: "E-commerce",
    description:
      "Experiencias de compra simples y cuidadas, pensadas para conectar tus productos con las personas.",
    note: "Comprar también puede sentirse bien",
    shape: "bloom",
  },
  {
    number: "06",
    title: "Páginas web",
    description:
      "Sitios que combinan identidad, contenido y tecnología para acompañar el crecimiento de tu proyecto.",
    note: "Una presencia que evoluciona con vos",
    shape: "tide",
  },
] as const;

function ServiceArtwork({ shape }: { shape: string }) {
  return (
    <svg
      className={`${styles.artwork} ${styles[shape]}`}
      viewBox="0 0 420 260"
      fill="none"
      aria-hidden="true"
    >
      <path d="M-24 174C45 104 84 236 159 169S263 95 318 150 382 210 446 124" />
      <path d="M-24 194C45 124 84 256 159 189S263 115 318 170 382 230 446 144" />
      <path d="M-24 214C45 144 84 276 159 209S263 135 318 190 382 250 446 164" />
      <path d="M-24 154C45 84 84 216 159 149S263 75 318 130 382 190 446 104" />
      <path d="M-24 134C45 64 84 196 159 129S263 55 318 110 382 170 446 84" />
      <path d="M252 87C258 52 291 38 320 56C349 74 350 111 327 133C304 155 268 145 254 120C248 109 247 98 252 87Z" />
      <path d="M270 91C276 71 295 65 311 75C328 85 330 107 317 120C304 133 282 128 273 113C269 106 267 99 270 91Z" />
    </svg>
  );
}

export default function Services() {
  return (
    <section className={styles.section} aria-labelledby="services-title">
      <div className={styles.intro} id="nosotros">
        <div className={styles.introCopy}>
          <Reveal initialY={14} amount={0.5} duration={0.65}>
            <span className={styles.eyebrow}>UN ESTUDIO, MUCHAS POSIBILIDADES</span>
          </Reveal>
          <Reveal initialY={24} amount={0.35} duration={0.8} delay={0.08}>
            <h2 id="services-title">
              Lo digital también puede sentirse <em>natural.</em>
            </h2>
          </Reveal>
          <Reveal initialY={18} amount={0.35} duration={0.7} delay={0.16}>
            <p>
              Escuchamos lo que necesitás, encontramos el ritmo de tu proyecto y
              creamos herramientas digitales que te ayuden a llegar más lejos.
            </p>
          </Reveal>
        </div>
        <Reveal initialY={0} amount={0.2} duration={0.8} delay={0.3}>
          <a
            className={styles.scrollHint}
            href="#servicios-lista"
            aria-label="Explorar servicios"
          >
            <span>Explorá lo que podemos hacer juntos</span>
            <ArrowDown size={17} strokeWidth={1.5} />
          </a>
        </Reveal>
      </div>

      <div className={styles.list} id="servicios-lista">
        <div className={styles.listHeading} id="servicios">
          <span>01 — 06</span>
          <span>Servicios para ideas en movimiento</span>
        </div>
        {services.map((service, index) => (
          <Reveal
            key={service.number}
            initialY={34}
            amount={0.2}
            duration={0.75}
            delay={0.04}
          >
            <article className={`${styles.service} ${index % 2 ? styles.reverse : ""}`}>
              <div className={styles.serviceText}>
                <span className={styles.number}>{service.number}</span>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <span className={styles.serviceNote}>{service.note}</span>
                </div>
                <ArrowUpRight className={styles.serviceArrow} size={21} strokeWidth={1.5} />
              </div>
              <div className={`${styles.visual} ${styles[`visual${index + 1}`]}`}>
                <span className={styles.visualLabel}>WAYRA · EN MOVIMIENTO</span>
                <ServiceArtwork shape={service.shape} />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <footer className={styles.footer} id="contacto">
        <div className={styles.footerInner}>
          <Reveal initialY={14} amount={0.4} duration={0.65}>
            <span className={styles.eyebrow}>
              CADA PROYECTO EMPIEZA CON UNA CONVERSACIÓN
            </span>
          </Reveal>
          <Reveal initialY={22} amount={0.4} duration={0.75} delay={0.08}>
            <h2>¿Qué idea te gustaría poner en <em>movimiento?</em></h2>
          </Reveal>
          <ContactForm />
          <div className={styles.footerBottom}>
            <span>WAYRA · ESTUDIO DIGITAL CREATIVO</span>
            <a href="#inicio" aria-label="Volver al inicio de la página">
              Volver al inicio <ArrowUpRight size={16} strokeWidth={1.5} />
            </a>
            <span>CREATIVIDAD · TECNOLOGÍA · DISEÑO</span>
          </div>
        </div>
      </footer>
    </section>
  );
}
