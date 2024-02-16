import { useTranslation } from "react-i18next";
import { ProjectsList } from "../../components/ProjectsList/projectsList";
import { ContentTemplate } from "../ContentTemplate/contentTemplate";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";

export const ProjectsPage = () => {
  const { t } = useTranslation();

  const { setCurrentIndex, routes } = useContext(GlobalContext);

  const routeIndex = routes.indexOf("/projects");

  setCurrentIndex(routeIndex);

  return (
    <>
      <ContentTemplate title={t("projectsTitle")}>
        <ProjectsList />
      </ContentTemplate>
    </>
  );
};
