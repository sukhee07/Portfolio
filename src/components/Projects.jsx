import { projects } from '../data/portfolio'

function Projects() {
  return (
    <section id="work" className="section">
      <div className="section-heading">
        <p className="eyebrow">Personal Projects</p>
        <h2>Projects shaped around web apps, dashboards, and mobile learning.</h2>
      </div>

      <div className="project-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <img src={project.image} alt="" />
            <div className="project-content">
              <div>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
              </div>
              <span>{project.year}</span>
            </div>
            <p className="project-stack">{project.stack}</p>
            <p className="project-summary">{project.summary}</p>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link">
                View Project ↗
              </a>
            )}
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects