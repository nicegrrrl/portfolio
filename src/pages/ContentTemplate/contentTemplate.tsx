import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import styles from "./style.module.scss";
import asterisk from "../../assets/img/asterisk.png";
import { ContentTemplateProps } from "../../interfaces/interfaces";

export const ContentTemplate = ({ title, children }: ContentTemplateProps) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.pageBox}>
          <div className="container">
            <div className={styles.titleBox}>
              <img src={asterisk} alt="asterisk" className={`fadeIn ${styles.asterisk}`} />
              <h1 className={`title-1 bold fadeIn ${styles.title}`}>{title}</h1>
            </div>
            {children}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};
