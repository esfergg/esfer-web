import React from "react";

import styles from "./GradientLabel.module.css";

interface IGradientLabelProps {
  size?: number;
}

const GradientLabel: React.FC<IGradientLabelProps> = ({
  size = 45,
  children,
}) => (
  <label
    className={styles.label}
    style={{
      fontSize: `${size}px`,
    }}
  >
    {children}
  </label>
);

export default GradientLabel;
