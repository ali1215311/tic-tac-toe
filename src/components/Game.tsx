import { useState } from "react";
import Board from "./Board";

const Game = () => {
  const [history, setHistory] = useState<(string | null)[][]>([
    Array.from({ length: 9 }, () => null),
  ]);
  const currentSquare = history[history.length - 1];
  const [playingX, setPlayingX] = useState(true);

  const handlePlay = (updatedSquares: (string | null)[]) => {
    setPlayingX(!playingX);
    const updatedHistory = [
      ...history.slice(0, history.indexOf(currentSquare)),
      updatedSquares,
    ];
    setHistory(updatedHistory);
  };

  return (
    <>
      <div>
        <Board
          squares={currentSquare}
          playingX={playingX}
          onPlay={handlePlay}
        />
      </div>
      <div>{/*  */}</div>
    </>
  );
};
export default Game;
