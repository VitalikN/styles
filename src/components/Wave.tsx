import styles from "../sass/layouts/wave.module.scss";

const Wave = () => {
  const waveElements = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.wave}></div>
  ));

  return (
    <section className={styles.wave__section}>
      <div className={styles.box__wave}>{waveElements}</div>
    </section>
  );
};
export default Wave;
