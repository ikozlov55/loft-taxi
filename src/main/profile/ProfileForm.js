import React, { useState, useEffect } from 'react';
import Button from '../../common/button/Button';
import CreditCard from './credit_card/CreditCard';
import CreditCardForm from './credit_card_form/CreditCardForm';
import { useDispatch, useSelector } from 'react-redux';
import { getCard, addCard } from '../../redux/modules/card';
import {
    selectIsCardAdded,
    selectCardData,
} from '../../redux/modules/selectors';
import './ProfileForm.css';

const ProfileForm = (props) => {
    const [cardName, setCardName] = useState('');
    const [cardNumber, setCardNumber] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const dispatch = useDispatch();
    const isCardAdded = useSelector(selectIsCardAdded);
    const cardData = useSelector(selectCardData);

    useEffect(() => {
        dispatch(getCard());
    }, []);

    const nameToSetter = {
        cardName: setCardName,
        cardNumber: setCardNumber,
        expiryDate: setExpiryDate,
        cvc: setCvc,
    };

    function handleChange(event) {
        const input = event.target;
        nameToSetter[input.name](input.value);
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(addCard(cardNumber, expiryDate, cardName, cvc));
        setCardName('');
        setCardNumber('');
        setExpiryDate('');
        setCvc('');
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
            <form onSubmit={handleSubmit}>
                <div className='ProfileForm__cards-container'>
                    <CreditCardForm onChange={handleChange} />
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
