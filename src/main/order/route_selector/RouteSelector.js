import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { routeOperations } from '../../../redux/modules/route';
import {
    addressListOperations,
    addressListSelectors,
} from '../../../redux/modules/addressList';
import Button from '../../../common/button/Button';
import AddressSelect from '../address_select/AddressSelect';
import './RouteSelector.css';
import addressFromIcon from './address_from_icon.svg';
import addressToIcon from './address_to_icon.svg';

const RouteSelector = (props) => {
    const addressList = useSelector(addressListSelectors.selectAddresses);
    const dispatch = useDispatch();
    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const inputToSetter = {
        'address-from': setSelectedFrom,
        'address-to': setSelectedTo,
    };

    useEffect(() => {
        dispatch(addressListOperations.getAddressList());
    }, []);

    function handleChange(event) {
        const target = event.target;
        inputToSetter[target.name](target.value);
    }

    function handleCrossClick(event) {
        const target = event.target;
        inputToSetter[target.dataset.select]('');
        dispatch(routeOperations.clearRoute());
    }

    function handleSubmit(event) {
        event.preventDefault();
        dispatch(routeOperations.getRoute(selectedFrom, selectedTo));
    }

    return (
        <form className='RouteSelector' onSubmit={handleSubmit}>
            <div className='RouteSelector__input-container'>
                <AddressSelect
                    id='address-from'
                    labelText='Откуда'
                    icon={addressFromIcon}
                    onCrossClick={handleCrossClick}
                    value={selectedFrom}
                    onChange={handleChange}
                    addressList={addressList.filter(
                        (address) => address !== selectedTo
                    )}
                />
                <AddressSelect
                    id='address-to'
                    labelText='Куда'
                    icon={addressToIcon}
                    onCrossClick={handleCrossClick}
                    value={selectedTo}
                    onChange={handleChange}
                    addressList={addressList.filter(
                        (address) => address !== selectedFrom
                    )}
                />
            </div>
            <Button text='Заказать' disabled={!(selectedFrom && selectedTo)} />
        </form>
    );
};

export default RouteSelector;
