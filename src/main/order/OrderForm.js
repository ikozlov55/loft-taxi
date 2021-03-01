import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { cardOperations, cardSelectors } from '../../redux/modules/card';
import { routeOperations } from '../../redux/modules/route';
import { orderOperations, orderSelectors } from '../../redux/modules/order';
import RouteSelector from './route_selector/RouteSelector';
import TariffSelector from './tariff_selector/TariffSelector';
import OrderFormContent from './order_form_content/OrderFormContent';
import Button from '../../common/button/Button';
import './OrderForm.css';
import tariffStandartLogo from './tariff_standart.png';
import tariffPremiumLogo from './tariff_premium.png';
import tariffBusinessLogo from './tariff_business.png';

const tariffs = [
    {
        id: 'standart',
        name: 'Стандарт',
        price: 150,
        logo: tariffStandartLogo,
    },
    {
        id: 'premium',
        name: 'Премиум',
        price: 250,
        logo: tariffPremiumLogo,
    },
    {
        id: 'business',
        name: 'Бизнес',
        price: 300,
        logo: tariffBusinessLogo,
    },
];

const OrderForm = (props) => {
    const [tariffId, setTariffId] = useState(tariffs[0].id);
    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const isCardAdded = useSelector(cardSelectors.selectIsCardAdded);
    const isOrderSent = useSelector(orderSelectors.selectIsOrderSent);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(cardOperations.getCard());
    }, []);

    function handleCardClick(event) {
        setTariffId(event.currentTarget.dataset.id);
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(routeOperations.getRoute(selectedFrom, selectedTo));
        dispatch(orderOperations.sendOrder(selectedFrom, selectedTo, tariffId));
    }

    function handleNewOrderButtonClick() {
        dispatch(orderOperations.deleteOrder());
    }

    function renderFormContent() {
        if (isOrderSent) {
            return (
                <OrderFormContent
                    title='Заказ размещен'
                    text='Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.'
                    buttonText='Сделать новый заказ'
                    onButtonClick={handleNewOrderButtonClick}
                />
            );
        } else if (isCardAdded) {
            return (
                <>
                    <RouteSelector
                        selectedFrom={selectedFrom}
                        selectedTo={selectedTo}
                        setSelectedFrom={setSelectedFrom}
                        setSelectedTo={setSelectedTo}
                    />
                    <TariffSelector
                        tariffs={tariffs}
                        onCardClick={handleCardClick}
                        selectedTariffId={tariffId}
                    />
                    <Button
                        text='Заказать'
                        disabled={!(selectedFrom && selectedTo)}
                    />
                </>
            );
        } else {
            return (
                <OrderFormContent
                    title='Заполните платежные данные'
                    text='Укажите информацию о банковской карте, чтобы сделать заказ.'
                    linkTo='/main/profile'
                    buttonText='Перейти в профиль'
                />
            );
        }
    }

    return (
        <form className='OrderForm' onSubmit={handleSubmit}>
            {renderFormContent()}
        </form>
    );
};

export default OrderForm;
