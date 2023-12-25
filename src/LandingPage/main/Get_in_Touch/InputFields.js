import React from 'react';

const InputFields = ({ type, id, placeholder }) => {
    return (
        <>
            <input type={type} id={id} placeholder={placeholder} />
        </>
    );
}

export default InputFields;