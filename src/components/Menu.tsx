"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../sass/layouts/menu.module.scss";
import Image from "next/image";

const Menu = () => {
  const pathname = usePathname();

  return (
    <section className={styles.menu__section}>
      <div className={styles.container}>
        <Link
          href="/ball"
          className={`${styles.navigation__link} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          <Image
            className={styles.single__img}
            src="/ball.png"
            alt="ball"
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
