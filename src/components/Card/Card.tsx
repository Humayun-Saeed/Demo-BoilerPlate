import React, { ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps {
  children: ReactNode;
  className?: string;
}
const Card: React.FC<CardProps> = ({ children, className }) => {
  return <div className={`${styles.card} ${className || ""}`}>{children}</div>;
};

interface CardHeaderProps {
  children: ReactNode;
}
const CardHeader: React.FC<CardHeaderProps> = ({ children }) => {
  return <div className={styles.header}>{children}</div>;
};

interface CardBodyProps {
  children: ReactNode;
}
const CardBody: React.FC<CardBodyProps> = ({ children }) => {
  return <div className={styles.body}>{children}</div>;
};

interface CardFooterProps {
  children: ReactNode;
}
const CardFooter: React.FC<CardFooterProps> = ({ children }) => {
  return <div className={styles.footer}>{children}</div>;
};

export { Card, CardHeader, CardBody, CardFooter };
