import React from 'react'

import './footerStyles.css';

const Footer = ({ copyrightText, f_link_1, f_link_2, f_link_3, f_link_4 }) => {
    return (
        <footer>
            <p>{copyrightText}</p>
            <ul className='footer-links'>
                <a href='/'>{f_link_1}</a>
                <a href='/'>{f_link_2}</a>
                <a href='/'>{f_link_3}</a>
                <a href='/'>{f_link_4}</a>
            </ul>
        </footer>
    )
}

export default Footer