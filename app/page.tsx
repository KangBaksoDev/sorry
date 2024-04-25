'use client'

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import styles from '../app/styles/Sorry.module.css'

const SorryPage = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 615, y: 300 });

  const handleMoveButton = () => {
    const randomX = Math.random() * (window.innerWidth - 200); // 200 adalah lebar tombol
    const randomY = Math.random() * (window.innerHeight - 100); // 100 adalah tinggi tombol
    setButtonPosition({ x: randomX, y: randomY });
  };
  return (
    <main className={styles.main}>
      <div className={styles.particles}></div>
        <h1 className={styles.title}>Sengg Maafin akuuuu</h1>

        <p className={styles.description}>
          maafin yaaaa
        </p>

        <div className={styles.buttonsContainer}>
          <button className={styles.buttonForgive}>Maafin</button>
          <button
          className={styles.buttonNo}
          style={{ position: 'absolute', top: buttonPosition.y, left: buttonPosition.x }}
          onClick={handleMoveButton}
        >
          GAMAU
        </button>
        </div>
      </main>
  );
};

export default SorryPage;