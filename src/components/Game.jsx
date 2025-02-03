import Players from "./Players.jsx";
import GameBox from "./GameBox.jsx"
import Log from "./Log.jsx"
import GameOver from "./GameOver.jsx";
import './game.css';
import { useState } from "react";
import { winningCombinations } from "../utils/util.js";

const initialGameBoard = [
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

let gameLog = [];
let draw = false;
let winner = null;

const Header = () => {
    const[playerName, setPlayerName] = useState({
        "X": "Player 1",
        "O": "Player 2"
    });
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
                winner = playerName[first];
                break;
            }
        }

        if(board[0][0] && board[0][1] && board[0][2] &&
            board[1][0] && board[1][1] && board[1][2] &&
            board[2][0] && board[2][1] && board[2][2]){
                draw = true;
        }
    }

    function updatePlayers(symbol, name) {
        setPlayerName(prevPlayerName => {
            return{
                ...prevPlayerName,
                [symbol]: name
            }
        })
    }

    function reset(){
        setGameBoard((prevGameBoard) => {
            setActivePlayer('X');
            winner = null;
            gameLog = [];
            draw = false;
            const updateGameBoard = initialGameBoard;
            return updateGameBoard;
        }
        );
    }

    return(
       <main className="game-container">
        <div className="players">
            <ol>
               <Players player = {playerName.X} playerSymbol = "X"  activeSymbol = {activePlayer === 'X' ? "-active" : ""} updateName = {updatePlayers}/> 
               <Players player = {playerName.O} playerSymbol = "O"  activeSymbol = {activePlayer === 'O' ? "-active" : ""} updateName = {updatePlayers}/> 
            </ol>
        </div>
        <GameBox exec = {handlePlayer} board={gameBoard} winner = {winner}/>
        <GameOver winner={winner} draw = {draw} exec = {reset}/>
        <Log logSelected = {gameLog}/>
       </main>
    );
};
export default Header;