import { useTranslation } from "react-i18next";
import { List } from "../../components/List/list";
import { tools } from "../../data/tools";
import { ContentTemplate } from "../ContentTemplate/contentTemplate";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";
import { iDefaultContext } from "../../interfaces/interfaces";

export const ToolsPage = () => {
  const { t } = useTranslation();

  const { setCurrentIndex, routes } = useContext<iDefaultContext>(GlobalContext);

  const routeIndex = routes!.indexOf("/tools");

  setCurrentIndex!(routeIndex);

  return (
    <>
      <ContentTemplate title={t("tools")}>
        <List list={tools} />
      </ContentTemplate>
    </>
  );
};
