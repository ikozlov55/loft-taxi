import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { routeOperations } from '../../../redux/modules/route';
import {
    addressListOperations,
    addressListSelectors,
} from '../../../redux/modules/addressList';
import AddressSelect from '../address_select/AddressSelect';
import PropTypes from 'prop-types';
import './RouteSelector.css';
import addressFromIcon from './address_from_icon.svg';
import addressToIcon from './address_to_icon.svg';

const RouteSelector = (props) => {
    const addressList = useSelector(addressListSelectors.selectAddresses) || [];
    const dispatch = useDispatch();
    const inputToSetter = {
        'address-from': props.setSelectedFrom,
        'address-to': props.setSelectedTo,
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

    return (
        <div className='RouteSelector' data-testid='RouteSelector'>
            <AddressSelect
                id='address-from'
                labelText='Откуда'
                icon={addressFromIcon}
                onCrossClick={handleCrossClick}
                value={props.selectedFrom}
                onChange={handleChange}
                addressList={addressList.filter(
                    (address) => address !== props.selectedTo
                )}
            />
            <AddressSelect
                id='address-to'
                labelText='Куда'
                icon={addressToIcon}
                onCrossClick={handleCrossClick}
                value={props.selectedTo}
                onChange={handleChange}
                addressList={addressList.filter(
                    (address) => address !== props.selectedFrom
                )}
            />
        </div>
    );
};

RouteSelector.propTypes = {
    selectedFrom: PropTypes.string,
    selectedTo: PropTypes.string,
    setSelectedFrom: PropTypes.func.isRequired,
    setSelectedTo: PropTypes.func.isRequired,
};

export default RouteSelector;
