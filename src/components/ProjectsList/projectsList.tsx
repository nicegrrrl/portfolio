import { projects } from "../../data/projects";
import { ProjectCard } from "./ProjectCard/projectCard";
import styles from "./style.module.scss";

export const ProjectsList = () => {
  return (
    <>
      <ul className={styles.list}>
        {projects.map((project) => {
          return <ProjectCard key={project.id} project={project} />;
        })}
      </ul>
    </>
  );
};
