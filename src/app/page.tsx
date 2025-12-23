"use client";

import { useState } from "react";

import { Square } from "./square";

type SquareValue = "X" | "O" | null;

export default function Home() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState<SquareValue[]>(new Array(9).fill(null)); // creates an array with nine elements and sets each of them to null

  function handleClick(i: number) {
    if (squares[i]) {
      return; // if square is already filled return early
    }
    const nextSquares = squares.slice();
    if (xIsNext) {
      nextSquares[i] = "X";      
    } else {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares);
    setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}
