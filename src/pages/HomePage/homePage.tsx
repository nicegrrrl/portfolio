import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import tagImg from "../../assets/img/close-tag.png";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";
import video from "../../assets/video/MVI_1436.MP4";
import { iDefaultContext } from "../../interfaces/interfaces";

export const HomePage = () => {
  const { t } = useTranslation();

  const { setCurrentIndex, routes } =
    useContext<iDefaultContext>(GlobalContext);

  const routeIndex = routes!.indexOf("/");

  setCurrentIndex!(routeIndex);

  return (
    <>
      <DefaultTemplate>
        <div className={styles.pageBox}>
          <div className={styles.overlay}></div>
          <div className={styles.video}>
            <video autoPlay loop muted playsInline>
              <source src={video} type="video/mp4" />
            </video>
          </div>
          <div className="container noPaddingUpDown">
            <div className={styles.mainContent}>
              <h2 className="title-3 fadeIn">alana maia</h2>
              <div className={`fadeIn ${styles.fullstack}`}>
                <h1 className="title-1 bold">{t("home.position")}</h1>
                <img src={tagImg} alt="close tag" className={styles.tagImg} />
              </div>
            </div>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
