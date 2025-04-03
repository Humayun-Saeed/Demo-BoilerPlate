import { FC } from "react";
import Button from "@/components/Button/Button";
import { Card, CardBody, CardFooter, CardHeader } from "@/components/Card/Card";
import PageList from "@/components/PageList/PageList";
import { PageSelectionProvider } from "@/context/PageSelectionContext";
import styles from "./Home.module.css";
import HeaderContent from "@/components/HeaderContent/HeaderContent";

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
