import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '../../common/button/Button';
import CreditCard from './credit_card/CreditCard';
import TextField from '@material-ui/core/TextField';
import { cardOperations, cardSelectors } from '../../redux/modules/card';
import { maskCardNumber, maskCVC, maskExpiryDate } from './utils';
import './ProfileForm.css';

const cardNameRegisterOptions = {
    required: 'Введите имя владельца карты',
};

const cardNumberRegisterOptions = {
    required: 'Введите номер карты',
    pattern: {
        value: /\d{4} \d{4} \d{4} \d{4}/,
        message: 'Некорректный формат номера карты',
    },
};

const expiryDateRegisterOptions = {
    required: 'Введите дату',
    pattern: {
        value: /\d{2}\/\d{2}/,
        message: 'Ввудите дату в формат MM/YY',
    },
};

const cvcRegisterOptions = {
    required: 'Введите cvc',
    minLength: {
        value: 3,
        message: 'CVC состоит из трёх цифр',
    },
};

const ProfileForm = (props) => {
    const isCardAdded = useSelector(cardSelectors.selectIsCardAdded);
    const cardData = useSelector(cardSelectors.selectCardData);
    const [card, setCard] = useState(cardData);
    const dispatch = useDispatch();
    const { register, errors, handleSubmit } = useForm();

    useEffect(() => {
        dispatch(cardOperations.getCard());
    }, []);

    function handleChange(event) {
        const input = event.target;
        let newValue;
        switch (input.name) {
            case 'cardNumber':
                newValue = maskCardNumber(event);
                break;
            case 'cvc':
                newValue = maskCVC(event);
                break;
            case 'expiryDate':
                newValue = maskExpiryDate(event);
                break;
            default:
                newValue = input.value;
                break;
        }
        setCard({ ...card, [input.name]: newValue });
    }

    function onSubmit() {
        dispatch(cardOperations.addCard(card));
    }

    return (
        <div className='ProfileForm'>
            <h2
                data-testid='ProfileForm:header'
                className='ProfileForm__header'
            >
                Профиль
            </h2>
            <p className='form__text-block ProfileForm__text-block'>
                Введите платёжные данные
            </p>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='ProfileForm__cards-container'>
                    <div className='CreditCardForm'>
                        <div className='CreditCardForm__row'>
                            <TextField
                                name='cardName'
                                label='Имя владельца'
                                fullWidth
                                onChange={handleChange}
                                value={card.cardName || ''}
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
                                onChange={handleChange}
                                value={card.cardNumber || ''}
                                inputRef={register(cardNumberRegisterOptions)}
                                error={!!errors.cardNumber}
                                helperText={errors.cardNumber?.message}
                            />
                        </div>
                        <div className='CreditCardForm__row'>
                            <TextField
                                name='expiryDate'
                                label='MM/YY'
                                onChange={handleChange}
                                value={card.expiryDate || ''}
                                inputRef={register(expiryDateRegisterOptions)}
                                error={!!errors.expiryDate}
                                helperText={errors.expiryDate?.message}
                            />
                            <TextField
                                name='cvc'
                                label='CVC'
                                onChange={handleChange}
                                value={card.cvc || ''}
                                inputRef={register(cvcRegisterOptions)}
                                error={!!errors.cvc}
                                helperText={errors.cvc?.message}
                            />
                        </div>
                    </div>
                    {isCardAdded ? (
                        <CreditCard
                            cardNumber={cardData.cardNumber}
                            expiryDate={cardData.expiryDate}
                        />
                    ) : null}
                </div>
                <Button text='Сохранить' fontSize='1.3125rem' />
            </form>
        </div>
    );
};

export default ProfileForm;
