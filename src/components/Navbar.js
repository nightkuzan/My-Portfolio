import { MenuData } from "./MenuData";
import './NavbarStyles.css'
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faTimes,faSmileWink } from '@fortawesome/free-solid-svg-icons'
function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return(
        <nav className="NavbarItems">
            <h1 className="logo">
                Portfolio
                <FontAwesomeIcon icon={faSmileWink} className="logos" />
            </h1>
            <div className="menu-icons"
            onClick={handleClick}>
                {click ? <FontAwesomeIcon icon={faTimes} className="icons" /> : <FontAwesomeIcon icon={faBars} className="icons" />}
            </div>
            <ul className={click ? "nav-menu active":"nav-menu"}>
                {MenuData.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.path}>
                                {item.title}
                            </a>
                        </li>
                    )
                })}
            </ul>
        </nav>
        
    );
}

export default Navbar;