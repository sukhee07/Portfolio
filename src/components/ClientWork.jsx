import React from 'react'
import unicornImg from '../assets/images/ClientWork/Unicorn.png'
import albertaImg from '../assets/images/ClientWork/Alberta.png'

const clients = [
  {
    title: 'Unicorn Consultancy',
    location: 'Jammu',
    type: 'Client Website',
    year: '2026',
    image: unicornImg,
    stack: 'Web Development',
    summary: 'Developed a comprehensive website for Unicorn Consultancy to help scale their business and improve online presence.',
  },
  {
    title: 'Alberta Home Furnishing',
    location: 'Canada',
    type: 'Client Website',
    year: '2026',
    image: albertaImg,
    stack: 'Web Development',
    summary: 'Built a Shopify website for Alberta Home Furnishing, showcasing their furniture and home decor collections.',
  }
]

function ClientWork() {
  return (
    <section id="client-work" className="section">
      <div className="section-heading">
        <p className="eyebrow">Client Work</p>
        <h2>Freelance projects and business collaborations.</h2>
      </div>

      <div className="project-grid">
        {clients.map((project) => (
          <article className="project-card" key={project.title}>
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

export default ClientWork 