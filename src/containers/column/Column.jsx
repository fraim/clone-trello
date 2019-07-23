import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateColumnTitle, removeColumn, addCheckout, removeCheckouts } from '../../actions/actionCreator';

import Checkouts from '../../components/checkouts/Checkouts';

class Column extends Component {
    state = {
        activeTitle: false,
        activeMenu: false,
        activeAddCheckout: false,
        titleText: this.props.title,
        titleCheckout: '',
        descriptionCheckout: '',
    }

    titleRef = React.createRef();
    createTitleRef = React.createRef();
    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted) {
            document.addEventListener('mouseup', this.handleClickDocument);
            this.titleRef.current.focus();
            this.createTitleRef.current.focus();
        }
    };

    componentDidUpdate() {
        this._isMounted = true;
        if(this._isMounted) {
            document.addEventListener('mouseup', this.handleClickDocument);
            this.titleRef.current.focus();
            this.createTitleRef.current.focus();
        }
    };
 
    componentWillUnmount() {
        this._isMounted = false;
    };

    handleClickDocument = (e) => {
        if(!e.target.matches('.create__checkout *, .change__title, .menu *')) {
           this.setState({ 
                activeTitle: false,
                activeMenu: false,
                activeAddCheckout: false,
           });
        }
    };

    handleTitleChange = ({ target: { value } }) => {
        this.setState({
            titleText: value,
        })
    };

    handleTitleCheckoutChange = ({ target: { value } }) => {
        this.setState({
            titleCheckout: value,
        })
    };

    handleClickChangeTitle = () => {
        this.setState(({ activeTitle }) => ({
            activeTitle: !activeTitle,
        }));
    };

    handleClickOpenMenu = () => {
        this.setState(({ activeMenu }) => ({
            activeMenu: !activeMenu,
        }))
    };

    handleClickOpenAddCheckout = () => {
        this.setState(({ activeAddCheckout }) => ({
            activeAddCheckout: !activeAddCheckout,
        }));
    }
 
    updateColumnTitle = ({ key }) => {
        const { titleText } = this.state;

        if(titleText.length > 3 && key === 'Enter') {
            const { updateColumnTitle, index } = this.props;
            updateColumnTitle(index ,titleText);
            this.setState({
                activeTitle: false,
            });
        }
    };

    removeColumn = () => {
        const { index, removeColumn, removeCheckouts } = this.props;
        removeColumn(index);
        removeCheckouts(index);
        this.setState({
            activeMenu: false,
        })
    };

    addCheckout = () => {
        const { addCheckout, index, id } = this.props;
        const { titleCheckout, descriptionCheckout } = this.state;
        addCheckout(id, index, (new Date()).getTime(), titleCheckout, descriptionCheckout);
        this.setState({
            activeAddCheckout: false,
            titleCheckout: '',
        });
    };

    render() {
        const { title, index, checkouts } = this.props;
        const { activeTitle, titleText, activeMenu, activeAddCheckout, titleCheckout } = this.state;

        return (
            <>
                <div className='columns__container'>
                    <h2 onClick={this.handleClickChangeTitle} className={activeTitle ? 'hide' : ''}>{title}</h2>
                    <input
                        className={activeTitle ? 'change__title' : 'hide'}
                        type='text'
                        value={titleText}
                        onChange={this.handleTitleChange}
                        onKeyPress={this.updateColumnTitle}
                        ref={this.titleRef}
                    />
                    <div className='ellipsis'>
                        <i onClick={this.handleClickOpenMenu} className="fas fa-ellipsis-v"></i>
                        <div className={activeMenu ? 'menu' : 'menu hide'}>
                            <div className='head'>
                                <span>Actions with list</span>
                                <button onClick={this.handleClickOpenMenu} className='close'><i className='fas fa-times'></i></button>
                            </div>
                            <hr/>
                            <button onClick={this.removeColumn} className='delete'>Delete</button>
                        </div>
                    </div>
                </div>
                <Checkouts index={index} checkouts={checkouts} />
                <button onClick={this.handleClickOpenAddCheckout} className={activeAddCheckout ? 'create__cart hide' : 'create__cart'}><i className="fas fa-plus"></i> Create checkout</button>
                <div className={activeAddCheckout ? 'create__checkout' : 'create__checkout hide'}>
                    <textarea onChange={this.handleTitleCheckoutChange} ref={this.createTitleRef} value={titleCheckout} placeholder='Enter title for new checkout' />
                    <div className='create__checkout__buttons'>
                        <button onClick={this.addCheckout} className='add'>Add checkout</button>
                        <button onClick={this.handleClickOpenAddCheckout} className='close'><i className='fas fa-times'></i></button>
                    </div>
                </div>
            </>
        )
    }
}

export default connect(({ columns, checkouts }) => ({
    columns,
    checkouts,
}), { updateColumnTitle, removeColumn, addCheckout, removeCheckouts })(Column);