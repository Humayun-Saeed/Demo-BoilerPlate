import { FC, ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  variant?: ButtonVariant;
}

const Button: FC<ButtonProps> = ({ label, variant = 'primary', ...props }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      <span className={styles.title}>{label}</span>
    </button>
  );
};

export default Button;