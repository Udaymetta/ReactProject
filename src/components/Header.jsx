import headerImage from "../assets/investment-calculator-logo.png";
import "../components/header.css";

const Header = () => {
    return (
        <div className="header">
            <img src={headerImage} alt="header"/>
            <p className="header-text">Investment Calculator</p>
        </div>
    )
}

export default Header;