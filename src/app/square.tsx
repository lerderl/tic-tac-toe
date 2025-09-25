"use client";

import { useState } from "react";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick?: () => void;
}

const Button = ({ type = "button", children, onClick }: ButtonProps) => {
  return (
    <button type={type} onClick={onClick} className="square">
      {children}
    </button>
  );
};

export function Square() {
  const [value, setValue] = useState<string | null>(null);

  function handleClick() {
    setValue("X");
  }

  return (
    <Button type="button" onClick={handleClick}>
      {value}
    </Button>
  );
}
