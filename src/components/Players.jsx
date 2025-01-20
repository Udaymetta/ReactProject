import {useState} from "react";

const Players = ({playerNumber, playerSymbol, activeSymbol}) => {
    const [isEditing, setIsEditing] = useState(false);
    const[playerName, setPlayerName] = useState("Player "+playerNumber)
    const [buttonName, setButtonName] = useState("Edit");
    function editName() {
        setIsEditing( edited => !edited);
    }

    const handleChange = (event) => {
        setPlayerName(event.target.value);
    };

    return(
        <li className={`players-info players-info${activeSymbol}`}>
            <span className="player-detail">
                {isEditing ? 
                    <input type='text' required maxLength={10} onChange={handleChange} value={playerName} /> : 
                <>
                    <span className="player-name">{playerName}</span>
                </>
}
                <span className="player-symbol">{playerSymbol}</span>
                
            </span>
            <button className="player-button" onClick={() => editName()}>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
};
export default Players;