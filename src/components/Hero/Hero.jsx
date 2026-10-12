import { Link } from "react-router-dom";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Hej, jag heter</p>

        <h1 className={styles.title}>Chiara Jukkola</h1>

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
    </section>
  );
}

export default Hero;
