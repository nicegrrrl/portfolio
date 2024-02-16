import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import tagImg from "../../assets/img/close-tag.png";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export const HomePage = () => {
  const { t } = useTranslation();

  return (
    <>
      <DefaultTemplate>
        <div className={styles.mainContent}>
          <h2 className="title-3">alana maia</h2>
          <div className={styles.fullstack}>
            <h1 className="title-1 bold">{t("home.position")}</h1>
            <img src={tagImg} alt="close tag" className={styles.tagImg} />
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
