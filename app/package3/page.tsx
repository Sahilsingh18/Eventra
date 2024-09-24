// Package3.tsx

import React from 'react';
import styles from './PackagePage.module.css';

const Package3 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wedding Package 11 Lakhs</h1>
      <p className={styles.description}>The ultimate package for a dream wedding.</p>
      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>VENUE</h3>
          <p>Stunning venues with breathtaking views.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>DECORATION</h3>
          <p>High-end decorations that dazzle your guests.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>THEME</h3>
          <p>Custom themes to reflect your unique love story.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>CATERING</h3>
          <p>Gourmet catering with personalized menu options.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>PHOTOGRAPHER</h3>
          <p>Top-notch photographers to capture every moment.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>PANDIT JI</h3>
          <p>Experienced pandit ji for all your rituals.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>BAND AND HORSE CART</h3>
          <p>Live band and horse cart for an epic celebration.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>INVITATION</h3>
          <p>Custom invitations that set the tone for your wedding.</p>
        </li>
      </ul>
      <footer>
        <p>For inquiries, contact us at <a href="mailto:eventrablessings@gmail.com">eventrablessings@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default Package3;
