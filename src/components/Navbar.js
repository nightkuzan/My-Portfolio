import { MenuData } from "./MenuData";
import './NavbarStyles.css'
import { useState,useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
function Navbar(){
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // fade in and out when scroll down
    const [show, setShow] = useState(false);
    const fadeNav = () => {
        var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
            var currentScrollPos = window.pageYOffset;
            if (prevScrollpos > currentScrollPos) {
                setShow(false);
            } else {
                setShow(true);
            }
            prevScrollpos = currentScrollPos;
        }
        
    };
    useEffect(() => {
        fadeNav();
    }
    ,[]);

    return(
        
        <nav className=
           
         { show ? "Navhide" : "NavbarItems"}>
            <h1 >
                <a href="/My-Portfolio" className="nav-linkss">Portfolio</a>
            </h1>
            <div className="menu-icons"
            onClick={handleClick}>
                {click ? <FontAwesomeIcon icon={faTimes} className="icons" /> : <FontAwesomeIcon icon={faBars} className="icons" />}
            </div>
            <ul className={click ? "nav-menu active":"nav-menu"}>
                {MenuData.map((item, index) => {
                    return(
                        <li key={index}>
                            <a className={item.cName} href={item.path}
                            onClick={() => setClick(false)}>
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