"use client";
import Link from "next/link";

import styles from "../sass/layouts/menu.module.scss";
import Image from "next/image";

const Menu = () => {
  return (
    <section className={styles.menu__section}>
      <div className={`${styles.container} ${styles.menu__flex}`}>
        <Link href="/ball" className={`${styles.navigation__link} `}>
          <Image
            className={styles.menu__img}
            src="/ball.png"
            alt="ball"
            width="150"
            height="100"
            priority={true}
          />
        </Link>
        <Link href="/cubes" className={`${styles.navigation__link} `}>
          <Image
            className={styles.menu__img}
            src="/cubes.png"
            alt="cubes"
            width="150"
            height="100"
            priority={true}
          />
        </Link>
      </div>
    </section>
  );
};
export default Menu;
