import { useState } from "react";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <a className={styles.logo} href="#home" aria-label="Till startsidan">
          CJ
        </a>

        <button
          className={styles.menuButton}
          type="button"
          aria-label={isMenuOpen ? "Stäng meny" : "Öppna meny"}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span aria-hidden="true">{isMenuOpen ? "✕" : "☰"}</span>
        </button>

        <nav
          id="main-navigation"
          className={`${styles.navigation} ${
            isMenuOpen ? styles.navigationOpen : ""
          }`}
          aria-label="Huvudnavigation"
        >
          <ul className={styles.navList}>
            <li>
              <a href="#home" onClick={closeMenu}>
                Hem
              </a>
            </li>
            <li>
              <a href="#about" onClick={closeMenu}>
                Om mig
              </a>
            </li>
            <li>
              <a href="#projects" onClick={closeMenu}>
                Projekt
              </a>
            </li>
            <li>
              <a href="#contact" onClick={closeMenu}>
                Kontakt
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
