import { Button } from "..";
import styles from "./Information.module.scss";

export const Information = () => {

  return (
    <div className={styles["information"]}>
      <div className={styles['title']}>
        <span>Daha fazla bilgi</span> için lütfen bizimle iletişime geçin.
      </div>
      <Button
        text={"İletişim"}
        locale
        href={'/iletisim'}
        className={styles["block__button"]}
      />
    </div>
  );
};