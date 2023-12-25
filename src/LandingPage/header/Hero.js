import React from 'react';

const Hero = ({ Heading1, Heading2, desc1, desc2, link1, link2, link3, link4, link5 }) => {
  return (
    <section id='Hero'>
      <h1>{Heading1} <br /> {Heading2}</h1>
      <p>{desc1} <br /> {desc2}</p>

      <form className='header-form'>
        <input type='email' id='email' placeholder='Enter your email' />
        <a href='/' className='cta-btn'>Subscribe</a>
      </form>

      <div className='social-links'>
        <a href='/'>{link1}</a>
        <a href='/'>{link2}</a>
        <a href='/'>{link3}</a>
        <a href='/'>{link4}</a>
        <a href='/'>{link5}</a>

      </div>
    </section>
  );
}

export default Hero;