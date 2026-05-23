const experience = [
  {
    company: 'GoCoder Inventurge',
    location: 'Mohali',
    role: 'Junior Software Engineer',
    date: 'Jan 2026 - Present',
    detail:
      'Working on full-stack web application development with the MERN stack, building responsive user interfaces, integrating backend APIs, and following modern software engineering and deployment workflows.',
  },
  {
    company: 'Sea Bros Pvt Ltd',
    location: 'Vijaypur',
    role: 'Technical Writer',
    date: 'May 2025 - Aug 2025',
    detail:
      'Created technical documentation, managed service delivery for clients, built the company website, and supported software product development.',
  },
]
function Experience() {
  return (
    <section className="section experience-section">
      <div className="section-heading">
        <p className="eyebrow">Experience</p>
        <h2>Current engineering work, documentation, and delivery experience.</h2>
      </div>

      <div className="experience-list">
        {experience.map((item) => (
          <article className="experience-row" key={`${item.company}-${item.role}`}>
            <div>
              <h3>{item.company}</h3>
              <p>{item.location}</p>
            </div>
            <div>
              <time>{item.date}</time>
              <p>{item.role}</p>
            </div>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
export default Experience