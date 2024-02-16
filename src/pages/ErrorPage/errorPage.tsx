import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import styles from "./style.module.scss";
import asterisk from "../../assets/img/asterisk.png";
import sadFace from "../../assets/img/sad-face.png";
import { useTranslation } from "react-i18next";

export const ErrorPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <DefaultTemplate>
        <div className={styles.contentBox}>
          <div className={styles.titleBox}>
            <img src={asterisk} alt="asterisk" className={styles.asterisk} />
            <h1 className={`title-1 bold ${styles.title}`}>
              {t("error.title")}
            </h1>
          </div>
          <p className="text-2">{t("error.message")}</p>
          <img src={sadFace} alt="sad face" className={styles.sadFace} />
        </div>
      </DefaultTemplate>
    </>
  );
};
