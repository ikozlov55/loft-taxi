import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import './CreditCardForm.css';

const cardNameRegisterOptions = {
    required: 'Введите имя владельца карты',
};

const cardNumberRegisterOptions = {
    required: 'Введите номер карты',
};

const expiryDateRegisterOptions = {
    required: 'Введите дату',
};

const cvcRegisterOptions = {
    required: 'Введите cvc',
};

const CreditCardForm = (props) => {
    const { register, errors } = useForm();

    return (
        <div className='CreditCardForm'>
            <div className='CreditCardForm__row'>
                <TextField
                    name='cardName'
                    label='Имя владельца'
                    fullWidth
                    onChange={props.onChange}
                    value={props.cardName || ''}
                    inputRef={register(cardNameRegisterOptions)}
                    error={!!errors.cardName}
                    helperText={errors.cardName?.message}
                />
            </div>
            <div className='CreditCardForm__row'>
                <TextField
                    name='cardNumber'
                    label='Номер карты'
                    fullWidth
                    onChange={props.onChange}
                    value={props.cardNumber || ''}
                    inputRef={register(cardNumberRegisterOptions)}
                    error={!!errors.cardNumber}
                    helperText={errors.cardNumber?.message}
                />
            </div>
            <div className='CreditCardForm__row'>
                <TextField
                    name='expiryDate'
                    label='MM/YY'
                    onChange={props.onChange}
                    value={props.expiryDate || ''}
                    inputRef={register(expiryDateRegisterOptions)}
                    error={!!errors.expiryDate}
                    helperText={errors.expiryDate?.message}
                />
                <TextField
                    name='cvc'
                    label='CVC'
                    onChange={props.onChange}
                    value={props.cvc || ''}
                    inputRef={register(cvcRegisterOptions)}
                    error={!!errors.cvc}
                    helperText={errors.cvc?.message}
                />
            </div>
        </div>
    );
};

CreditCardForm.propTypes = {
    onChange: PropTypes.func,
};

export default CreditCardForm;
