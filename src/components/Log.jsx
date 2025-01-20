import './log.css'

export default function Log({logSelected}){
    return (
        <>
        <hr />
        <div className="log-container">
        {logSelected.map((each) => { return (
            <p key={Math.random(1234)}>{each.playerSymb}  selected  {each.selected.row},{each.selected.col}</p>
        )})}
        </div>
        </>
    )
}