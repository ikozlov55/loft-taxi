import React from 'react';
import { useSelector } from 'react-redux';
import { cardSelectors } from '../../redux/modules/card';
import RouteSelector from './route_selector/RouteSelector';
import './OrderForm.css';
import OrderFormContent from './order_form_content/OrderFormContent';

const OrderForm = (props) => {
    const isCardAdded = useSelector(cardSelectors.selectIsCardAdded);

    function renderFormContent() {
        if (isCardAdded) {
            return <RouteSelector />;
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

    return <div className='OrderForm'>{renderFormContent()}</div>;
};

export default OrderForm;
