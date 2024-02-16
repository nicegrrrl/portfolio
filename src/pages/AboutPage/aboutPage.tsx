import { DefaultTemplate } from "../DefaultTemplate/defaultTemplate";
import happy from "../../assets/img/happy.png";
import styles from "./style.module.scss";
import { Item } from "../../components/Item/item";
import asterisk from "../../assets/img/asterisk.png";
import { useTranslation } from "react-i18next";

export const AboutPage = () => {
  const { t } = useTranslation();
  return (
    <>
      <DefaultTemplate>
        <div className={styles.contentBox}>
          <img src={asterisk} alt="asterisk" className={styles.asterisk} />
          <div className={styles.leftContent}>
            <section className={styles.hi}>
              <p className="title-4 textColor">{t("about.hi")}</p>
              <div className={styles.alana}>
                <p className="title-2">alana</p>
                <img
                  src={happy}
                  alt="happy face"
                  className={styles.happyFace}
                />
              </div>
            </section>
            <div className={styles.divisorHorizontal}></div>
            <section>
              <h2 className={styles.title}>{t("about.aboutSection.title")}</h2>
              <ul className={styles.list}>
                <li>
                  <Item text={t("about.aboutSection.fullstack")} />
                </li>
                <li>
                  <Item text={t("about.aboutSection.family")} />
                </li>
                <li>
                  <Item text={t("about.aboutSection.photo")} />
                </li>
                <li>
                  <Item text={t("about.aboutSection.coffee")} />
                </li>
                <li>
                  <Item text={t("about.aboutSection.music")} />
                </li>
                <li>
                  <Item text={t("about.aboutSection.emojis")} />
                </li>
              </ul>
            </section>
          </div>
          <div className={styles.divisorMiddle}></div>
          <div className={styles.rightContent}>
            <section>
              <h2 className={styles.title}>{t("about.location")}</h2>
              <Item text={t("about.fortaleza")} />
            </section>
            <div className={styles.divisorHorizontal}></div>
            <section>
              <h2 className={styles.title}>soft skills</h2>
              <ul className={styles.softSkills}>
                <li>
                  <Item text={t("about.softSkillsSection.collaborative")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.proactive")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.committed")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.creative")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.communicative")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.punctual")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.adaptable")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.responsible")} />
                </li>
                <li>
                  <Item text={t("about.softSkillsSection.resilient")} />
                </li>
              </ul>
            </section>
            <div className={styles.divisorHorizontal}></div>
            <section>
              <h2 className={styles.title}>{t("about.spotifySection")}</h2>
              <iframe
                src="https://open.spotify.com/embed/track/1zeQjPT367QcGrkpIXYjuW?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                className={styles.spotify}
              ></iframe>
            </section>
          </div>
        </div>
      </DefaultTemplate>
    </>
  );
};
