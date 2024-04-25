"use client";

import { useState } from "react";

import styles from "../app/styles/Sorry.module.css";
import Link from "next/link";

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
        maafin akuu yaa sengg <br />
        aku janji gaa gitu lagi:(
      </p>

      <div className={styles.buttonsContainer}>
        <Link className={styles.buttonForgive} href={"/terimakasih"}>
          Maafin
        </Link>
        <button
          className={styles.buttonNo}
          style={{
            position: "absolute",
            top: buttonPosition.y,
            left: buttonPosition.x,
          }}
          onClick={handleMoveButton}
        >
          GAMAU
        </button>
      </div>
    </main>
  );
};

export default SorryPage;
