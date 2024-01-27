"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import styles from "../sass/layouts/header.module.scss";

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link
          href="/"
          className={`${styles.header__link} ${
            pathname === "/" ? styles.active : ""
          }`}
        >
          Home
        </Link>
      </div>
    </header>
  );
};
export default Header;
