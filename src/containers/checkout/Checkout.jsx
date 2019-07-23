import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCheckoutDescription, updateCheckoutTitle, removeCheckout } from '../../actions/actionCreator';

class Checkout extends Component {
    state = {
        activePopup: false,
        activeDescription: false,
        titleText: this.props.title,
        descriptionText: this.props.description,
    };

    titleRef = React.createRef();
    descriptionRef = React.createRef();

    componentDidMount() {
        this.descriptionRef.current.focus();
        document.addEventListener('mouseup', this.handleClickDocument);
    };

    componentDidUpdate() {
        this.descriptionRef.current.focus();
        document.addEventListener('mouseup', this.handleClickDocument);
    };

    updateCheckoutDescription = () => {
        const { id, updateCheckoutDescription  } = this.props;
        const { descriptionText } = this.state;
        updateCheckoutDescription(id, descriptionText);
        this.setState({
            activeDescription: false,
        });
    };

    updateCheckoutTitle = ({ key }) => {
        const { id, updateCheckoutTitle } = this.props;
        const { titleText } = this.state;
        if(key === 'Enter') {
            updateCheckoutTitle(id, titleText);
            this.titleRef.current.blur();
        } 
    };

    removeCheckout = () => {
        const { id, removeCheckout } = this.props;
        removeCheckout(id);
        this.setState({
            activePopup: false,
        });
    };

    handleClickDocument = (e) => {
        if(!e.target.matches('.description__change *')) {
            this.setState({
                activeDescription: false,
            });
        }
    };  

    handleClickActivePopup = () => {
        this.setState(({ activePopup }) => ({
            activePopup: !activePopup,
        }));
    };

    handleClickChangeDescription = () => {
        this.setState(({ activeDescription }) => ({
            activeDescription: !activeDescription,
        }));
    };

    handleChangeDescription = ({ target: { value } }) => {
        this.setState({
            descriptionText: value,
        });
    };

    handleChangeTitleText = ({ target: { value } }) => {
        this.setState({
            titleText: value,
        });
    };  

    render() {
        const { titleText, activePopup, descriptionText, activeDescription } = this.state;
        const { description } = this.props;

        return (
            <>
                <button className='cart' onClick={this.handleClickActivePopup}>
                    <span className='title'>{titleText}</span>
                    {descriptionText !== '' ? <i className="fas fa-comment"></i> : null}
                </button>
                <div className={activePopup ? 'popup__checkout' : 'popup__checkout hide'}>
                    <div className='popup__checkout__container'>
                        <button onClick={this.handleClickActivePopup} className='close'><i className='fas fa-times'></i></button>
                        <div className='head'>
                            <i className="fas fa-heading"></i>
                            <textarea ref={this.titleRef} onKeyPress={this.updateCheckoutTitle} placeholder='Enter title more 1' value={titleText} onChange={this.handleChangeTitleText} className='title'>{titleText}</textarea>
                        </div>
                        <div className='description'>
                            <i className="fas fa-comment"></i>
                            <span>Description</span>
                            <button onClick={this.handleClickChangeDescription} className='change'>Change</button>
                        </div>
                        <div className='description__change'>
                            {activeDescription ? null : <p onClick={this.handleClickChangeDescription}>{description}</p>}
                            <div className={activeDescription ? 'description__change__textarea' : 'description__change__textarea hide'}>
                                <textarea ref={this.descriptionRef} className='description__change__textarea__text' value={descriptionText} onChange={this.handleChangeDescription}>{description}</textarea>
                                <button onClick={this.updateCheckoutDescription} className='add'>Save</button>
                                <button onClick={this.handleClickChangeDescription} className='close'><i className='fas fa-times'></i></button>
                            </div>
                        </div>
                        <button onClick={this.removeCheckout} className='delete'><i className="fas fa-trash"></i></button>
                    </div>
                </div>
                
            </>
        )
    }
};

export default connect(({ checkouts }) => ({
    checkouts,
}), { updateCheckoutDescription, updateCheckoutTitle, removeCheckout })(Checkout);