import React from 'react';

const Service = ({ title, desc, sourcePath }) => {
    return (
        <div className='service'>
            <div className='service-text'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
            <img src={sourcePath} alt='service-img'/>
        </div>
    );
}

export default Service;