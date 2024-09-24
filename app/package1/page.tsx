// Package1.tsx

import React from 'react';
import styles from './PackagePage.module.css';

const Package1 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wedding Package 21 Lakhs</h1>
      <p className={styles.description}>Tailored to make your special day unforgettable.</p>
      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>VENUE</h3>
          <p>Elegant venues to fit your style and guest count.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>DECORATION</h3>
          <p>Beautiful decorations that reflect your theme.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>THEME</h3>
          <p>Customized themes tailored to your vision.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>CATERING</h3>
          <p>Delicious catering options to please every palate.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>PHOTOGRAPHER</h3>
          <p>Professional photographers to capture your special moments.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>PANDIT JI</h3>
          <p>Experienced pandit ji for traditional rituals.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>BAND AND HORSE CART</h3>
          <p>Live music and traditional horse cart for a grand entry.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>INVITATION</h3>
          <p>Custom-designed invitations for your guests.</p>
        </li>
      </ul>
      <footer>
        <p>For inquiries, contact us at <a href="mailto:eventrablessings@gmail.com">eventrablessings@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default Package1;
