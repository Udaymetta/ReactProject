import { isDisabled } from '@testing-library/user-event/dist/utils';
import './game.css';

const GameBox = ({exec, board, winner}) => {

    return(
        <div className="game">
            <ol className='game-sets'>
              {board.map((row, rowIndex) => { return (
                <li key={rowIndex}>
                    <ol className='game-set'>
                        {row.map((playerSymbol, colIndex) => { return(
                            <li className = {`game-data`} key={colIndex}> 
                                <button onClick={() => exec(rowIndex, colIndex)} disabled={playerSymbol != null || winner != null}>{playerSymbol}</button>
                            </li>
                        )})}
                    </ol>
                </li>
              )})}
            </ol>
        </div>
    );
};

export default GameBox;