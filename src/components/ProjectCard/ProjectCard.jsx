import styles from './ProjectCard.module.css'

function ProjectCard({ project }) {
  const {
    title,
    description,
    technologies,
    image,
    githubUrl,
    liveUrl,
  } = project

  return (
    <article className={styles.card}>
      {image && (
        <img
          className={styles.image}
          src={image}
          alt={`Förhandsvisning av projektet ${title}`}
        />
      )}

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.description}>{description}</p>

        <ul
          className={styles.technologies}
          aria-label={`Tekniker som används i ${title}`}
        >
          {technologies.map((technology) => (
            <li className={styles.technology} key={technology}>
              {technology}
            </li>
          ))}
        </ul>

        {(githubUrl || liveUrl) && (
          <div className={styles.links}>
            {githubUrl && (
              <a
                className={styles.link}
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
            )}

            {liveUrl && (
              <a
                className={styles.link}
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
              >
                Live demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

export default ProjectCard
