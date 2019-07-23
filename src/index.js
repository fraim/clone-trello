import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store/store';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/home/Home';
import AddBoard from './containers/addboard/AddBoard';
import Board from './containers/board/Board';
import Error from './components/error/Error';

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route path='/addboard' component={AddBoard} />
                    <Route path='/boards/:index/:id' component={Board} />
                    <Route path='*' component={Error} />
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>
), document.getElementById('root'));