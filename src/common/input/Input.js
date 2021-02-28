import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = (props) => {
    function handleChange(event) {
        props.onChange(event.target.value);
    }

    return (
        <div className={`Input ${props.error ? 'Input--error' : ''}`}>
            <label htmlFor={props.name} data-testid='Input:label'>
                {props.label}
            </label>
            <input
                type={props.type || 'text'}
                id={props.name}
                name={props.name}
                value={props.value}
                placeholder={props.placeholder}
                onChange={handleChange}
                data-testid='Input:input'
                ref={props.register}
            />
            <p>{props.error}</p>
        </div>
    );
};

Input.propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['text', 'email', 'password']),
    label: PropTypes.string,
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    register: PropTypes.func,
    error: PropTypes.string,
};

export default Input;
