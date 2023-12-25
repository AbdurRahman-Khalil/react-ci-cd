import React from 'react';
import Navbar from './Navbar';
import Hero from './Hero';

import './headerStyles.css';


const Header = () => {
    return (
        <header id='Header'>
            <Navbar
                logoName={"LOGO"}

                navItem1={"Home"}
                navItem2={"Features"}
                navItem3={"Services"}
                navItem4={"Contact"}

                navButton={"Get started"}
            />

            <Hero
                Heading1={"Make landing page"}
                Heading2={"fast and easily."}

                desc1={"Create custom landing pages with Logo that convert"}
                desc2={"more visitors than any website-no coding required."}

                link1={<i class="fa-brands fa-facebook"></i>}
                link2={<i class="fa-brands fa-x-twitter"></i>}
                link3={<i class="fa-brands fa-instagram"></i>}
                link4={<i class="fa-brands fa-whatsapp"></i>}
                link5={<i class="fa-brands fa-youtube"></i>}
            />
        </header>
    );
}

export default Header;