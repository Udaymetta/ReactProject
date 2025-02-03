import "./gameOver.css";

const GameOver = ({winner, draw, exec}) => {
    return (
        <div className="gameOver">
            {winner && 
            <p>You won, {winner} !</p>
            }
            {(draw || winner ) &&
            (
            <button onClick={() =>exec()}>Rematch</button>
            )
        }
        </div>
    )
}
export default GameOver;