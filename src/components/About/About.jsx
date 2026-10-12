import styles from './About.module.css'

function About() {
  return (
    <section className={styles.about}>
      <div className={styles.heading}>
        <p className={styles.eyebrow}>Om mig</p>
        <h1 className={styles.title}>
          Jag kombinerar kreativitet med problemlösning
        </h1>
      </div>

      <div className={styles.content}>
        <p>
          Jag studerar till frontendutvecklare och tycker om att skapa
          webbplatser som är tydliga, tillgängliga och enkla att använda.
        </p>

        <p>
          Som person är jag positiv, nyfiken och ansvarstagande. Jag gillar nya
          utmaningar och ser dem som möjligheter att utvecklas, både tekniskt
          och kreativt.
        </p>

        <p>
          Just nu utvecklar jag mina kunskaper inom React, JavaScript och
          responsiv webbdesign. Mitt mål är att skapa genomtänkta digitala
          upplevelser där design och funktion arbetar tillsammans.
        </p>

        <h2 className={styles.skillsTitle}>Tekniker och verktyg</h2>

        <ul className={styles.skills}>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>React</li>
          <li>Git</li>
          <li>Figma</li>
        </ul>
      </div>
    </section>
  )
}

export default About
