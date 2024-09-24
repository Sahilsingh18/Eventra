// Package2.tsx

import React from 'react';
import styles from './PackagePage.module.css';

const Package2 = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Wedding Package 16 Lakhs</h1>
      <p className={styles.description}>A premium selection for a lavish celebration.</p>
      <ul className={styles.serviceList}>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>VENUE</h3>
          <p>Exclusive venues for a memorable experience.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>DECORATION</h3>
          <p>Luxury decorations with personalized touches.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>THEME</h3>
          <p>Elegant themes to match your wedding style.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>CATERING</h3>
          <p>Exquisite culinary experiences from top chefs.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>PHOTOGRAPHER</h3>
          <p>Renowned photographers for stunning visuals.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>PANDIT JI</h3>
          <p>Traditional rituals led by experienced pandit ji.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>BAND AND HORSE CART</h3>
          <p>Live entertainment and majestic horse cart rides.</p>
        </li>
        <li className={styles.serviceItem}>
          <h3 className={styles.serviceHeading}>INVITATION</h3>
          <p>Elegant invitations designed to impress.</p>
        </li>
      </ul>
      <footer>
        <p>For inquiries, contact us at <a href="mailto:eventrablessings@gmail.com">eventrablessings@gmail.com</a></p>
      </footer>
    </div>
  );
};

export default Package2;
