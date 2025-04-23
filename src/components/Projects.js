import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

const projectList = [
  {
    title: 'Portfolio Website',
    image: 'Project1.webp',
    description: 'A responsive and visually appealing portfolio website built to showcase my projects, skills, and contact information. Developed using modern frontend technologies and deployed on Vercel for seamless performance and fast load times. The site highlights my work through a clean UI and easy navigation, making it simple for visitors to explore my background and get in touch. This project reflects my ability to design, build, and deploy real-world web applications.',
    tech: ['React','Java script','CSS'],
    github: 'https://github.com/BhanuPrakashReddyPoli/My_Portfolio'
  },
  {
    title: 'Mahavruksha Realty & Developers',
    image: 'Project2.webp',
    description: 'A modern and user-friendly real estate website designed to showcase property listings, company details, and contact information. Built with a focus on clean design, responsiveness, and usability, this frontend project provides a strong foundation for a full-fledged platform. Users can browse featured properties and navigate through different sections effortlessly. The backend functionality — including dynamic property data and contact form handling — is currently under development and will be integrated soon.',
    tech: ['React', 'JavaScript'],
    github: 'https://github.com/BhanuPrakashReddyPoli/Mahavruksha'
  },
  {
    title: 'Mini-full-stack-authentication-app',
    images: ['mini1.jpeg','mini2.jpeg','mini1.jpeg'], // multiple screenshots
    description: 'A mini full-stack web application that allows users to register, log in, and manage tasks efficiently. Built using Spring Boot (Java) for the backend and connected to a local database, it securely handles user credentials and session flow. Upon successful login, users are taken to a personalized dashboard displaying their to-dos, tasks, and relevant information. This project showcases my understanding of backend development, authentication flow, and data-driven UI updates.',
    tech: ['Spring Boot with Java','Javascript','MySQL','CSS'],
    github: 'https://github.com/BhanuPrakashReddyPoli/Mini-Fullstack-Authentication-App'
  },
  {
    title: 'Google Calendar Clone',
    image: 'Project4.webp',
    description: 'As an initial task to sharpen my frontend skills, I recreated the Google Calendar interface with a focus on layout, interactivity, and responsiveness. This project replicates the core structure and visual feel of the original calendar, including the sidebar, monthly view, and day/week navigation. It gave me hands-on experience with designing complex UI layouts and understanding user workflows in calendar-based applications.',
    tech: ['React','Javascript','CSS'],
    github: 'https://github.com/BhanuPrakashReddyPoli/Calendar_Clone'
  }
];

function Projects() {
  useEffect(() => {
    const carousels = document.querySelectorAll(`.${styles.carousel}`);
    carousels.forEach((carousel) => {
      const images = carousel.querySelectorAll(`.${styles.carouselImage}`);
      let current = 0;
      if (images.length > 1) {
        images[current].classList.add(styles.active);
        setInterval(() => {
          images[current].classList.remove(styles.active);
          current = (current + 1) % images.length;
          images[current].classList.add(styles.active);
        }, 3000);
      }
    });
  }, []);

  return (
    <section className={styles.projects} id="projects">
      <h2 className={styles.heading}>My Projects</h2>
      <div className={styles.grid}>
        {projectList.map((project, index) => (
          <motion.div
            className={styles.card}
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            {project.images ? (
              <div className={styles.carousel}>
                {project.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${project.title} screenshot ${i + 1}`}
                    className={`${styles.carouselImage}`}
                  />
                ))}
              </div>
            ) : (
              <img src={project.image} alt={project.title} className={styles.image} />
            )}
            <div className={styles.content}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className={styles.tech}>
                {project.tech.map((t, i) => (
                  <span key={i}>{t}</span>
                ))}
              </div>
              <div className={styles.buttons}>
                <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
