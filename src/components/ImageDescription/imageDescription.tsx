import { ImageDescriptionProps } from "../../interfaces/interfaces";
import styles from "./style.module.scss";

export const ImageDescription = ({
  image,
  description,
}: ImageDescriptionProps) => {
  return (
    <>
      <div className={`fadeIn ${styles.box}`}>
        <img src={image} alt={description} className={styles.image} />
        <span className="text-6">{description}</span>
      </div>
    </>
  );
};
