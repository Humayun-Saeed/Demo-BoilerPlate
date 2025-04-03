import { FC, useMemo } from "react";
import Button from "@/components/Button/Button";
import Checkbox from "@/components/Checkbox/Checkbox";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/Card/Card";
import PageList from "@/components/PageList/PageList";
import { PageSelectionProvider, usePageSelection } from "@/context/PageSelectionContext";
import styles from "./Home.module.css";

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

const HomePage: FC = () => {
  return (
    <PageSelectionProvider>
      <div className={styles.pageContainer}>
        <Card>
          <CardHeader>
            <HeaderContent />
          </CardHeader>
          <CardBody>
            <PageList />
          </CardBody>
          <CardFooter>
            <Button label="Done" />
          </CardFooter>
        </Card>
      </div>
    </PageSelectionProvider>
  );
};

export default HomePage;
