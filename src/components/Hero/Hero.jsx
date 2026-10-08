import styles from "./Hero.module.css";

function Hero() {
  return (
    <section className={styles.hero} id="home">
      <div className={styles.content}>
        <p className={styles.eyebrow}>Hej, jag heter</p>

        <h1 className={styles.title}>Chiara Jukkola</h1>

        <p className={styles.role}>Frontendutvecklare under utbildning</p>

        <p className={styles.introduction}>
          Jag skapar tillgängliga och responsiva webbupplevelser där tydlig
          design möter genomtänkt kod.
        </p>

        <div className={styles.actions}>
          <a className={styles.primaryButton} href="#projects">
            Se mina projekt
          </a>

          <a className={styles.secondaryButton} href="#contact">
            Kontakta mig
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
