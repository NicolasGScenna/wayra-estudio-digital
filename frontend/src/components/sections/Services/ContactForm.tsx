"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import styles from "./Services.module.css";

export default function ContactForm() {
  const reduceMotion = useReducedMotion();
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("");
  const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!contactEmail) {
      setStatus("Por ahora no podemos enviar mensajes desde este formulario.");
      return;
    }

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const message = String(formData.get("message") ?? "");
    const subject = encodeURIComponent(`Nueva consulta de ${name}`);
    const body = encodeURIComponent(
      `Nombre: ${name}\nCorreo: ${email}\n\nMensaje:\n${message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
    setStatus("Preparamos tu mensaje en tu correo para que puedas enviarlo.");
  };

  return (
    <>
      <button
        className={styles.contactToggle}
        type="button"
        aria-label={isOpen ? "Cerrar formulario de contacto" : "Abrir formulario de contacto"}
        aria-expanded={isOpen}
        aria-controls={isOpen ? "contact-form" : undefined}
        onClick={() => {
          setIsOpen((current) => !current);
          setStatus("");
        }}
      >
        <ArrowDown
          className={isOpen ? styles.contactArrowOpen : ""}
          size={23}
          strokeWidth={1.5}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.form
            id="contact-form"
            className={styles.contactForm}
            onSubmit={handleSubmit}
            initial={reduceMotion ? false : { opacity: 0, height: 0, y: -12 }}
            animate={{ opacity: 1, height: "auto", y: 0 }}
            exit={reduceMotion ? undefined : { opacity: 0, height: 0, y: -8 }}
            transition={{ duration: reduceMotion ? 0 : 0.4, ease: "easeOut" }}
            aria-label="Formulario de contacto"
          >
            <div className={styles.formFields}>
              <label className={styles.formField}>
                <span>Nombre</span>
                <input name="name" type="text" autoComplete="name" required />
              </label>
              <label className={styles.formField}>
                <span>Correo</span>
                <input name="email" type="email" autoComplete="email" required />
              </label>
              <label className={`${styles.formField} ${styles.messageField}`}>
                <span>Mensaje</span>
                <textarea name="message" rows={4} required />
              </label>
            </div>
            <div className={styles.formActions}>
              <button className={styles.submitButton} type="submit">
                Enviar mensaje <ArrowUpRight size={18} strokeWidth={1.5} />
              </button>
              <p className={styles.formStatus} role="status" aria-live="polite">
                {status}
              </p>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );
}
