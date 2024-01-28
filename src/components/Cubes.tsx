import styles from "../sass/layouts/cubes.module.scss";
import Link from "next/link";
import services from "../../services.json";

import {
  FaFileAlt,
  FaFileInvoice,
  FaShoppingCart,
  FaSearch,
  FaComments,
} from "react-icons/fa";

const iconMap = {
  FaFileAlt: <FaFileAlt />,
  FaFileInvoice: <FaFileInvoice />,
  FaShoppingCart: <FaShoppingCart />,
  FaSearch: <FaSearch />,
  FaComments: <FaComments />,
};

const Cubes = () => {
  return (
    <section className={styles.cubes__section}>
      <div className={styles.container}>
        <ul className={styles.cubes__list}>
          {services.map(({ id, title, icon }) => (
            <li className={styles.cubes__list__item} key={id}>
              <Link className={`${styles.cubes__link} `} href={"#"}>
                <span className={styles.cubes__list__icon}>
                  {iconMap[icon as keyof typeof iconMap]}
                </span>
                <h3 className={styles.cubes__title}>{title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
export default Cubes;
