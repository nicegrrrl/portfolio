import closeTagImg from "../../assets/img/close-tag.png";
import styles from "./style.module.scss";

export const Logo = () => {
  return (
    <>
      <div className={styles.logoBox}>
        <p>am</p>
        <img src={closeTagImg} alt="close tag" />
      </div>
    </>
  );
};
