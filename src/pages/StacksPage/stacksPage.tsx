import { useTranslation } from "react-i18next";
import { List } from "../../components/List/list";
import { stacks } from "../../data/stacks";
import { ContentTemplate } from "../ContentTemplate/contentTemplate";

export const StacksPage = () => {
  const { t } = useTranslation();
  
  return (
    <>
      <ContentTemplate title={t("stacks")}>
        <List list={stacks} />
      </ContentTemplate>
    </>
  );
};
