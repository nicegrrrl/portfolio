import { useTranslation } from "react-i18next";
import { ProjectsList } from "../../components/ProjectsList/projectsList";
import { ContentTemplate } from "../ContentTemplate/contentTemplate";

export const ProjectsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentTemplate title={t("projectsTitle")}>
        <ProjectsList />
      </ContentTemplate>
    </>
  );
};
