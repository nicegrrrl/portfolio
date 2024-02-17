import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import tagImg from "../../assets/img/close-tag.png";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";

export const HomePage = () => {
  const { t } = useTranslation();

  const { setCurrentIndex, routes } = useContext(GlobalContext);

  const routeIndex = routes.indexOf("/");

  setCurrentIndex(routeIndex);

  return (
    <>
      <DefaultTemplate>
        <div className={styles.mainContent}>
          <h2 className="title-3 fadeIn">alana maia</h2>
          <div className={`fadeIn ${styles.fullstack}`}>
            <h1 className="title-1 bold">{t("home.position")}</h1>
            <img src={tagImg} alt="close tag" className={styles.tagImg} />
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
