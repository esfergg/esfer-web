import React from "react";

import styles from "./Label.module.css";

interface ILabelProps {
  size?: number;
  className?: string;
}

const Label: React.FC<ILabelProps> = ({
  size = 24,
  className = "",
  children,
}) => (
  <label
    className={`${styles.label} ${className}`}
    style={{
      fontSize: `${size}px`,
    }}
  >
    {children}
  </label>
);

export default Label;
