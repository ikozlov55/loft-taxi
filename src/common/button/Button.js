import React, { useState } from 'react';
import './Button.css';

const Button = (props) => {
    return (
        <button
            className={`Button ${props.disabled ? 'Button--disabled' : ''}`}
        >
            {props.text}
        </button>
    );
};

export default Button;
