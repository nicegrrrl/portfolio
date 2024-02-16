import { Stack } from "../../../interfaces/interfaces";
import styles from "./styles.module.scss";

export const StackTagCard = ({ stack }: { stack: Stack }) => {
  return (
    <>
      <li className={`text-6 ${styles.card}`}>{stack.name}</li>
    </>
  );
};
