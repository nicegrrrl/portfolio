import { Link } from "react-router-dom";
import styles from "./styles.module.scss";
import { NavHeaderListItemProps } from "../../interfaces/interfaces";

export const NavHeaderListItem = ({
  content,
  navigate,
}: NavHeaderListItemProps) => {
  return (
    <li className="text-5">
      <Link to={navigate} className={styles.link}>
        {content}
      </Link>
    </li>
  );
};
