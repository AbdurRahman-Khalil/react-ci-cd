import React from 'react';

import Form from './Form';
import ReachUs from './ReachUs';

const Content = () => {
    return (
        <div className='content'>
            <Form
                message={"Your Message"}
                rows={3}
                btnText={"Submit"}
            />

            <ReachUs
                title={"Reach us By"}
                email={"Reach_Us@example.com"}
                phone={"+1 012 3456789"}
                address={"#212, Ground floor, 7th cross Some layout, Some Road, Koromangla Bengaluru 560001"}
            />
        </div>
    );
}

export default Content;