import { ContentTemplate } from "../ContentTemplate/contentTemplate";
import happyFace from "../../assets/img/happy-face.png";
import styles from "./style.module.scss";
import { ImageDescription } from "../../components/ImageDescription/imageDescription";
import email from "../../assets/img/email.png";
import linkedin from "../../assets/img/linkedin.png";
import github from "../../assets/img/github.png";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";

export const ContactPage = () => {
  const { t } = useTranslation();

  const { setCurrentIndex, routes } = useContext(GlobalContext);

  const routeIndex = routes.indexOf("/contact");

  setCurrentIndex(routeIndex);

  return (
    <>
      <ContentTemplate title={t("contact.title")}>
        <div className={`fadeIn ${styles.contentBox}`}>
          <div className={styles.topContent}>
            <div className={styles.text}>
              <p className="text-1">{t("contact.work")}</p>
              <p className="text-1">{t("contact.touch")}</p>
            </div>
            <div>
              <img
                src={happyFace}
                alt="happy face"
                className={styles.happyFace}
              />
            </div>
          </div>
          <nav className={styles.contacts}>
            <Link to="mailto:alanaalvesmaia@gmail.com" target="_blank">
              <ImageDescription image={email} description="email" />
            </Link>

            <Link to="https://www.linkedin.com/in/alana-am/" target="_blank">
              <ImageDescription image={linkedin} description="linkedin" />
            </Link>

            <Link to="https://github.com/nicegrrrl" target="_blank">
              <ImageDescription image={github} description="github" />
            </Link>
          </nav>
        </div>
      </ContentTemplate>
    </>
  );
};
