import React from 'react';

import Link from '../link/Link';
import '../../styles/error.css';

const ERROR_IMG = require('../../img/error.png');

const Error = () => (
    <section className='error'>
        <img src={ERROR_IMG} alt="error"/>
        <h1>Page not found!</h1>
        <Link 
            title='Home'
            to='/'
            text='Go home'
        />
    </section>
);

export default Error;