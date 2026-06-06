import nexthirehubImg from '../assets/images/Work/Image1.png'
import noteguideImg from '../assets/images/Work/Image2.png'
import seabrosImg from '../assets/images/Work/Image3.avif'

const projects = [
  {
    title: 'NextHireHub',
    type: 'AI Career Fair Platform',
    year: '2026',
    image: nexthirehubImg,
    stack: 'MERN, Tailwind CSS, Cloudinary',
    summary:
      'An AI-enabled career fair and event platform connecting students, recruiters, and event organizers with dashboards, authentication, automation, and real-time event management.',
    link: '#',
  },
  {
    title: 'NoteGuide',
    type: 'Educational Mobile App',
    year: 'Present',
    image: noteguideImg,
    stack: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cloudinary, Clerk',
    summary:
      'A mobile learning application focused on helping students organize educational content and access study material through a cleaner mobile experience.',
  },
  {
    title: 'Sea Bros Website',
    type: 'Company Website',
    year: '2025',
    image: seabrosImg,
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