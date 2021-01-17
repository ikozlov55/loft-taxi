import React from 'react';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInvalid: false,
        };
    }

    render() {
        return (
            <div className='Input'>
                <label htmlFor={this.props.id}>{this.props.label}</label>
                <input
                    type={this.props.type}
                    id={this.props.id}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.props.onChange}
                />
            </div>
        );
    }
}

export default Input;
