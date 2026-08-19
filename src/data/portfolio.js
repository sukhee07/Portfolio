import nexthirehubImg from '../assets/images/Projects/Nexthirehub.png'
import noteguideImg from '../assets/images/Projects/NoteGuide.png'
import portfolioImg from '../assets/images/Projects/Portfolio.svg'

import unicornImg from '../assets/images/Work/Unicorn.png'
import albertaImg from '../assets/images/Work/Alberta.png'
import crmImg from '../assets/images/Work/CRM.png'
import confidential from '../assets/images/Work/Confidential.png'

import mernImg from '../assets/images/Info/Sukhee.jpeg'
import productImg from '../assets/images/Info/ProductMinded.png'
import documentationImg from '../assets/images/Info/Research.png'
import fitnessImg from '../assets/images/Info/Fitness.jpg'

export const projects = [
  {
    title: 'NextHireHub',
    type: 'AI Career Fair Platform',
    year: '2026',
    image: nexthirehubImg,
    stack: 'MERN, Tailwind CSS, Cloudinary',
    summary:
      'An AI-enabled career fair and event platform connecting students, recruiters, and event organizers with dashboards, authentication, automation, and real-time event management.',
    link: 'https://next-hire-hub.vercel.app/',
  },
  {
    title: 'NoteGuide',
    type: 'Educational Mobile App',
    year: 'Present',
    image: noteguideImg,
    stack: 'React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Cloudinary, Clerk',
    summary:
      'A mobile learning application focused on helping students organize educational content and access study material through a cleaner mobile experience.',
    link: 'https://note-guide.vercel.app/',
  },
  {
    title: 'Personal Portfolio',
    type: 'Personal Website',
    year: '2026',
    image: portfolioImg,
    stack: 'React.js, Tailwind CSS, Framer-motion',
    summary:
      'A professional portfolio website designed to highlight my journey as a full-stack developer and entrepreneur.',
    link: 'https://sukhee.info/',
  },
]

export const clients = [
  {
    title: 'Unicorn Consultancy',
    location: 'Jammu',
    type: 'Client Website',
    year: '2026',
    image: unicornImg,
    stack: 'MERN',
    summary: 'Developed a comprehensive website for Unicorn Consultancy to help scale their business and improve online presence.',
  },
  {
    title: 'Alberta Home Furnishing',
    location: 'Canada',
    type: 'Client Website',
    year: '2026',
    image: albertaImg,
    stack: 'Shopify',
    summary: 'Built a Shopify website for Alberta Home Furnishing, showcasing their furniture and home decor collections.',
  },
  {
    title: 'Immigration CRM',
    location: 'Jammu',
    type: 'Web Application',
    year: '2026',
    image: crmImg,
    stack: 'PHP',
    summary: 'Client relationship management application built to streamline business processes and improve client management. Features a clean interface and smooth user experience.',
  },
  {
    title: 'SeaBros Website',
    location: 'Vijaypur',
    type: 'Client Website',
    year: '2025',
    image: confidential,
    stack: 'Wordpress',
    summary: 'Built a website for SeaBros to help them scale their business and improve online presence.',
  }
]

export const storyBlocks = [
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
    heading: 'Research & Documentation',
    body:
      'Great software requires great research and documentation. I believe in leaving code better than I found it, establishing clear technical guides, and ensuring that any developer can jump into my repos and understand the architecture immediately.',
    image: documentationImg,
  },
  {
    heading: 'Fitness Lover',
    body:
      'Beyond code, I stay disciplined through fitness. Whether it\'s the gym, a morning run, or pushing personal records — staying active keeps my mind sharp and my energy high for building great products.',
    image: fitnessImg,
  },
]

export const skillGroups = [
  {
    title: 'Languages',
    items: ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'C++'],
  },
  {
    title: 'Frontend',
    items: ['React.js', 'TypeScript', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    title: 'Backend & Databases',
    items: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'PostgreSQL'],
  },
  {
    title: 'Tools & Workflows',
    items: ['VS Code', 'Antigravity', 'Git', 'GitHub', 'Figma', 'Cloudinary'],
  },
]

export const experience = [
  {
    company: 'ITsLancer',
    location: 'Jammu',
    role: 'Founder & Full Stack Developer',
    date: 'June 2026 - Present',
    detail:
      'Developed responsive websites and web applications using React.js, Node.js, Express.js, MongoDB, and Shopify. Customized Shopify themes to improve performance, responsiveness, and user experience. Collaborated directly with clients to gather requirements, provide technical solutions, and deliver projects on time. Designed and deployed business websites, landing pages, and branding assets including logos and UI components. Managed the complete project lifecycle, from requirement analysis to deployment and post-launch support.',
  },
  {
    company: 'GoCoder Inventure',
    location: 'Mohali',
    role: 'Junior Software Engineer',
    date: 'Jan 2026 - June 2026',
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

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'University of Jammu',
    date: 'Aug 2024 - Sept 2026',
  },
  {
    degree: 'B.Sc. in Computer Applications',
    school: 'Cluster University of Jammu',
    date: 'Jul 2020 - Aug 2023',
  },
]
