import mernImg from '../assets/images/Info/Image1.jpeg'
import productImg from '../assets/images/Info/Image2.png'
import documentationImg from '../assets/images/Info/Image3.jpg'
import fitnessImg from '../assets/images/Info/Image4.jpg'

const storyBlocks = [
  {
    heading: 'MERN Stack Developer',
    body:
      'I build and deploy live web applications using MongoDB, Express.js, React.js, and Node.js, with a focus on responsive interfaces and scalable backend APIs.',
    image: mernImg,
  },
  {
    heading: 'Product-Minded Engineering',
    body:
      'I like working on dashboards, authentication flows, automation, and product features where clean UI and dependable engineering need to meet.',
    image: productImg,
  },
  {
    heading: 'Documentation & Delivery',
    body:
      'Alongside development, I have experience creating technical documentation, managing client service delivery, and helping product work move from idea to shipped result.',
    image: documentationImg,
  },
  {
    heading: 'Fitness Lover',
    body:
      'Beyond code, I stay disciplined through fitness. Whether it\'s the gym, a morning run, or pushing personal records — staying active keeps my mind sharp and my energy high for building great products.',
    image: fitnessImg,
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