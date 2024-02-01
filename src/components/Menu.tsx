"use client";
import Link from "next/link";

import { AiOutlineMail } from "react-icons/ai";
import styles from "../sass/layouts/menu.module.scss";
import { FaSearch, FaComments } from "react-icons/fa";
import { BiLogoTiktok } from "react-icons/bi";

const Menu = () => {
  const waveElements = Array.from({ length: 20 }, (_, index) => (
    <div key={index} className={styles.wave}></div>
  ));
  return (
    <section className={styles.menu__section}>
      <div className={`${styles.container} `}>
        <ul className={styles.menu__flex}>
          <li className={`${styles.list__item} ${styles.list__item__ball}`}>
            <Link href="/ball" className={`${styles.navigation__link} `}>
              <div className={`${styles.box} ${styles.box__ball__menu}`}>
                <div className={`${styles.ball} ${styles.ball__menu}`}></div>

                <div
                  className={`${styles.shadow} ${styles.shadow__menu}`}
                ></div>
              </div>
            </Link>
          </li>
          <li className={styles.list__item}>
            <Link href="/contacts" className={`${styles.navigation__link} `}>
              <div className={styles.contacts__list__item}>
                <div className={styles.contacts__list__link}>
                  <AiOutlineMail className={styles.contacts__list__icon} />
                </div>
              </div>
            </Link>
          </li>

          <li className={styles.list__item}>
            <Link
              href="/network"
              className={`${styles.network__list__link} ${styles.tiktok}`}
            >
              <BiLogoTiktok
                className={`${styles.network__list__icon} ${styles.icon__tiktok}`}
              />
            </Link>
          </li>

          <li className={`${styles.list__item} ${styles.cubes__item}`}>
            <Link
              href="/cubes"
              className={`${styles.navigation__link} ${styles.cubes__navigation__link} `}
            >
              <div className={styles.cubes__list}>
                <div className={styles.cubes__list__item}>
                  <div className={`${styles.cubes__link} `}>
                    <span className={styles.cubes__list__icon}>
                      <FaComments />
                    </span>
                    <h3 className={styles.cubes__title}>title1</h3>
                  </div>
                </div>
                <div className={styles.cubes__list__item}>
                  <div className={`${styles.cubes__link} `}>
                    <span className={styles.cubes__list__icon}>
                      <FaSearch />
                    </span>
                    <h3 className={styles.cubes__title}>title2</h3>
                  </div>
                </div>
              </div>
            </Link>
          </li>

          <li className={styles.list__item}>
            <Link href="/wave" className={`${styles.navigation__link} `}>
              <div className={styles.wave__section}>
                <div className={styles.box__wave}>
                  <div className={styles.box__wave}>{waveElements}</div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Menu;
