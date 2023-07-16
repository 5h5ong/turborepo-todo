"use client";

import * as React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
}

export const Button = ({ text, onClick }: ButtonProps) => {
  return <button onClick={() => onClick()}>{text}</button>;
};
