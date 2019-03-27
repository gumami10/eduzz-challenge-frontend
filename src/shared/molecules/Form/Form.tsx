import './Form.css';

import React, { Component } from 'react';
import * as ReactRedux from 'react-redux';

import { getMovies } from '../../../redux/reducers/moviesReducer';

interface IProps {
    getMovies: (value: string) => void;
}

interface IState {
    value: string;
}

class Form extends Component<IProps, IState> {
    state = {
        value: ""
    };

    onChange = (e: any) => {
        this.setState({
            value: e.target.value
        });
    };

    render() {
        return (
            <form action="" className="card-container">
                <input
                    value={this.state.value}
                    name="value"
                    type="text"
                    onChange={this.onChange}
                    placeholder="Type the best Star Wars movie"
                    className="item"
                />
                <button
                    className="button -container"
                    type="button"
                    onClick={() => this.props.getMovies(this.state.value)}
                >
                    Show me some action!
                </button>
            </form>
        );
    }
}

const mapStateToProps = null;

const mapDispatchToProps = {
    getMovies
};

const connectToRedux = ReactRedux.connect(mapStateToProps, mapDispatchToProps);
export default connectToRedux(Form);
