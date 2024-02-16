import { Project } from "../../interfaces/interfaces";
import { StackTagCard } from "./StackTagCard/stackTagCard";
import styles from "./style.module.scss";

export const StackTagList = ({ project }: { project: Project }) => {
  return (
    <>
      <ul className={styles.list}>
        {project.stacks.map((stack) => {
          return <StackTagCard key={stack.id} stack={stack} />;
        })}
      </ul>
    </>
  );
};
