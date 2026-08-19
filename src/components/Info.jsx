import { storyBlocks } from '../data/portfolio'

function Info() {
  return (
    <section id="info" className="section info-section">
      <div className="section-heading">
        <p className="eyebrow">About Me</p>
        <h2>
          Hello! I'm Sukhee
        </h2>
      </div>

      <div className="story-grid">
        {storyBlocks.map((block, index) => (
          <article className="story-block" key={block.heading}>
            <img src={block.image} alt="" />
            <div>
              <span>0{index + 1}</span>
              <h3>{block.heading}</h3>
              <p>{block.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Info