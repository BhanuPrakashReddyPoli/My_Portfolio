import React from 'react';
import styles from '../styles/Navbar.module.css';

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>Hey There!</div>
      <ul className={styles.menu}>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
