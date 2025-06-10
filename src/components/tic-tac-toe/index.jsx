
    import react from "react";
import "./style.css";
import { useState, useEffect } from "react";

function Square({ value, onClick }) {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
}

export default function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");
  console.log(squares);

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (
        squares[x] &&
        squares[x] === squares[y] &&
        squares[y] === squares[z]
      ) {
        return squares[x];
      }
    }
    return null;
  }

  function handleclick(getCurrentSquare) {
    let cpySquare = [...squares];
    if (getWinner(cpySquare) || cpySquare[getCurrentSquare]) return;
    cpySquare[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquare);
  }
  function handleRestart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  }

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== "")) {
      setStatus("this is a draw please restart");
    } else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)} Restart for next round`);
    } else {
      setStatus(`next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="tic-tac-toe-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleclick(0)} />
        <Square value={squares[1]} onClick={() => handleclick(1)} />
        <Square value={squares[2]} onClick={() => handleclick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleclick(3)} />
        <Square value={squares[4]} onClick={() => handleclick(4)} />
        <Square value={squares[5]} onClick={() => handleclick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleclick(6)} />
        <Square value={squares[7]} onClick={() => handleclick(7)} />
        <Square value={squares[8]} onClick={() => handleclick(8)} />
      </div>
      <h1>{status}</h1>
      <button onClick={() => handleRestart()}> Restart</button>
    </div>
  );
}