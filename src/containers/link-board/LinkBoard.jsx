import React, { Component } from 'react';
import { connect } from 'react-redux';

import { removeBoard, removeColumns, removeCheckouts } from '../../actions/actionCreator';

import Link from '../../components/link/Link';

class Board extends Component {

    removeBoard = () => {
        const { id, removeBoard, removeColumns, removeCheckouts } = this.props;
        removeBoard(id);
        removeColumns(id);
        removeCheckouts(id);
    };

    render() {
        const { id, index, name } = this.props;

        return (
            <>
                <button onClick={this.removeBoard}><i className="fas fa-times close"></i></button>
                <Link text={name} title={name} to={`/boards/${index}/${id}`} />
            </>
        )
    }
};

export default connect(({ boards, columns, checkouts }) => ({
    boards,
    columns,
    checkouts,
}), { removeBoard, removeColumns, removeCheckouts })(Board);