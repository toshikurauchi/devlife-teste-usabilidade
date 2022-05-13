import { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.css";

const Button = ({
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) => {
  const newClassName = `${styles.button} ${className ?? ""}`;
  return <button className={newClassName} {...props} />;
};

export default Button;
