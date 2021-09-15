import styles from "./Button.module.css";

interface IButtonProps {
  primary?: boolean;
  width?: number;
  height?: number;
}

const Button: React.FC<IButtonProps> = ({
  primary = false,
  width = 130,
  height = 45,
  children,
  ...props
}) => (
  <button
    className={styles.button}
    style={{
      width: `${width}px`,
      height: `${height}px`,
    }}
    {...props}
  >
    {children}
  </button>
);

export default Button;
