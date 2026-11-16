import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <NavLink className={styles.logo} to="/" aria-label="Till startsidan">
          CJ
        </NavLink>

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
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={closeMenu}
              >
                Hem
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={closeMenu}
              >
                Om mig
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={closeMenu}
              >
                Projekt
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? styles.activeLink : undefined
                }
                onClick={closeMenu}
              >
                Kontakt
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
