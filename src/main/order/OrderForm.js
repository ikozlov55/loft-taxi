import React from 'react';
import './OrderForm.css';

class OrderForm extends React.Component {
    render() {
        return (
            <div className='OrderForm'>
                <h2 data-testid='OrderForm:header'>Заказ</h2>
            </div>
        );
    }
}

export default OrderForm;
