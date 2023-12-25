import React from 'react';

import Testimonial from './Testimonial';
import userImage1 from './images/clients/Jeanne Roberts.jpg';
import userImage2 from './images/clients/Colleen Cox.jpg';
import userImage3 from './images/clients/Ross Howard.jpg';
import flagImage1 from './images/clients/ukFlag.jpg';
import flagImage2 from './images/clients/germanFlag.png';
import flagImage3 from './images/clients/usaFlag.jpg';


const TestimonialsContainer = () => {
    return (
        <div className='testimonials-container'>
            <Testimonial
                title={`"Extraordinary"`}
                desc={"LOGO has been instrumental in helping Chatdesk articulate new product and feature releases to our "
                + "customers, allowing us to maintain a high rate of growth as we push the platform into new territories. He's been fundamental to our success."}

                sourcePath={userImage1}
                userName={"Jeanne Roberts"}
                status={"Co-Founder, Day app"}
                sourcePath1={flagImage1}
            />

            <Testimonial
                title={`"Outstanding"`}
                desc={"We searched long and hard for a UI/UX designer and we're extremely thankful to have found LOGO. Highly skilled "
                + ",reliable and combines strategic insights with great design. He's been fundamental to our success."}

                sourcePath={userImage2}
                userName={"Colleen Cox"}
                status={"Co-Founder, Day app"}
                sourcePath1={flagImage2}
            />

            <Testimonial
                title={`"Spectacular"`}
                desc={"Reliable, hard working, empathetic, incredibly smart, gifted at what he does, understands his craft as "
                + "much, even more than anyone I've ever met, and I've met 1000's of people in his profession over the last 10 years."}

                sourcePath={userImage3}
                userName={"Ross Howard"}
                status={"Co-Founder, Day app"}
                sourcePath1={flagImage3}
            />
        </div>
    );
}

export default TestimonialsContainer;