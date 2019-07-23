import React, { Component } from 'react';
import { connect } from 'react-redux';

import Boards from '../../components/boards/Boards';
import Link from '../../components/link/Link';

import { removeBoard, removeColumns, removeCheckouts } from '../../actions/actionCreator';

import '../../styles/home.css';

class Home extends Component {

    render() {
        const { boards } = this.props;

        return (
            <section className='home'>
                <div className='home__boards'>
                    <div className='home__boards__user'>
                        <i className='far fa-user'></i> 
                        <span>Boards</span> 
                    </div>
                    <div className='home__boards__flex'>
                        {boards && <Boards boards={boards} />}
                        <Link className='create__board' title='Create board' text='Create board' to={'/addboard'}/>
                    </div>
                </div>
            </section>
        )
    }
}

export default connect(({ boards, columns, checkouts }) => ({
    boards,
    columns,
    checkouts,
}), { removeBoard, removeColumns, removeCheckouts })(Home);