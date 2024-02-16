import { Link, useLocation } from "react-router-dom";
import styles from "./styles.module.scss";
import { NavHeaderListItemProps } from "../../interfaces/interfaces";

export const NavHeaderListItem = ({
  content,
  navigate,
}: NavHeaderListItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === navigate;

  return (
    <li className="text-5">
      <Link
        to={navigate}
        className={isActive ? styles.activeLink : styles.link}
      >
        {content}
      </Link>
    </li>
  );
};
