import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

class Input extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isInvalid: false,
        };
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.props.onChange(event.target.value);
    }

    render() {
        return (
            <div className='Input'>
                <label htmlFor={this.props.id} data-testid='Input:label'>
                    {this.props.label}
                </label>
                <input
                    type={this.props.type}
                    id={this.props.id}
                    value={this.props.value}
                    placeholder={this.props.placeholder}
                    onChange={this.handleChange}
                    required
                    data-testid='Input:input'
                />
            </div>
        );
    }
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password']).isRequired,
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
};

export default Input;
