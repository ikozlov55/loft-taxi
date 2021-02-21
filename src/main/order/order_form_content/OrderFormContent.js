import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../common/button/Button';
import PropTypes from 'prop-types';
import './OrderFormContent.css';

const OrderFormContent = (props) => {
    return (
        <div className='OrderFormContent'>
            <h2>{props.title}</h2>
            <p className='form__text-block'>{props.text}</p>
            {props.linkTo ? (
                <Link to={props.linkTo}>
                    <Button
                        text={props.buttonText}
                        onClick={props.onButtonClick}
                    />
                </Link>
            ) : (
                <Button text={props.buttonText} onClick={props.onButtonClick} />
            )}
        </div>
    );
};

OrderFormContent.propTypes = {
    title: PropTypes.string,
    text: PropTypes.string,
    linkTo: PropTypes.string,
    buttonText: PropTypes.string,
    onButtonClick: PropTypes.func,
};

export default OrderFormContent;
