import React, { useState } from 'react';

const NavItem = ({ dest, navItem }) => {
    const [btnState, setBtnState] = useState(true);

    const handleClick = () => {
        setBtnState(btnState => !btnState);
    }

    let toggleClass = btnState ? 'active' : "";

    return (
        <a
            href={dest}
            className={`${toggleClass}`}
            onClick={handleClick}
        >{navItem}</a>
    );
}

export default NavItem;