import React from "react";

import styles from "./Label.module.css";

interface ILabelProps {
  size?: number;
}

const Label: React.FC<ILabelProps> = ({ size = 24, children }) => (
  <label
    className={styles.label}
    style={{
      fontSize: `${size}px`,
    }}
  >
    {children}
  </label>
);

export default Label;
