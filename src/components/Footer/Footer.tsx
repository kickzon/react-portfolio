import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const currentYear = new Date().getFullYear();

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <p>© {currentYear} Chiara Jukkola</p>
        <nav aria-label="Sidfotsnavigation">
          <ul className={styles.navigation}>
            <li>
              <Link to="/">Hem</Link>
            </li>
            <li>
              <Link to="/about">Om mig</Link>
            </li>
            <li>
              <Link to="/projects">Projekt</Link>
            </li>
            <li>
              <Link to="/contact">Kontakt</Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
