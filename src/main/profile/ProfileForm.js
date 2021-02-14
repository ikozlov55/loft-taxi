import React, { useState, useEffect } from 'react';
import Button from '../../common/button/Button';
import CreditCard from './credit_card/CreditCard';
import CreditCardForm from './credit_card_form/CreditCardForm';
import { useDispatch, useSelector } from 'react-redux';
import { cardOperations, cardSelectors } from '../../redux/modules/card';
import './ProfileForm.css';

const ProfileForm = (props) => {
    const [card, setCard] = useState({
        cardName: '',
        cardNumber: '',
        expiryDate: '',
        cvc: '',
    });
    const isCardAdded = useSelector(cardSelectors.selectIsCardAdded);
    const cardData = useSelector(cardSelectors.selectCardData);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardOperations.getCard());
    }, []);

    function handleChange(event) {
        const input = event.target;
        setCard({ ...card, [input.name]: input.value });
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(
            cardOperations.addCard(
                card.cardNumber,
                card.expiryDate,
                card.cardName,
                card.cvc
            )
        );
        setCard({
            cardName: '',
            cardNumber: '',
            expiryDate: '',
            cvc: '',
        });
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
