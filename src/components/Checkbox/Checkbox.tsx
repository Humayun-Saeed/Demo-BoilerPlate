import { FC, useEffect, useState } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps {
  initialState?: boolean;
  onChange?: (checked: boolean) => void;
  label?: string;
}

const Checkbox: FC<CheckboxProps> = ({
  initialState = false,
  onChange,
  label,
}) => {
  const [checked, setChecked] = useState(initialState);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setChecked(initialState);
  }, [initialState]);

  const handleClick = () => {
    const newChecked = !checked;
    setChecked(newChecked);
    onChange?.(newChecked); 
  };

  return (
    <div
      className={styles.checkboxContainer}
    >
      <label className={styles.checkboxLabel}>
        <input
       
          type="checkbox"
          className={styles.hiddenCheckbox}
          checked={checked}
          onChange={handleClick}
        />
        <div
          className={`${styles.customCheckbox} ${
            checked ? styles.checked : ""
          }`}
          onMouseEnter={() => {
            setIsHovered(true);
          }}
          onMouseLeave={() => {
            setIsHovered(false);
          }}
        >
          {isHovered &&  !checked && (
             <svg className={styles.checkmarkBlack} viewBox="0 0 24 24">
             <path d="M20 6L9 17l-5-5" />
           </svg>
          )}

          {checked && (
            <svg className={styles.checkmark} viewBox="0 0 24 24">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          )}
        </div>
        {label && <span className={styles.labelText}>{label}</span>}
      </label>
    </div>
  );
};

export default Checkbox;
