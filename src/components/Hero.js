import React from 'react';
import { motion } from 'framer-motion';
import styles from '../styles/Hero.module.css';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

function Hero() {
  return (
    <motion.section
      className={styles.hero}
      id="home"
      initial="hidden"
      animate="visible"
      variants={stagger}
    >
      <div className={styles.content}>
        {/* Profile Picture */}
        <motion.div className={styles.imageWrapper} variants={fadeInUp} layout>
        <img src="/Bhanu.jpeg" alt="Profile" className={styles.profileImage} />

        </motion.div>

        {/* Name & Tagline */}
        <motion.div variants={fadeInUp}>
          <h1 className={styles.title}>Hi, I'm BhanuPrakash Reddy Poli</h1>
          <p className={styles.subtitle}>Software Developer</p>
        </motion.div>

        {/* Scroll Button */}
        {/* Resume Button */}
<motion.a
  href="https://drive.google.com/file/d/14VJGwW05BBqiPg1llguHFR5gKND0pzUD/view?usp=drivesdk"  // <-- Google drive link of my resume
  target="_blank"
  rel="noopener noreferrer"
  className={styles.scrollButton}
  variants={fadeInUp}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  View Resume
</motion.a>

      </div>
    </motion.section>
  );
}

export default Hero;
