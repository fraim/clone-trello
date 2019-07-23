import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ButtonLink = ({ text, to, className, click, title }) => (
    <Link 
        title={title} 
        onClick={click} 
        to={to} 
        className={className}
    >
        {text}
    </Link>
);

ButtonLink.propTypes = {
    text: PropTypes.node,
    to: PropTypes.string.isRequired,
    className: PropTypes.string,
    click: PropTypes.func,
    title: PropTypes.string,
};

ButtonLink.defaultProps = {
    text: '',
    className: '',
    click: () => {},
    title: '',
};

export default ButtonLink;