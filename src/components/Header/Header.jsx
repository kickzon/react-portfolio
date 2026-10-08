import styles from './Header.module.css'

function Header() {
  return (
    <header className={styles.header}>
      <a className={styles.logo} href="#home" aria-label="Till startsidan">
        CJ
      </a>

      <nav aria-label="Huvudnavigation">
        <ul className={styles.navList}>
          <li>
            <a href="#home">Hem</a>
          </li>
          <li>
            <a href="#about">Om mig</a>
          </li>
          <li>
            <a href="#projects">Projekt</a>
          </li>
          <li>
            <a href="#contact">Kontakt</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
