import React from "react";

import { CardProps } from "./card.types";
import styles from "./card.module.css";

export const Card = ({ children }: CardProps) => {
  return <div className={styles.card}>{children}</div>;
};
