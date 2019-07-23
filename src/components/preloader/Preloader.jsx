import React, { useState } from 'react';

import ButtonLink from '../link/Link';

const Preloader = () => {
    const [isLoad] = useState(false);

    return (
        <ButtonLink 
            to='/'
            text='CREATED WITH LOVE'
            className={ isLoad ? 'preloader loaded' : 'preloader loading' } 
        />
    )
};

export default Preloader;