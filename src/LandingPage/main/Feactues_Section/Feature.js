import React from 'react';

const Feature = ({ title, desc, path }) => {
    return (
        <div className='feature'>
            <img src={path} alt='an icon' className='svg-icon' />
            <div className='text'>
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    );
}

export default Feature;



/*
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBootstrap } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup } from '@fortawesome/free-solid-svg-icons';

<FontAwesomeIcon icon={faBootstrap} />
<FontAwesomeIcon icon={faLayerGroup} />
*/