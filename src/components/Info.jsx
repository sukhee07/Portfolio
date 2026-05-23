const storyBlocks = [
  {
    heading: 'MERN Stack Developer',
    body:
      'I build and deploy live web applications using MongoDB, Express.js, React.js, and Node.js, with a focus on responsive interfaces and scalable backend APIs.',
    image:
      'https://res.cloudinary.com/duiflu7im/image/upload/v1778313890/nexthirehub_events/isf7ljjaspamlrcpai1h.jpg',
  },
  {
    heading: 'Product-Minded Engineering',
    body:
      'I like working on dashboards, authentication flows, automation, and product features where clean UI and dependable engineering need to meet.',
    image:
      'https://res.cloudinary.com/duiflu7im/image/upload/v1779520433/Screenshot_2026-05-23_at_12.41.29_PM_xr8ttg.png',
  },
  {
    heading: 'Documentation & Delivery',
    body:
      'Alongside development, I have experience creating technical documentation, managing client service delivery, and helping product work move from idea to shipped result.',
    image:
      'https://res.cloudinary.com/duiflu7im/image/upload/v1779520146/WhatsApp_Image_2026-05-23_at_12.37.09_m8hqdb.jpg',
  },
]

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