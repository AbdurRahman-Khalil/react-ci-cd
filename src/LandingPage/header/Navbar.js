import React, { useState } from 'react';


const Navbar = ({ logoName, navItem1, navItem2, navItem3, navItem4, navButton }) => {

    const [navbarState, setNavbarState] = useState(false);
    const [navItemState, setNavItemState] = useState("item1");
    const [toggleState, setToggleState] = useState(true);
    const [menuState, setMenuState] = useState(false);

    // navbarState
    const handleNavbar = () => {
        if (window.scrollY >= 90) {
            setNavbarState(true);
        }

        else {
            setNavbarState(false);
        }
    }

    window.addEventListener("scroll", handleNavbar);

    let isNavbarState = navbarState ? "Navbar-1" : "";

    // navItemState
    const handleClick = (itemName) => {
        setNavItemState(itemName);
    }

    // toggleBtn
    const handleToggle = () => {
        setToggleState(toggleState => !toggleState);
        setMenuState(menuState => !menuState);
    }

    // toggleState
    let isToggleState = toggleState ? "fa-solid fa-bars-staggered" : "fa-solid fa-arrow-right-long";

    // menuState
    let isMenuState = menuState ? "menu" : "";

    let menuBg = navbarState ? "menu_bg" : "";

    // logoColor
    let logoColor = navbarState ? "logo-white" : "";

    // toggleColor
    let toggleColor = navbarState ? "toggle-color" : "";

    return (
        <nav id='Navbar' className={`Navbar ${isNavbarState}`}>
            <a href='/' className={`logo ${logoColor}`}>{logoName}</a>

            <ul className={`nav-items ${isMenuState} ${menuBg}`}>
                <button
                    className='toggle-btn'
                    onClick={handleToggle}>
                    <i className={`${isToggleState} ${toggleColor}`}></i>
                </button>

                <li>
                    <a
                        href="#Header"
                        className={`${navItemState === "item1" ? "active" : ""}`}
                        onClick={() => handleClick("item1")}
                    >{navItem1}</a>
                </li>
                <li>
                    <a
                        href="#Features"
                        className={`${navItemState === "item2" ? "active" : ""}`}
                        onClick={() => handleClick("item2")}
                    >{navItem2}</a>
                </li>
                <li>
                    <a
                        href="#Services"
                        className={`${navItemState === "item3" ? "active" : ""}`}
                        onClick={() => handleClick("item3")}
                    >{navItem3}</a>
                </li>
                <li>
                    <a
                        href="#GetInTouch"
                        className={`${navItemState === "item4" ? "active" : ""}`}
                        onClick={() => handleClick("item4")}
                    >{navItem4}</a>
                </li>
            </ul>

            <a href='/' className='get-started'>{navButton}</a>

            <button
                className='toggle-btn'
                onClick={handleToggle}>
                <i className={`${isToggleState} ${toggleColor}`}></i>
            </button>
        </nav>
    );
}

export default Navbar;