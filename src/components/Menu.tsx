"use client";
import Link from "next/link";

import styles from "../sass/layouts/menu.module.scss";
import Image from "next/image";

const Menu = () => {
  return (
    <section className={styles.menu__section}>
      <div className={`${styles.container} `}>
        <ul className={styles.menu__flex}>
          <li className={styles.list__item}>
            <Link href="/ball" className={`${styles.navigation__link} `}>
              <Image
                className={styles.menu__img}
                src="/ball.png"
                alt="ball"
                width="200"
                height="200"
                priority={true}
              />
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href="/contacts" className={`${styles.navigation__link} `}>
              <Image
                className={styles.menu__img}
                src="/contacts.png"
                alt="contacts"
                width="200"
                height="200"
                priority={true}
              />
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href="/cubes" className={`${styles.navigation__link} `}>
              <Image
                className={styles.menu__img}
                src="/cubes.png"
                alt="cubes"
                width="200"
                height="200"
                priority={true}
              />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Menu;
