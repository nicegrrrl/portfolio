import { Footer } from "../../components/Footer/footer";
import { Header } from "../../components/Header/header";
import styles from "./style.module.scss";
import { ChildrenProps } from "../../interfaces/interfaces";

export const DefaultTemplate = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <div className={styles.pageBox}>{children}</div>
      <Footer />
    </>
  );
};
