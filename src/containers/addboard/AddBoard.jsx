import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addBoard } from '../../actions/actionCreator';

import '../../styles/addboard.css';

class AddBoard extends Component {
    state = {
        inputText: '',
        textareaText: '',
    };

    handleInputChange = ({ target: { value } }) => {
        this.setState({
            inputText: value,
        });
    };

    handleTeaxtareaChange = ({ target: { value } }) => {
        this.setState({
            textareaText: value,
        });
    };

    addBoard = () => {
        const {inputText, textareaText} = this.state;

        const { addBoard } = this.props;
        addBoard((new Date()).getTime(), inputText, textareaText);
        this.setState({
            inputText: '',
            textareaText: '',
        });
    };

    render() {
        const { inputText, textareaText } = this.state;

        return (
            <section className='addboard'>
                <h1>Add new board</h1>
                <div className='addboard__input'>
                    <label>
                        Name: <span className='addboard__input-name'>{inputText}</span> <br/>
                        <input placeholder='Enter name' type='text' onChange={this.handleInputChange} value={inputText} />
                    </label>
                </div>
                <div className='addboard__textarea'>
                    <label>
                        Description <br/>
                        <textarea placeholder='Enter description' onChange={this.handleTeaxtareaChange} value={textareaText} />
                    </label>
                </div>
                <button onClick={this.addBoard} className='addboard__create' type='button'>create</button>
            </section>
        )
    };
}

export default connect(({ boards }) => ({
    boards,
}), { addBoard })(AddBoard);