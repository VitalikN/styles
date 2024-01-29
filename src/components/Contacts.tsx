import Link from "next/link";
import styles from "../sass/layouts/contacts.module.scss";

import { AiOutlineMail } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaWhatsapp, FaViber } from "react-icons/fa";
const Contacts = () => {
  return (
    <section className={styles.contacts__section}>
      <div className={`${styles.container} ${styles.contacts__container}`}>
        <ul className={styles.contacts__list}>
          <li className={styles.contacts__list__item}>
            <Link className={styles.contacts__list__link} href="mailto:qwe@qwe">
              <AiOutlineMail className={styles.contacts__list__icon} />
            </Link>
          </li>
          <li className={styles.contacts__list__item}>
            <Link
              className={styles.contacts__list__link}
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BiLogoTelegram className={styles.contacts__list__icon} />
            </Link>
          </li>
          <li className={styles.contacts__list__item}>
            <Link
              className={styles.contacts__list__link}
              href="https://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp className={styles.contacts__list__icon} />
            </Link>
          </li>
          <li className={styles.contacts__list__item}>
            <Link
              className={styles.contacts__list__link}
              href="viber://"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaViber className={styles.contacts__list__icon} />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default Contacts;
