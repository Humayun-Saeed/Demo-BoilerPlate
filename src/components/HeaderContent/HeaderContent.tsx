import { usePageSelection } from "@/context/PageSelectionContext";
import { FC, useMemo } from "react";
import Checkbox from "../Checkbox/Checkbox";
import styles from "./HeaderContent.module.css";
const HeaderContent: FC = () => {
    const { selectedPages, setAll } = usePageSelection();
    const allSelected = useMemo(() => Object.values(selectedPages).every(Boolean), [selectedPages]);
  
    return (
      <div className={styles.header}>
        <span className={styles.title}>All pages</span>
        <Checkbox
          initialState={allSelected}
          onChange={(checked) => setAll(checked)}
        />
      </div>
    );
  };
  
  export default HeaderContent;