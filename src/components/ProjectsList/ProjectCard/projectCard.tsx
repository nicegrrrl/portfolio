import { Link } from "react-router-dom";
import { IoIosLink, IoLogoGithub } from "react-icons/io";
import { StackTagList } from "../../StackTagList/stackTagList";
import styles from "./style.module.scss";
import { Project } from "../../../interfaces/interfaces";
import { useTranslation } from "react-i18next";

export const ProjectCard = ({ project }: { project: Project }) => {
  const { t } = useTranslation();

  return (
    <>
      <li className={`fadeIn ${styles.cardBox}`}>
        <div className={styles.card}>
          <div className={styles.topCard}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.image}
            />
            <span className={`text-4 ${styles.title}`}>{project.name}</span>
            <Link to={project.deploy} target="_blank" className={styles.deploy}>
              <IoIosLink size={30} />
            </Link>
            <Link to={project.repo} target="_blank" className={styles.repo}>
              <IoLogoGithub size={30} />
            </Link>
          </div>
          <div className={styles.bottomCard}>
            <div className={styles.description}>
              <p className="text-5">
                {t(`projects.${project.id - 1}.description`)}
              </p>
            </div>
            <div className={styles.divisor}></div>
            <StackTagList project={project} />
          </div>
        </div>
      </li>
    </>
  );
};
