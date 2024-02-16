import asterisk from "../../assets/img/asterisk.png";
import styles from "./style.module.scss";

export const NavHeaderListDivider = () => {
  return (
    <li>
      <img src={asterisk} alt="asterisk" className={styles.asterisk} />
    </li>
  );
};
