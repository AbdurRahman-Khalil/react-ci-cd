import React from 'react';
import Service from './Service';

import image_1 from './images/ResponsiveDesign.jpg';
import image_2 from './images/EasyToUseCustomize.png';
import image_3 from './images/Bootstrap5.jpg'


const Services = () => {
    return (
        <section id='Services'>
            <Service
                sourcePath={image_1}
                title={"100% Responsive"}
                desc={"When you use a theme created by Start Bootrtrap, you know that the theme will look great on any " 
                    + "device, whatever it's a phone, tablet, or desktop the page will behave responsively."}
            />

            <Service
                sourcePath={image_2}
                title={"Easy to Use & Customize"}
                desc={"Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization "
                    + "options. Out of the box, just add your content and images, and your new landing page will be ready to go."}
            />

            <Service
                sourcePath={image_3}
                title={"Bootstrap 5 Ready"}
                desc={"Newly improved, and full of great utility classes, Bootstrap 5 is leading the way in mobile responsive "
                    + "web development! All of the themes on Start Bootstrap are now using Bootstrap 5."}
            />
        </section>
    );
}

export default Services;