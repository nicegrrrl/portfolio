import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import styles from "./style.module.scss";
import { ChildrenProps } from "../../interfaces/interfaces";

export const DefaultTemplate = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <main>
        <div className={styles.pageBox}>
          <div className="container">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};
