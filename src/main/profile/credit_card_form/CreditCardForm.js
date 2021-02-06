import React from 'react';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import './CreditCardForm.css';

const CreditCardForm = (props) => {
    return (
        <div className='CreditCardForm'>
            <div className='CreditCardForm__row'>
                <TextField
                    name='cardName'
                    label='Имя владельца'
                    fullWidth
                    onChange={props.onChange}
                    required
                />
            </div>
            <div className='CreditCardForm__row'>
                <TextField
                    name='cardNumber'
                    label='Номер карты'
                    fullWidth
                    onChange={props.onChange}
                    required
                />
            </div>
            <div className='CreditCardForm__row'>
                <TextField
                    name='expiryDate'
                    label='MM/YY'
                    onChange={props.onChange}
                    required
                />
                <TextField
                    name='cvc'
                    label='CVC'
                    onChange={props.onChange}
                    required
                />
            </div>
        </div>
    );
};

CreditCardForm.propTypes = {
    onChange: PropTypes.func,
};

export default CreditCardForm;
