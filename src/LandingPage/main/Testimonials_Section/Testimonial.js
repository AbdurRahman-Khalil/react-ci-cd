import React from 'react';

const Testimonial = ({ title, desc, sourcePath, userName, status, sourcePath1 }) => {
    return (
        <div className='testimonial'>
            <h3>{title}</h3>
            <p>{desc}</p>
            <div className='user-info'>
                <div className='user-text'>
                    <img src={sourcePath} className='user-img' alt="Avatar" />
                    <div>
                        <h4>{userName}</h4>
                        <p>{status}</p>
                    </div>
                </div>
                <img src={sourcePath1} className='user-flag' alt="Avatar" />
            </div>
        </div>
    );
}

export default Testimonial;