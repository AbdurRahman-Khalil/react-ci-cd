import React from 'react';

import TestimonialsContainer from './TestimonialsContainer';

const Testimonials = ({ heading, text }) => {
    return (
        <section id='Testimonials'>
            <h1>{heading}</h1>
            <p>{text}</p>

            <TestimonialsContainer />
        </section>
    );
}

export default Testimonials;