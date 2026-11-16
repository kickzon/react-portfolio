import ContactForm from "../components/ContactForm/ContactForm";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import styles from "./ContactPage.module.css";

function ContactPage() {
  return (
    <section className={styles.contact}>
      <div className={styles.introduction}>
        <p className={styles.eyebrow}>Kontakt</p>
        <h1 className={styles.title}>Hör gärna av dig</h1>

        <p className={styles.description}>
          Har du en fråga, en idé eller vill du samarbeta? Skicka ett meddelande
          så återkommer jag.
        </p>

        <address className={styles.contactDetails}>
          <ul>
            <li>
              <a
                href="mailto:chiara.jukkola@gmail.com"
                aria-label="Skicka e-post till Chiara Jukkola"
              >
                <FaEnvelope aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://github.com/kickzon"
                target="_blank"
                rel="noreferrer"
                aria-label="Besök Chiara Jukkolas GitHub-profil"
              >
                <FaGithub aria-hidden="true" />
              </a>
            </li>

            <li>
              <a
                href="https://linkedin.com/in/chiara-jukkola-a7401519a"
                target="_blank"
                rel="noreferrer"
                aria-label="Besök Chiara Jukkolas LinkedIn-profil"
              >
                <FaLinkedin aria-hidden="true" />
              </a>
            </li>
          </ul>
        </address>
      </div>

      <ContactForm />
    </section>
  );
}

export default ContactPage;
