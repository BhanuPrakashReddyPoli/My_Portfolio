import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Projects.module.css';

const projectList = [
  {
    title: 'Portfolio Website',
    image: 'Project1.webp',
    description: 'A personal portfolio built with React and CSS Modules.',
    tech: ['React', 'CSS'],
    github: 'https://github.com/BhanuPrakashReddyPoli'
  },
  {
    title: 'Mahavruksha Realty & Developers',
    image: 'Project2.webp',
    description: 'A real estate website for Mahavruksha Realty & Developers. Visit Mahavruksha.com',
    tech: ['React', 'JavaScript'],
    github: 'https://github.com/BhanuPrakashReddyPoli/Mahavruksha'
  }
  ,
  {
    title: 'Weather Finder',
    image: 'Project3.webp',
    description: 'A weather app that shows real-time data using OpenWeather API.',
    tech: ['React', 'API', 'CSS'],
    github: 'https://github.com/BhanuPrakashReddyPoli'
  },
  {
    title: 'Google Calendar Clone',
    image: 'Project4.webp',
    description: 'Replicated google calendar to schedule/add mettings etc',
    tech: ['React','Javascript'],
    github: 'https://github.com/BhanuPrakashReddyPoli/Calendar_Clone'
  }
  // Add more projects here...
];

function Projects() {
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
            <img src={project.image} alt={project.title} className={styles.image} />
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
