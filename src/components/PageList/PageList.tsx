import { FC } from "react";
import Checkbox from "@/components/Checkbox/Checkbox";
import { pages } from "@/utils/constants";
import { usePageSelection } from "@/context/PageSelectionContext";
import styles from "./PageList.module.css";

const PageList: FC = () => {
  const { selectedPages, togglePage } = usePageSelection();

  return (
    <ul className={styles.list}>
      {pages.map((page, index) => (
        <li key={index} className={styles.listItem}>
          <div className={styles.listRow}>
            <span className={styles.pageName}>{page?.name}</span>
            <Checkbox
              initialState={selectedPages[page.name]}
              onChange={() => togglePage(page.name)}
            />
          </div>
        </li>
      ))}
    </ul>
  );
};

export default PageList;
