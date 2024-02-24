// Rows structure
// 0 1 2
// 3 4 5
// 6 7 8
import { useState } from 'react';
import './styles.css';

const Square = ({ value, onClick }) => {
    return <button onClick={onClick} className="square">{value}</button>
};

const TicTactToe = () => {

    const [squares, setSquares] = useState(Array(9).fill(''));
    const [isXTurn, setIsXTurn] = useState(true);

    const handleClick = (getCurrentSquare) => {
      let copySquares = [...squares];
      if(copySquares[getCurrentSquare]) return;
      copySquares[getCurrentSquare] = isXTurn ? 'X' : 'O';
      setIsXTurn(!isXTurn);
      setSquares(copySquares)
    };

    return (
        <div className="tic-tact-toe-container">
            {/* div for first row - 0 1 2*/}
            <div className="row">
                <Square value={squares[0]} onClick={() => handleClick(0)}/>
                <Square value={squares[1]} onClick={() => handleClick(1)}/>
                <Square value={squares[2]} onClick={() => handleClick(2)}/>
            </div >

            {/* div for second row - 3 4 5*/}
            <div className="row">
                <Square value={squares[3]} onClick={() => handleClick(3)}/>
                <Square value={squares[4]} onClick={() => handleClick(4)}/>
                <Square value={squares[5]} onClick={() => handleClick(5)}/>
            </div>

            {/* div for third row - 6 7 8*/}
            <div className="row">
                <Square value={squares[6]} onClick={() => handleClick(6)}/>
                <Square value={squares[7]} onClick={() => handleClick(7)}/>
                <Square value={squares[8]} onClick={() => handleClick(8)}/>
            </div>
        </div>
    );
};

export default TicTactToe;