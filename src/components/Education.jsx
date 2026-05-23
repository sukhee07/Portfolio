const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'University of Jammu',
    date: 'Aug 2024 - Jun 2026',
  },
  {
    degree: 'B.Sc. in Computer Applications',
    school: 'Cluster University of Jammu',
    date: 'Jul 2020 - Aug 2023',
  },
]

function Education() {
  return (
    <section className="section education-section">
      <div className="section-heading">
        <p className="eyebrow">Education</p>
        <h2>Computer applications foundation with current MCA studies.</h2>
      </div>

      <div className="education-list">
        {education.map((item) => (
          <article className="education-row" key={item.degree}>
            <h3>{item.degree}</h3>
            <p>{item.school}</p>
            <time>{item.date}</time>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Education