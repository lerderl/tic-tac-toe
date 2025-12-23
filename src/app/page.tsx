"use client";

import { useState } from "react";

import { Board } from "./board";

type SquareValue = "X" | "O" | null;

export default function Home() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([new Array(9).fill(null)]);
  const currentSquares = history.at(-1) as SquareValue[];

  function handlePlay(nextSquares: SquareValue[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{/*TODO*/}</ol>
      </div>
    </div>
  );
}
