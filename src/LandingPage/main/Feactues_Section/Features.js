import React from 'react';
import Feature from './Feature';

import svg_1 from './SVGs/layer-group-solid.svg';
import svg_2 from './SVGs/pen-to-square-solid.svg';
import svg_3 from './SVGs/bootstrap.svg';

const Features = () => {
    return (
        <section id='Features'>
            <Feature
                path={svg_1}
                title={"100% Responsive"}
                desc={"This theme will look great on any device, no matter the size."}
            />
            
            <Feature
                path={svg_2}
                title={"Easy to Use"}
                desc={"Ready to use with your own content, or customize the source files."}
            />

            <Feature
                path={svg_3}
                title={"Bootstrap 5 Ready"}
                desc={"Featuring the latest build of the new Bootstrap 5 framework."}
            />
        </section>
    );
}

export default Features;