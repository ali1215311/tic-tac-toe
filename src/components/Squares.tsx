interface SquareType {
  item: string | null;
  onSquareClick: () => void;
  disabled: boolean;
}

const Squares = ({ item, onSquareClick, disabled }: SquareType) => {
  return (
    <>
      <button
        onClick={onSquareClick}
        className={`border-2 border-gray-300 h-16 w-16 transition-all duration-200 ${
          disabled ? "" : "cursor-pointer hover:scale-110 hover:shadow"
        }`}
        disabled={disabled}
      >
        {item}
      </button>
    </>
  );
};
export default Squares;
