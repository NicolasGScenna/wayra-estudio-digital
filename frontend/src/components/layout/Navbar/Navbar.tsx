"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import WayraSymbol from "@/components/brand/WayraSymbol";
import styles from "./Navbar.module.css";

const navigationLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={styles.header}>
      <Link
        href="#inicio"
        className={styles.brand}
        aria-label="WAYRA - Inicio"
        onClick={closeMenu}
      >
        <WayraSymbol className={styles.symbol} />

        <span className={styles.brandText}>
          <span className={styles.brandName}>WAYRA</span>
          <span className={styles.brandDescription}>
            ESTUDIO DIGITAL
          </span>
        </span>
      </Link>

      <nav className={styles.navigation} aria-label="Navegación principal">
        {navigationLinks.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      <button
        type="button"
        className={styles.menuToggle}
        onClick={() => setIsMenuOpen((current) => !current)}
        aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isMenuOpen}
        aria-controls="mobile-navigation"
      >
        {isMenuOpen ? <X size={27} /> : <Menu size={27} />}
      </button>

      <nav
        id="mobile-navigation"
        className={`${styles.mobileNavigation} ${
          isMenuOpen ? styles.mobileNavigationOpen : ""
        }`}
        aria-label="Navegación móvil"
        aria-hidden={!isMenuOpen}
      >
        {navigationLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={closeMenu}
            tabIndex={isMenuOpen ? 0 : -1}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
