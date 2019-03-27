import './App.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import configureStore from './redux/configureStore';
import Surprise from './shared/atoms/Surprise/Surprise';
import MainPage from './shared/pages/MainPage/MainPage';
import MoviesContent from './shared/pages/MoviesContent/MoviesContent';

const store = configureStore();

interface IState {
    surprise: boolean;
}

interface IProps {}

class App extends Component<IProps, IState> {
    state: IState = {
        surprise: false
    };

    getSurprise = () => {
        if (this.state.surprise) this.setState({ surprise: false });
        else this.setState({ surprise: true });
    };

    render() {
        return (
            <ReactRedux.Provider store={store}>
                <div
                    className={
                        !this.state.surprise
                            ? "container -no-surprise"
                            : "container -surprise"
                    }
                >
                    <Surprise
                        className="button"
                        getAction={this.getSurprise}
                        description={
                            !this.state.surprise
                                ? "Turn to the dark side"
                                : "I REGRET IT, TAKE ME BACK"
                        }
                        isSurprise={this.state.surprise}
                    />
                </div>
                {!this.state.surprise ? (
                    <MainPage />
                ) : (
                    <MoviesContent isSearch={false} />
                )}
            </ReactRedux.Provider>
        );
    }
}

export default App;
