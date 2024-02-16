import { Logo } from "../Logo/logo";
import styles from "./style.module.scss";
import { NavHeaderListItem } from "../NavHeaderListItem/navHeaderListItem";
import { NavHeaderListDivider } from "../NavHeaderListDivider/navHeaderListDivider";
import portuguese from "../../assets/img/flag-brazil.png";
import english from "../../assets/img/flag-usa.png";
import { Link } from "react-router-dom";
import i18n from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import { DarkMode } from "../DarkMode/DarkMode";

export const Header = () => {
  const { t } = useTranslation();

  const handlePortugueseClick = () => {
    i18n.changeLanguage("pt");
    localStorage.setItem("@alanaDev:language", "pt");
  };

  const handleEnglishClick = () => {
    i18n.changeLanguage("en");
    localStorage.setItem("@alanaDev:language", "en");
  };

  return (
    <>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerContent}>
            <Link to="/" className={styles.link}>
              <Logo />
            </Link>
            <div className={styles.textButtonsContent}>
              <nav>
                <ul className={styles.list}>
                  <NavHeaderListItem content={t("header.home")} navigate="/" />
                  <NavHeaderListDivider />
                  <NavHeaderListItem
                    content={t("header.about")}
                    navigate="/about"
                  />
                  <NavHeaderListDivider />
                  <NavHeaderListItem
                    content={t("header.stacks")}
                    navigate="/stacks"
                  />
                  <NavHeaderListDivider />
                  <NavHeaderListItem
                    content={t("header.tools")}
                    navigate="/tools"
                  />
                  <NavHeaderListDivider />
                  <NavHeaderListItem
                    content={t("header.projects")}
                    navigate="/projects"
                  />
                  <NavHeaderListDivider />
                  <NavHeaderListItem
                    content={t("header.contact")}
                    navigate="/contact"
                  />
                </ul>
              </nav>
              <div className={styles.buttons}>
                <div className={styles.lightDarkMode}>
                  <DarkMode />
                </div>
                <div className={styles.flags}>
                  <button onClick={() => handlePortugueseClick()}>
                    <img src={portuguese} alt="brazil flag" />
                  </button>
                  <button onClick={() => handleEnglishClick()}>
                    <img src={english} alt="usa flag" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
