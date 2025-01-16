import {socialData} from '../utils/util.js'
import './header.css'

const Header = () => {
    return(
        <header>
                <h2>Uday Kiran Metta</h2>
                <table className="social">
                    <tr>
                   {socialData.map((item, index) => {
                        return <Social key = {index} data ={item} />  
                   })}
                   </tr>
                </table>
        </header>
    );
};

const Social = (props) => {
    const {img ,path, title} = props.data;
    return (
        <td>
            <a href={path} target="_blank" rel="noopener noreferrer"><img className="socialIcons" src={img} alt={title}/></a>
        </td>
    );
}

export default Header;