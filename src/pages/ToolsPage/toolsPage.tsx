import { useTranslation } from "react-i18next";
import { List } from "../../components/List/list";
import { tools } from "../../data/tools";
import { ContentTemplate } from "../ContentTemplate/contentTemplate";

export const ToolsPage = () => {
  const { t } = useTranslation();

  return (
    <>
      <ContentTemplate title={t("tools")}>
        <List list={tools} />
      </ContentTemplate>
    </>
  );
};
