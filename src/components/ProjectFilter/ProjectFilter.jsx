import styles from "./ProjectFilter.module.css";

function ProjectFilter({
  technologies,
  selectedTechnologies,
  onToggle,
  onReset,
}) {
  return (
    <section className={styles.filter} aria-labelledby="filter-heading">
      <h2 className={styles.title} id="filter-heading">
        Filtrera efter teknik
      </h2>

      <div className={styles.buttons}>
        {technologies.map((technology) => {
          const isSelected = selectedTechnologies.includes(technology);

          return (
            <button
              className={styles.filterButton}
              type="button"
              key={technology}
              aria-pressed={isSelected}
              onClick={() => onToggle(technology)}
            >
              {technology}
            </button>
          );
        })}
      </div>

      {selectedTechnologies.length > 0 && (
        <button className={styles.resetButton} type="button" onClick={onReset}>
          Rensa filter
        </button>
      )}
    </section>
  );
}

export default ProjectFilter;
