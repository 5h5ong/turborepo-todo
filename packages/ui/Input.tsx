// import * as React from 'react';

interface InputProps {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({ placeholder, value, onChange }: InputProps) {
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e)}
    />
  );
}
