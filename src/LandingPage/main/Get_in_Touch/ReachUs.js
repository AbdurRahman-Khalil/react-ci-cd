import React from 'react';

const ReachUs = ({ title, email, phone, address }) => {
    return (
        <div className='reach-us'>
            <h3>{title}</h3>
            <div className='reash-us-content'>
                <h4>{email}</h4>
                <h4>{phone}</h4>
                <h4>{address}</h4>
            </div>

            {/* <div className='reash-us-content'>
                <h4>Email:</h4><p>{email}</p>
                <h4>Phone:</h4><p>{phone}</p>
                <h4>Address:</h4><p>{address}</p>
            </div> */}
        </div>
    );
}

export default ReachUs;