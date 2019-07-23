import React from 'react';
import PropTypes from 'prop-types';

import LinkBoard from '../../containers/link-board/LinkBoard';

import '../../styles/boards.css';

const Boards = ({ boards }) => (
    <ul className='boards'>
        {boards.map((props, index) => {
            const { id, name } = props;
            return (
                <li key={id}>
                    <LinkBoard id={id} index={index} name={name} />
                </li>
                )
            }
        )}
    </ul>
);

Boards.propTypes = {
    boards: PropTypes.array.isRequired,
};

export default Boards;