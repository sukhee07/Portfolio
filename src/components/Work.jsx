import { clients } from '../data/portfolio'
function Work() {
  return (
    <section id="client-work" className="section">
      <div className="section-heading">
        <p className="eyebrow">Client Work</p>
        <h2>Freelance projects and business collaborations.</h2>
      </div>

      <div className="flex overflow-x-auto gap-5 md:gap-6 pb-6 snap-x snap-mandatory" style={{ scrollbarWidth: 'thin' }}>
        {clients.map((project) => (
          <article className="project-card flex-none w-[85vw] sm:w-[350px] lg:w-[420px] shrink-0 snap-start" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <div>
                <p>{project.type}</p>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
              </div>
              <span>{project.year}</span>
            </div>
            <p className="project-stack">{project.stack}</p>
            <p className="project-summary">{project.summary}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Work 