import { skillGroups } from '../data/portfolio'

function Skills() {
  return (
    <section id="skills" className="section skills-section">
      <div className="section-heading">
        <p className="eyebrow">Technical Summary</p>
        <h2>A focused stack for building full-stack products end to end.</h2>
      </div>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <article className="skill-card" key={group.title}>
            <h3>{group.title}</h3>
            <div>
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Skills