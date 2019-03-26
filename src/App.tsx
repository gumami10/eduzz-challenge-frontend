import './App.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import configureStore from './redux/configureStore';
import MainPage from './shared/pages/MainPage/MainPage';

const store = configureStore();

class App extends Component {
    render() {
        return (
            <ReactRedux.Provider store={store}>
                <MainPage />
            </ReactRedux.Provider>
        );
    }
}

export default App;
