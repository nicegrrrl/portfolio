// import { ListProps } from "../../interfaces/interfaces";
import { ListItemProps } from "../../interfaces/interfaces";
import { ListCard } from "./ListCard/listCard";
import styles from "./style.module.scss";

export const List = ({ list }: { list: ListItemProps[] }) => {
  return (
    <>
      <ul className={styles.list}>
        {list.map((item) => {
          return <ListCard key={item.id} item={item} />;
        })}
      </ul>
    </>
  );
};
