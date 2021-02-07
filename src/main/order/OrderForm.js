import React from 'react';
import { useSelector } from 'react-redux';
import { selectIsCardAdded } from '../../redux/modules/selectors';
import AddressSelect from './address_select/AddressSelect';
import './OrderForm.css';
import OrderFormContent from './order_form_content/OrderFormContent';

const OrderForm = (props) => {
    const isCardAdded = useSelector(selectIsCardAdded);

    function renderFormConten() {
        if (isCardAdded) {
            return <AddressSelect />;
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

    return <div className='OrderForm'>{renderFormConten()}</div>;
};

export default OrderForm;
