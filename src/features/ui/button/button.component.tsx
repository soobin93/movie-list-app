import React from "react";

import { ButtonProps } from "./button.types";
import styles from "./button.module.css";

export const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};
