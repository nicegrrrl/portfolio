import { ListItemProps } from "../../../interfaces/interfaces";
import { ImageDescription } from "../../ImageDescription/imageDescription";

export const ListCard = ({ item }: { item: ListItemProps }) => {
  return (
    <>
      <li>
        <ImageDescription image={item.image} description={item.name} />
      </li>
    </>
  );
};
