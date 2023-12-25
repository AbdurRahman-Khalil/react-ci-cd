import React from 'react';

import Content from './Content';

const GetInTouch = ({ heading, text1, text2 }) => {
    return (
        <section id='GetInTouch'>
            <h1>{heading}</h1>
            <p>{text1}<br/> {text2}</p>

            <Content />
        </section>
    );
}

export default GetInTouch;