"use client";

import { useState } from "react";

import { Button } from "@/components/Button";

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
