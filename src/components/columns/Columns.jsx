import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import Column from '../../containers/column/Column';

import '../../styles/columns.css';

const Columns = ({ idBoard, columns }) => {
    return (
        <ul className='columns'>
            {columns.map(({ board, index, title }) => (
                <Fragment key={index}>
                    {
                        board == idBoard ?
                        <li>
                            <Column id={board} index={index} title={title} />
                        </li> : null 
                    }
                </Fragment>
            ))}
        </ul>
    )
};

Columns.propTypes = {
    idBoard: PropTypes.number.isRequired,
    columns: PropTypes.array.isRequired,
};

export default Columns;