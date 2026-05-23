const projects = [
  {
    title: 'NextHireHub',
    type: 'AI Career Fair Platform',
    year: '2026',
    image:
      'https://res.cloudinary.com/duiflu7im/image/upload/v1779518537/ChatGPT_Image_May_1_2026_10_00_23_AM_mf9up6.png',
    stack: 'MERN, Tailwind CSS, Cloudinary',
    summary:
      'An AI-enabled career fair and event platform connecting students, recruiters, and event organizers with dashboards, authentication, automation, and real-time event management.',
    link: '#',
  },
  {
    title: 'NoteGuide',
    type: 'Educational Mobile App',
    year: 'Present',
    image:
      'https://res-console.cloudinary.com/duiflu7im/thumbnails/v1/image/upload/v1779522191/Tm90ZUd1aWRlMl90bXMzMWY=/drilldown',
    stack: 'React Native',
    summary:
      'A mobile learning application focused on helping students organize educational content and access study material through a cleaner mobile experience.',
  },
  {
    title: 'Sea Bros Website',
    type: 'Company Website',
    year: '2025',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1400&q=80',
    stack: 'Frontend, Content, Service Delivery',
    summary:
      'Created and managed the company website for Sea Bros Pvt Ltd while supporting technical documentation, client service delivery, and product development oversight.',
  },
]


function Work() {
  return (
    <section id="work" className="section">
      <div className="section-heading">
        <p className="eyebrow">Selected Work</p>
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

          </article>
        ))}
      </div>
    </section>
  )
}

export default Work