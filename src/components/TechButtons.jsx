import { useState } from "react";
import { techData } from "../utils/util.js"
import './techButtons.css'

export default function TechButtons(){
   const [techDesc, setTechDesc] = useState(["Please Select a Technology"]);
   const [activeButton, setActiveButton] = useState(null);
    function loadTechDescription(name, id) {
        setActiveButton(id);
        techData.map((item, index) =>{
            if(item.name === name){
                setTechDesc(item.description);
            }
        })
    }
    return (
        <section>
        <menu className="techStack">
            {techData.map((item, index) => {
            return (
            <li>
                <button className={`btn${activeButton === index ? "-active" : ""}`}  onClick={() => loadTechDescription(item.name, index)}>{item.name}</button>
            </li>
            )})}
        </menu>
        <div className="techDescBlock">
            <TechDetails data = {techDesc}/>
            </div>
        </section>
    );
}

const TechDetails = (props) => {
    return (
        props.data.map((item) => {
            return (
                <li className="techDescription">{item}</li>
            )
        })
        
    );
}