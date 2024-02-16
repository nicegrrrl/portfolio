import { Link } from "react-router-dom";
import happyFace from "../../assets/img/happy-face-gray.png";
import styles from "./style.module.scss";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      <footer className={styles.footer}>
        <div className={`container ${styles.footerBox}`}>
          <div className={styles.content}>
            <span className="text-6 gray">{t("footer.developed")}</span>
            <Link
              to="https://github.com/nicegrrrl"
              target="_blank"
              className={`text-6 gray semibold ${styles.link}`}
            >
              alana maia
            </Link>
            <img
              src={happyFace}
              alt="happy face"
              className={styles.happyFace}
            />
            <span className="text-6 gray">2024</span>
          </div>
        </div>
      </footer>
    </>
  );
};
