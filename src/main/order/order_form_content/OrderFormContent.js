import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../../common/button/Button';
import './OrderFormContent.css';

const OrderFormContent = (props) => {
    return (
        <div className='OrderFormContent'>
            <h2>{props.title}</h2>
            <p className='form__text-block'>{props.text}</p>
            {props.linkTo ? (
                <Link to={props.linkTo}>
                    <Button text={props.buttonText} />
                </Link>
            ) : null}
        </div>
    );
};

export default OrderFormContent;
