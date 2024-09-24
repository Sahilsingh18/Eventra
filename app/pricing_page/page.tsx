"use client";  // Add this directive to make this a client component

import React from 'react';
import { useRouter } from 'next/navigation';
import styles from './PricingPage.module.css';

const PricingPage = () => {
  const router = useRouter();

  const handleRedirect = (path: string) => {
    router.push(path);  // Redirect to different pages
  };

  return (
    <div className={styles.container}>
      {/* Apply the heading class */}
      <h1 className={styles.heading}>Wedding Packages</h1>  
      <div className={styles.imageContainer}>
        <button onClick={() => handleRedirect('/package1')} className={styles.imageButton}>
          <img src="/button_poster1.png" alt="Wedding Package 1" />
        </button>
        <button onClick={() => handleRedirect('/package2')} className={styles.imageButton}>
          <img src="/button_poster2.png" alt="Wedding Package 2" />
        </button>
        <button onClick={() => handleRedirect('/package3')} className={styles.imageButton}>
          <img src="/button_poster3.png" alt="Wedding Package 3" />
        </button>
      </div>

      {/* Separator line above the footer */}
      <div className={styles.separator}></div>
      
      {/* Footer content (if exists) */}
      <footer>
        {/* Footer goes here */}
      </footer>
    </div>
  );
};

export default PricingPage;
