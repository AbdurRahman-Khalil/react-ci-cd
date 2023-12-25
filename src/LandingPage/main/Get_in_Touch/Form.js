import React from 'react';

import InputFields from './InputFields';

const Form = ({ message, rows, btnText }) => {
    return (
        <form className='getInTouch-form'>
            <InputFields
                type={"text"}
                id={"name"}
                placeholder={"Name"}
            />
            
            <InputFields
                type={"email"}
                id={"email"}
                placeholder={"E-mail"}
            />            

            <InputFields
                type={"text"}
                id={"country"}
                placeholder={"Country"}
            />

            <textarea placeholder={message} rows={rows}></textarea>
            <button>{btnText}</button>
        </form>
    );
}

export default Form;