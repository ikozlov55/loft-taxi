import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectAddresses } from '../../../redux/modules/selectors';
import { getAddressList } from '../../../redux/modules/addressList';
import Button from '../../../common/button/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import './AddressSelect.css';
import addressFromAdornment from './address_from_adornment.svg';
import addressToAdornment from './address_to_adornment.svg';
import cross from './cross.svg';

const AddressSelect = (props) => {
    const addressList = useSelector(selectAddresses);
    const dispatch = useDispatch();
    const [addressesFrom, setAddressesFrom] = useState([]);
    const [addressesTo, setAddressesTo] = useState([]);
    const [selectedFrom, setSelectedFrom] = useState('');
    const [selectedTo, setSelectedTo] = useState('');
    const inputToSetters = {
        'select-from': [setSelectedFrom, setAddressesTo],
        'select-to': [setSelectedTo, setAddressesFrom],
    };

    useEffect(() => {
        dispatch(getAddressList());
    }, []);

    function handleChange(event) {
        const target = event.target;
        const [setValue, setList] = inputToSetters[target.name];
        setValue(target.value);
        setList(addressList.filter((address) => address !== target.value));
    }

    function handleCrossClick(event) {
        const target = event.target;
        const [setValue, setList] = inputToSetters[target.dataset.select];
        setValue('');
        setList(addressList);
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(selectedFrom, selectedTo);
    }

    return (
        <form className='AddressSelect' onSubmit={handleSubmit}>
            <div className='AddressSelect__input-container'>
                <InputLabel id='select-from-label'>Откуда</InputLabel>
                <Select
                    className='AddressSelect__select'
                    name='select-from'
                    labelId='select-from-label'
                    onChange={handleChange}
                    value={selectedFrom}
                    startAdornment={
                        <InputAdornment position='start'>
                            <img src={addressFromAdornment} alt=''></img>
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position='end'>
                            <img
                                className='AddressSelect__select-cross'
                                src={cross}
                                alt=''
                                onClick={handleCrossClick}
                                data-select='select-from'
                            ></img>
                        </InputAdornment>
                    }
                >
                    {addressList.map((address) => (
                        <MenuItem key={address} value={address}>
                            {address}
                        </MenuItem>
                    ))}
                </Select>
                <InputLabel id='select-to-label'>Куда</InputLabel>
                <Select
                    className='AddressSelect__select'
                    name='select-to'
                    labelId='select-to-label'
                    onChange={handleChange}
                    value={selectedTo}
                    startAdornment={
                        <InputAdornment position='start'>
                            <img src={addressToAdornment} alt=''></img>
                        </InputAdornment>
                    }
                    endAdornment={
                        <InputAdornment position='end'>
                            <img
                                className='AddressSelect__select-cross'
                                src={cross}
                                alt=''
                                onClick={handleCrossClick}
                                data-select='select-to'
                            ></img>
                        </InputAdornment>
                    }
                >
                    {addressList.map((address) => (
                        <MenuItem key={address} value={address}>
                            {address}
                        </MenuItem>
                    ))}
                </Select>
            </div>

            <Button text='Заказать' disabled={!(selectedFrom && selectedTo)} />
        </form>
    );
};

export default AddressSelect;
