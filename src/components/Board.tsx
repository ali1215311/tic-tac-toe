import { useState } from "react";
import Squares from "./Squares";

const Board = () => {
  const [squares, setSquares] = useState<(string | null)[]>(
    Array.from({ length: 9 }, () => null)
  );
  const [playingX, setPlayingX] = useState(true);
  const [buttonStatuses, setButtonStatuses] = useState<boolean[]>(
    Array.from({ length: 9 }, () => false)
  );
  const handleClick = (index: number) => {
    if (buttonStatuses[index]) return;
    const updatedSquares = [...squares];
    updatedSquares[index] = playingX ? "X" : "O";
    const updatedStatuses = [...buttonStatuses];
    updatedStatuses[index] = true;

    setSquares(updatedSquares);
    setButtonStatuses(updatedStatuses);
    setPlayingX(!playingX);
  };
  return (
    <>
      <div>
        <h3>{playingX ? "Player - 1's turn:" : "Player - 2's turn:"}</h3>
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
