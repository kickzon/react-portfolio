import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

const fullName = "Chiara Jukkola...";

const prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;

function Hero() {
  const [displayedName, setDisplayedName] = useState(
  prefersReducedMotion ? fullName : "",
);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let characterIndex = 0;

    const intervalId = setInterval(() => {
      characterIndex += 1;
      setDisplayedName(fullName.slice(0, characterIndex));

      if (characterIndex === fullName.length) {
        clearInterval(intervalId);
      }
    }, 120);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Hej, jag heter</p>

        <h1 className={styles.title} aria-label={fullName}>
          <span aria-hidden="true">{displayedName}</span>
        </h1>

        <p className={styles.role}>Frontendutvecklare under utbildning</p>

        <p className={styles.introduction}>
          Jag skapar tillgängliga och responsiva webbupplevelser där tydlig
          design möter genomtänkt kod.
        </p>

        <div className={styles.actions}>
          <Link className={styles.primaryButton} to="/projects">
            Se mina projekt
          </Link>

          <Link className={styles.secondaryButton} to="/contact">
            Kontakta mig
          </Link>
        </div>
      </div>

      <div className={styles.portraitWrapper}>
        <div
          className={`${styles.shape} ${styles.shapeOne}`}
          aria-hidden="true"
        />
        <div
          className={`${styles.shape} ${styles.shapeTwo}`}
          aria-hidden="true"
        />

        <img
          className={styles.portrait}
          src="/images/chiara-portrait.JPG"
          alt="Porträtt av Chiara Jukkola"
        />
      </div>
    </section>
  );
}

export default Hero;
