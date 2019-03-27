import './Input.css';

import React, { Component } from 'react';

interface IProps {
    type?: string;
    placeholder: string;
    className?: string;
}

interface IState {
    value: string;
}

class Form extends Component<IProps, IState> {
    static defaultProps = {
        type: "text",
        placeholder: "Digite aqui..."
    };
    state = {
        value: ""
    };

    onChange = (e: any) => {
        this.setState({ value: e.target.value });
    };

    render() {
        return (
            <form action="">
                <input
                    type={this.props.type}
                    onChange={this.onChange}
                    placeholder={this.props.placeholder}
                    className={this.props.className}
                />
                <button className="button -container" type="button">
                    Show me some action!
                </button>
            </form>
        );
    }
}

export default Form;
