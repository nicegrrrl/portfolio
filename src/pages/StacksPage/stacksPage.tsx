import { useTranslation } from "react-i18next";
import { List } from "../../components/List/list";
import { stacks } from "../../data/stacks";
import { ContentTemplate } from "../ContentTemplate/contentTemplate";
import { useContext } from "react";
import { GlobalContext } from "../../providers/globalContext";

export const StacksPage = () => {
  const { t } = useTranslation();

  const { setCurrentIndex, routes } = useContext(GlobalContext);

  const routeIndex = routes.indexOf("/stacks");

  setCurrentIndex(routeIndex);

  return (
    <>
      <ContentTemplate title={t("stacks")}>
        <List list={stacks} />
      </ContentTemplate>
    </>
  );
};
