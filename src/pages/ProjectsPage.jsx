import { useState } from 'react'
import projects from '../data/projects'
import ProjectCard from '../components/ProjectCard/ProjectCard'
import ProjectFilter from '../components/ProjectFilter/ProjectFilter'
import styles from './ProjectsPage.module.css'

const allTechnologies = [
  ...new Set(projects.flatMap((project) => project.technologies)),
].sort()

function ProjectsPage() {
  const [selectedTechnologies, setSelectedTechnologies] = useState([])

  function toggleTechnology(technology) {
    setSelectedTechnologies((currentTechnologies) =>
      currentTechnologies.includes(technology)
        ? currentTechnologies.filter((item) => item !== technology)
        : [...currentTechnologies, technology],
    )
  }

  function resetFilters() {
    setSelectedTechnologies([])
  }

  const filteredProjects =
    selectedTechnologies.length === 0
      ? projects
      : projects.filter((project) =>
          selectedTechnologies.every((technology) =>
            project.technologies.includes(technology),
          ),
        )

  return (
    <section className={styles.projects}>
      <header className={styles.pageHeader}>
        <p className={styles.eyebrow}>Portfolio</p>
        <h1 className={styles.title}>Mina projekt</h1>
        <p className={styles.introduction}>
          Här hittar du ett urval av projekt som visar vad jag har arbetat med
          och vilka tekniker jag har använt.
        </p>
      </header>

      <ProjectFilter
        technologies={allTechnologies}
        selectedTechnologies={selectedTechnologies}
        onToggle={toggleTechnology}
        onReset={resetFilters}
      />

      <p aria-live="polite">{filteredProjects.length} projekt visas</p>

      {filteredProjects.length > 0 ? (
        <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <p>Inga projekt matchar de valda teknikerna.</p>
      )}
    </section>
  )
}

export default ProjectsPage
