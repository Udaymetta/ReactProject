import Players from "./Players.jsx";
import GameBox from "./GameBox.jsx"
import Log from "./Log.jsx"
import './game.css';
import { useState } from "react";
import { winningCombinations } from "../utils/util.js";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

let gameLog = [];

let winner = '';

const Header = () => {
    const [activePlayer, setActivePlayer] = useState('X');
    const [gameBoard, setGameBoard] = useState(initialGameBoard);
    function handlePlayer(row, col) {
        setGameBoard((prevGameBoard) => {
            const updateGameBoard = [...prevGameBoard.map(initial => [...initial])];
            updateGameBoard[row][col] = activePlayer;
            evaluate(updateGameBoard);
            return updateGameBoard;
        })
        setActivePlayer((currentPlayer) => { 
            if(winner)
                return winner;
            else
               return currentPlayer === 'X' ? 'O' : 'X';
        });
        gameLog.push({
            selected : {
                row : row,
                col : col
            },
            playerSymb : activePlayer
        });
    }

    function evaluate(board) {
        
        for (const each of winningCombinations) {
            const first = board[each[0].row][each[0].col]; 
            const second = board[each[1].row][each[1].col];
            const third = board[each[2].row][each[2].col];

            if(first && first === second && first === third){
                winner = first;
                break;
            }
        }
        return winner;
    }

    return(
       <main className="game-container">
        <div className="players">
            <ol>
               <Players playerNumber = "1" playerSymbol = "X"  activeSymbol = {activePlayer === 'X' ? "-active" : ""}/> 
               <Players playerNumber = "2" playerSymbol = "O"  activeSymbol = {activePlayer === 'O' ? "-active" : ""}/> 
            </ol>
        </div>
        <GameBox exec = {handlePlayer} board={gameBoard}/>
        { winner && <p className="winner">You win {winner} !</p>} 
        <Log logSelected = {gameLog}/>
       </main>
    );
};
export default Header;