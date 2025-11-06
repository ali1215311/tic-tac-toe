import { useState } from "react";
import Squares from "./Squares";

interface PropTypes {
  squares: (string | null)[];
  playingX: boolean;
  onPlay: (updatedSquares: (string | null)[]) => void;
}

const Board = ({ squares, playingX, onPlay }: PropTypes) => {
  const [buttonStatuses, setButtonStatuses] = useState<boolean[]>(
    Array.from({ length: 9 }, () => false)
  );

  const winner = winnerCalculator(squares);
  let status;

  if (winner) {
    status = `Winner: ` + winner;
  } else {
    status = playingX ? "Player - X:" : "Player - O:";
  }

  const handleClick = (index: number) => {
    if (buttonStatuses[index] || winner) return;
    const updatedSquares = [...squares];
    updatedSquares[index] = playingX ? "X" : "O";
    const updatedStatuses = [...buttonStatuses];
    updatedStatuses[index] = true;

    setButtonStatuses(updatedStatuses);
    onPlay(updatedSquares);
  };
  return (
    <>
      <div>
        <h3>{status}</h3>
        <div className="grid grid-cols-3 gap-3 mt-3">
          {squares.map((square, index) => (
            <Squares
              key={index}
              item={square}
              onSquareClick={() => handleClick(index)}
              disabled={buttonStatuses[index]}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default Board;

const winnerCalculator = (squares: (string | null)[]) => {
  const winningBlocks = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < 8; i++) {
    const [a, b, c] = winningBlocks[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
};
