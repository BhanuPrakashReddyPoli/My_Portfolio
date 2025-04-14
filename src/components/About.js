import React from 'react';
import styles from '../styles/About.module.css';

function About() {
  return (
    <section className={styles.about} id="about">
      <h2>About Me</h2>
      <p>
      I'm a Computer Science graduate (2023) with a strong interest in software development. Skilled in Java, MySQL, Hibernate, Spring, and React, with hands-on experience in building and maintaining applications. I'm a quick learner and problem solver, looking for entry-level opportunities to grow as a developer.
      </p>
      <ul className={styles.skills}>
        <li>Java</li>
        <li>MySQL</li>
        <li>React</li>
        <li>Hibernate</li>
        <li>Spring Core</li>
      </ul>
    </section>
  );
}

export default About;
