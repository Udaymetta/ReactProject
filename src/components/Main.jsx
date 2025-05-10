import "./main.css";
import { useState,  useRef } from "react";

const Main = () => {

    var [data, setData] = useState([
            { id: 1, value: "A flea and a fly flew up in a flue.", isVisible: false, answered: null, assignee: "" },
            { id: 2, value: "She sells seashells by the seashore.", isVisible: false, answered: null, assignee: "" },
            { id: 3, value: "If a dog chews shoes, whose shoes does he choose", isVisible: false, answered: null, assignee: "" },
            { id: 4, value: "You know New York, you need New York, you know you need unique New York", isVisible: false, answered: null, assignee: "" },
            { id: 5, value: "Top chopstick shops stock top chopsticks", isVisible: false, answered: null, assignee: "" },
            { id: 6, value: "Elizabeth has eleven elves in her elm tree.", isVisible: false, answered: null, assignee: "" },
            { id: 7, value: "Tie twine to three tree twigs.", isVisible: false, answered: null, assignee: "" },
            { id: 8, value: "Smelly shoes and socks shock sisters.", isVisible: false, answered: null, assignee: "" },
            { id: 9, value: "No need to light a night-light on a light night like tonight.", isVisible: false, answered: null, assignee: "" },
            { id: 10, value: "Cooks cook cupcakes quickly.", isVisible: false, answered: null, assignee: "" },
            { id: 11, value: "The great Greek grape growers grow great Greek grapes.", isVisible: false, answered: null, assignee: "" },
            { id: 12, value: "Kitty caught the kitten in the kitchen.", isVisible: false, answered: null, assignee: "" },
            { id: 13, value: "Near a ear, a nearer ear, a nearly eerie ear.", isVisible: false, answered: null, assignee: "" },
            { id: 14, value: "Double bubble gum, bubbles double.", isVisible: false, answered: null, assignee: "" },
            { id: 15, value: "He threw three free throws.", isVisible: false, answered: null, assignee: "" },
            { id: 16, value: "Six sticky skeletons.", isVisible: false, answered: null, assignee: "" },
            { id: 17, value: "A happy hippo hopped and hiccupped.", isVisible: false, answered: null, assignee: "" },
            { id: 18, value: "Pad kid poured curd pulled cod.", isVisible: false, answered: null, assignee: "" },
            { id: 19, value: "Six sick hicks nick six slick bricks with picks and sticks.", isVisible: false, answered: null, assignee: "" },
            { id: 20, value: "Give papa a cup of proper coffee in a copper coffee cup", isVisible: false, answered: null, assignee: "" },
            { id: 21, value: "Which wrist watches are Swiss wrist watches?", isVisible: false, answered: null, assignee: "" },
            { id: 22, value: "A shapeless sash sags slowly.", isVisible: false, answered: null, assignee: "" },
            { id: 23, value: "The sixth sick sheikh’s sixth sheep’s sick.", isVisible: false, answered: null, assignee: "" },
            { id: 24, value: "How can a clam cram in a clean cream can?", isVisible: false, answered: null, assignee: "" },
            { id: 25, value: "Scissors sizzle, thistles sizzle", isVisible: false, answered: null, assignee: "" },
            { id: 26, value: "I slit the sheet, the sheet I slit, and on the slitted sheet I sit.", isVisible: false, answered: null, assignee: "" },
            { id: 27, value: "Fred fed Ted bread and Ted fed Fred bread.", isVisible: false, answered: null, assignee: "" },
            { id: 28, value: "Send toast to ten tense stout saints’ ten tall tents.", isVisible: false, answered: null, assignee: "" },
            { id: 29, value: "I scream, you scream, we all scream for ice cream!", isVisible: false, answered: null, assignee: "" },
            { id: 30, value: "Wayne went to wales to watch walruses", isVisible: false, answered: null, assignee: "" },
            { id: 31, value: "Red lorry, yellow lorry, red lorry, yellow lorry, red lorry, yellow lorry.", isVisible: false, answered: null, assignee: "" },
            { id: 32, value: "Green glass globes glow greenly.", isVisible: false, answered: null, assignee: "" }          
    ]); 

    function handleClick(i) {
        const updatedData = data.map((item) => {
            if (item.id === i) {
                if (item.assignee === "") {
                    alert("Please Enter your name");
                    return item; // Return item without any updates
                } else {
                    // If assignee is not empty, update the `isVisible` property
                    return { ...item, isVisible: true };
                }
            }
            return item; // Ensure other items are not affected
        });
    
        setData(updatedData);
    }

    function handleName(i, e) {
        const updatedData = data.map((item) =>
            item.id === i ? { ...item, assignee: e.target.value} : item
        );
        setData(updatedData);
    }

    function handleAnswer(i, flag) {
        const updatedData = data.map((item) =>
            item.id === i ? { ...item, answered: flag } : item
        );
        setData(updatedData);
    }
    const [isPlay,setIsPlay] = useState(false);
    function handlePlay(flag) {
        setIsPlay(flag);
    }

    return (
        <div className="game-page">
            <h1 className="welcome-text">Hi Team, Welcome to the Fun Friday</h1> 
            {!isPlay && (
                <>
            <p className="description">A tongue twister is a sentence or phrase that is difficult to say quickly and
                 correctly, usually because it contains similar-sounding words or repetitive consonants.</p>
               
                 <u><p className="description" >Instructions</p></u>
            <ol className="instructions">
                <li>Please turn on your camera on</li>
                <li>There are total 32 tongue twisters in the list</li>
                <li>One Person can pick any 2 twisters from the list by choosing the random id's</li>
                <li>On picking up the twister, it should be said repeatedly for 3 times</li>
                <li>Evaluated based on the pronounciation of the twister effectively</li>
                <li>No Cheating</li>
            </ol>
            
            <button className="play-btn" onClick={() => handlePlay(true)}>LET'S PLAY</button>
            </>
            )}
            {isPlay && (
            <div className="game-container">
                <table className="game-table">
                    <thead>
                        <th>S. No</th>
                        <th>Text</th>
                        <th>Taken By</th>
                        <th>Answered</th>
                        <th>Action</th>
                    </thead>
                {data.map((i) => (
                    <tr key={i.id} id={`val-${i}`} className={`row val-${i}`}>
                         <td>
                            <h2>{i.id}</h2>
                        </td>
                        <td>
                            <h2>{i.isVisible && (i.value)}</h2>
                        </td>
                        <td>
                           <input type="text" placeholder="Enter Name" onChange={(e) => handleName(i.id, e)}/>
                        </td>
                        <td className="answered">
                        {i.isVisible && (<>
                            {(i.answered == null || i.answered) && <button className="yes" onClick={ () => handleAnswer(i.id, true)}>YES</button> }
                            {(i.answered == null || !i.answered) && <button className="no" onClick={ () => handleAnswer(i.id, false)}>NO</button>   }
                            </>
                        )}
                        </td>
                        <td>
                            <button onClick={() => handleClick(i.id)}>Show</button>
                        </td>
                    </tr>
                            ))}
               </table>
            </div>
)}
        </div>
    )
}

export default Main;