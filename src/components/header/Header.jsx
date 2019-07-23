import React from 'react';

import ButtonLink from '../link/Link';
import Preloader from '../preloader/Preloader';

import '../../styles/header.css';

const HOME__SRC = require('../../img/home.png');

const Header = () => (
    <header className="header">
        <div className="header__container">
            <ButtonLink 
                title='Home' 
                text={<img src={HOME__SRC} 
                alt='logo'/>} 
                className='header__logo' to='/' 
            />
            <Preloader />
            <ButtonLink 
                title='Adding board' 
                text={<i className="fas fa-plus"></i>} 
                className='header__addboard' 
                to='/addboard' 
            />
        </div>
    </header>
);

export default Header;