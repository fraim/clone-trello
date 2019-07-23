import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Checkout from '../../containers/checkout/Checkout';

import '../../styles/checkouts.css';

const Checkouts = ({ index, checkouts }) => (
    <ul className='checkouts'>
        {checkouts.map(({ parent, id, title, description }) => (
            <Fragment key={id}>
                {index === parent ? <li><Checkout id={id} title={title} description={description} /></li> : null}
            </Fragment>
        ))}
    </ul>
);

Checkouts.propTypes = {
    index: PropTypes.number,
    checkouts: PropTypes.array.isRequired,
};

Checkouts.defaultProps = {
    index: null,
};

export default Checkouts;