"use client";

import styles from "../sass/layouts/animationBall.module.scss";

const AnimationBall = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.box}>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.ball}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
          <div className={styles.shadow}></div>
        </div>
      </div>
    </section>
  );
};
export default AnimationBall;
