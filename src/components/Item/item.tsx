import { GiSevenPointedStar } from "react-icons/gi";
import styles from "./style.module.scss";
import { ItemNameProps } from "../../interfaces/interfaces";

export const Item = ({ text }: ItemNameProps) => {
  return (
    <>
      <div className={styles.box}>
        <GiSevenPointedStar className={styles.icon} />
        <p className={styles.text}>{text}</p>
      </div>
    </>
  );
};
