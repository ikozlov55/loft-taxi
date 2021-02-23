import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';
import Button from '../../common/button/Button';
import CreditCard from './credit_card/CreditCard';
import CreditCardForm from './credit_card_form/CreditCardForm';
import { cardOperations, cardSelectors } from '../../redux/modules/card';
import './ProfileForm.css';

const ProfileForm = (props) => {
    const isCardAdded = useSelector(cardSelectors.selectIsCardAdded);
    const cardData = useSelector(cardSelectors.selectCardData);
    const [card, setCard] = useState(cardData);
    const dispatch = useDispatch();
    const { handleSubmit } = useForm();

    useEffect(() => {
        dispatch(cardOperations.getCard());
    }, []);

    function handleChange(event) {
        const input = event.target;
        setCard({ ...card, [input.name]: input.value });
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
                    <CreditCardForm onChange={handleChange} {...card} />
                    {isCardAdded ? (
                        <CreditCard
                            cardNumber={cardData.cardNumber}
                            expiryDate={cardData.expiryDate}
                        />
                    ) : null}
                </div>
                <Button
                    text='Сохранить'
                    fontSize='1.3125rem'
                    // disabled={
                    //     !(
                    //         card.cardNumber &&
                    //         card.expiryDate &&
                    //         card.cardName &&
                    //         card.cvc
                    //     )
                    // }
                />
            </form>
        </div>
    );
};

export default ProfileForm;
