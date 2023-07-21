import * as React from "react";
import styles from "./input.module.css";

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
