import React from 'react';
import styles from '../styles/Contact.module.css';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>Contact Me</h2>
      <div className={styles.details}>
        <div className={styles.item}>
          <FaPhone className={styles.icon} />
          <span>+91 9848902062</span>
        </div>
        <div className={styles.item}>
          <FaEnvelope className={styles.icon} />
          <span>bhanuprakashreddypoli@gmail.com</span>
        </div>
        <div className={styles.item}>
          <FaMapMarkerAlt className={styles.icon} />
          <span>Bengaluru, India</span>
        </div>
      </div>
    </section>
  );
}

export default Contact;
