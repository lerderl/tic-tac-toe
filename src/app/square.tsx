"use client";

import { Button } from "@/components/Button";

type SquareValue = "X" | "O" | null;

interface SquareProps {
  value: SquareValue;
  onSquareClick: React.MouseEventHandler<HTMLButtonElement>;
}

export function Square({ value, onSquareClick }: Readonly<SquareProps>) {
  return (
    <Button type="button" onClick={onSquareClick}>
      {value}
    </Button>
  );
}
