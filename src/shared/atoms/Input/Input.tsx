import React, {Component} from 'react'
import './Input.css'

interface IProps {
    type?: string;
    placeholder: string;
    className: string;
}
interface IState {
    value: string;
}


class Input extends Component <IProps, IState> {
    static defaultProps = {
        type: 'text',
        placeholder: "Digite aqui..."
    }
    state = {
        value: ''
    }

    onChange = (e:any) => {
        this.setState({value: e.target.value})
    }

    render() {
        return (
            <input 
                type={this.props.type}
                onChange={this.onChange}
                placeholder={this.props.placeholder} 
                className={this.props.className}
            />
        )
    }
}

export default Input
