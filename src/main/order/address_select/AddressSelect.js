import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import PropTypes from 'prop-types';
import cross from './cross.svg';
import './AddressSelect.css';

function renderStartAdornment(props) {
    if (props.icon) {
        return (
            <InputAdornment position='start'>
                <img
                    src={props.icon}
                    alt=''
                    data-testid='AddressSelect:start-img'
                ></img>
            </InputAdornment>
        );
    } else {
        return null;
    }
}

function renderEndAdornment(props) {
    if (props.onCrossClick) {
        return (
            <InputAdornment position='end'>
                <img
                    className='AddressSelect__select-cross'
                    src={cross}
                    alt=''
                    onClick={props.onCrossClick}
                    data-select={props.id}
                    data-testid='AddressSelect:end-img'
                ></img>
            </InputAdornment>
        );
    } else {
        return null;
    }
}

function renderMenuItems(props) {
    if (props.addressList) {
        return props.addressList.map((address) => (
            <MenuItem key={address} value={address}>
                {address}
            </MenuItem>
        ));
    } else {
        return null;
    }
}

const AddressSelect = (props) => {
    return (
        <>
            <InputLabel id={props.id}>{props.labelText}</InputLabel>
            <Select
                className='AddressSelect__select'
                name={props.id}
                labelId={props.id}
                onChange={props.onChange}
                value={props.value}
                startAdornment={renderStartAdornment(props)}
                endAdornment={renderEndAdornment(props)}
                data-testid='AddressSelect:Select'
            >
                {renderMenuItems(props)}
            </Select>
        </>
    );
};

AddressSelect.propTypes = {
    id: PropTypes.string.isRequired,
    labelText: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    icon: PropTypes.string,
    onCrossClick: PropTypes.func,
    addressList: PropTypes.arrayOf(PropTypes.string),
};

export default AddressSelect;
