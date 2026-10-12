import { useState } from "react";
import styles from "./ContactForm.module.css";

const initialFormData = {
  name: "",
  email: "",
  phone: "",
  subject: "",
  message: "",
};

function validateForm(formData) {
  const validationErrors = {};

  if (!formData.name.trim()) {
    validationErrors.name = "Du behöver ange ditt namn.";
  }

  if (!formData.email.trim()) {
    validationErrors.email = "Du behöver ange din e-postadress.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    validationErrors.email = "Ange en giltig e-postadress.";
  }

  if (!formData.phone.trim()) {
    validationErrors.phone = "Du behöver ange ditt telefonnummer.";
  } else if (!/^[+\d][\d\s-]{6,}$/.test(formData.phone)) {
    validationErrors.phone = "Ange ett giltigt telefonnummer.";
  }

  if (!formData.subject) {
    validationErrors.subject = "Du behöver välja ett ämne.";
  }

  if (!formData.message.trim()) {
    validationErrors.message = "Du behöver skriva ett meddelande.";
  } else if (formData.message.trim().length < 10) {
    validationErrors.message = "Meddelandet måste innehålla minst 10 tecken.";
  }

  return validationErrors;
}

function ContactForm() {
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentFormData) => ({
      ...currentFormData,
      [name]: value,
    }));

    setErrors((currentErrors) => ({
      ...currentErrors,
      [name]: "",
    }));

    setIsSubmitted(false);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm(formData);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitted(false);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialFormData);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <div className={styles.field}>
        <label htmlFor="name">Namn</label>
        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          value={formData.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          required
        />
        {errors.name && (
          <p className={styles.errorMessage} id="name-error" role="alert">
            {errors.name}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="email">E-post</label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          value={formData.email}
          onChange={handleChange}
          required
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p className={styles.errorMessage} id="email-error" role="alert">
            {errors.email}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="phone">Telefon</label>
        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          value={formData.phone}
          onChange={handleChange}
          required
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p className={styles.errorMessage} id="phone-error" role="alert">
            {errors.phone}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="subject">Ämne</label>

        <select
          id="subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
          required
        >
          <option value="">Välj ett ämne</option>
          <option value="project">Projektförfrågan</option>
          <option value="collaboration">Samarbete</option>
          <option value="other">Övrigt</option>
        </select>

        {errors.subject && (
          <p className={styles.errorMessage} id="subject-error" role="alert">
            {errors.subject}
          </p>
        )}
      </div>

      <div className={styles.field}>
        <label htmlFor="message">Meddelande</label>
        <textarea
          id="message"
          name="message"
          rows="6"
          value={formData.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          required
        />

        {errors.message && (
          <p className={styles.errorMessage} id="message-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      {isSubmitted && (
        <p className={styles.successMessage} role="status">
          Tack! Ditt meddelande har registrerats.
        </p>
      )}

      <button className={styles.submitButton} type="submit">
        Skicka meddelande
      </button>
    </form>
  );
}

export default ContactForm;
