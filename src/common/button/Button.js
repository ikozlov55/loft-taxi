import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = (props) => {
    return (
        <button
            className={`Button ${props.disabled ? 'Button--disabled' : ''}`}
            style={{ fontSize: props.fontSize || '1.5rem' }}
            disabled={props.disabled}
            data-testid='Button:button'
        >
            {props.text}
        </button>
    );
};

Button.propTypes = {
    disabled: PropTypes.bool,
    text: PropTypes.string,
    fontSize: PropTypes.string,
};

export default Button;
