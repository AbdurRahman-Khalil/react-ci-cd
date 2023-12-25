import React from 'react';

import Features from './Feactues_Section/Features';
import Services from './Services_Section/Services';
import Testimonials from './Testimonials_Section/Testimonials';
import GetInTouch from './Get_in_Touch/GetInTouch';

import './mainStyles.css';

const Main = () => {
    return (
        <main>
            <Features />
            
            <Services />
            
            <Testimonials 
                heading = {"We're all over the globe"}
                text = {"Our clients from all over the globe hired us to their amazing products, websites & experiences."}
            />

            <GetInTouch
                heading={"Get in Touch"}
                // text1={"Feel free to get in touch with us. We're excited to hear from you and help you achieve your Precious Goals! Simply fill out the form below with your name, email and message, and we'll be in touch shortly"}
                text1={"Feel free to get in touch with us. We're excited to hear from you and help you achieve your Precious Goals!"}
                text2={"Simply fill out the form below with your name, email, country and message, and we'll be in touch shortly."}
            />
        </main>
    );
}

export default Main;