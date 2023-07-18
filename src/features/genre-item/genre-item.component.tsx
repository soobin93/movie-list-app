import React from "react";

import { Card } from "../ui/card";
import { GenreItemProps } from "./genre-item.types";
import styles from "./genre-item.module.css";

export const GenreItem = ({ id, name }: GenreItemProps) => (
  <Card>
    <h2 className={styles.heading}>
      {id}: {name}
    </h2>
  </Card>
);
