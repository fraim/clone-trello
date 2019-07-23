import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addColumn, updateBoardTitle } from '../../actions/actionCreator';

import Columns from '../../components/columns/Columns';

import '../../styles/board.css';

class Board extends Component {
    state = {
        activeDescription: false,
        activeCreate: false,
        activeName: false,
        nameText: '',
        titleText: '',
    };

    titleRef = React.createRef();
    nameRef = React.createRef();
    _isMounted = false;

    componentDidMount() {
        this._isMounted = true;
        if(this._isMounted) {
            document.addEventListener('mouseup', this.handleClickDocument);
            this.titleRef.current.focus();
            this.nameRef.current.focus();
        }
    };

    componentDidUpdate() {
        this._isMounted = true;
        if(this._isMounted) {
            document.addEventListener('mouseup', this.handleClickDocument);
            this.titleRef.current.focus();
            this.nameRef.current.focus();
        }
    };

    componentWillUnmount() {
        this._isMounted = false
    };
    
    addColumn = () => {
        const { titleText } = this.state;
        const id = +this.props.match.params.id || null;

        if(titleText.length > 1) {
            const { addColumn } = this.props;
            addColumn(id, (new Date()).getTime(), titleText );
            this.setState({
                activeCreate: false,
                titleText: '',
            });
        } else {
            this.titleRef.current.focus();
        }
    };

    updateBoardName = ({ key }) => {
        const { nameText } = this.state;
        const id = this.props.match.params.id || '';
        
        if(nameText.length > 1 && key === 'Enter') {
            const { updateBoardTitle } = this.props;
            updateBoardTitle(id, nameText);
            this.setState({
                activeName: false,
                nameText: '',
            });
        } else {
            this.nameRef.current.focus();
        }
    };

    handleClickActiveDesc = () => {
        this.setState(({ activeDescription }) => ({
            activeDescription: !activeDescription, 
        }));
    };

    handleClickCreatePopup = (e) => {
        this.setState(({ activeCreate }) => ({
            activeCreate: !activeCreate,
        }));
    };

    handleTitleText = ({ target: { value } }) => {
        this.setState({
            titleText: value,
        });
    };

    handleClickBoardName = () => {
        this.setState(({ activeName }) => ({
            activeName: !activeName,
        }));
    };

    handleNameText = ({ target: { value } }) => {
        this.setState({
            nameText: value,
        });
    };

    handleClickDocument = (e) => {
        if(!e.target.matches('.input__name, .create-column, .create__list.active *')) {
           this.setState({ 
                activeCreate: false,
                activeName: false,
           });
        }
    };

    render() {
        const { boards, columns } = this.props;
        const { activeDescription, activeCreate, activeName, titleText, nameText } = this.state;
        const index = this.props.match.params.index || '';
        const idBoard = +this.props.match.params.id || '';

        const { name, description } = boards[index];

        return (
            <section className='board'>
                <div className='board__container'>
                    <div className='board__title'>
                        <h1 onClick={this.handleClickBoardName} className={activeName ? 'board__name hide' : 'board__name'}>{name}</h1>
                        <input onKeyPress={this.updateBoardName} onChange={this.handleNameText} ref={this.nameRef} type="text" value={nameText} className={activeName ? 'input__name' : 'input__name hide'}/>
                        <button onClick={this.handleClickActiveDesc}><i title='Open description' className={activeDescription ? 'fas fa-plus open-description active' : 'fas fa-plus open-description'}></i></button>
                        <p className={activeDescription ? 'board__description active' : 'board__description hide'}>{description}</p>
                    </div>
                    <div className='board__columns'>
                        <Columns idBoard={idBoard} columns={columns} />
                        <button onClick={this.handleClickCreatePopup} className={ activeCreate ? 'create-column hide' : 'create-column'}><i className='fas fa-plus'></i> Create column</button>
                        <div ref={this.createList} className={ activeCreate ? 'create__list active' : 'create__list'}>
                            <input type='text' value={titleText} placeholder='Enter title' onChange={this.handleTitleText} ref={this.titleRef} />
                            <div className='create__list__links'>
                                <button onClick={this.addColumn} className='add'>Add to list</button>
                                <button onClick={this.handleClickCreatePopup} className='close'><i className="fas fa-times"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
};

export default connect(({ boards, columns }) => ({
    boards,
    columns,
}), { addColumn, updateBoardTitle })(Board);