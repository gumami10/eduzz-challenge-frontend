import './Form.css';

import React, { Component } from 'react';

interface IProps {
    getData: (e: any) => void;
    getAction: () => void;
}

interface IState {
    value: string;
}

class Form extends Component<IProps, IState> {
    state = {
        value: ""
    };

    onChange = (e: any) => {
        this.props.getData(e.target.value);
        this.setState({
            value: e.target.value
        });
    };

    onAction = () => {
        this.props.getAction();
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
                    onClick={this.props.getAction}
                >
                    Show me some action!
                </button>
            </form>
        );
    }
}

export default Form;
