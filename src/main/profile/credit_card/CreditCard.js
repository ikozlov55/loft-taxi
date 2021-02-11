import React from 'react';
import './CreditCard.css';
import MasterCardIcon from './mc_logo.svg';
import EMVIcon from './emv_icon.svg';
import LogoIcon from './logo_icon.svg';
import PropTypes from 'prop-types';

const CreditCard = (props) => {
    return (
        <div className='CreditCard'>
            <div className='CreditCard__row'>
                <img src={LogoIcon} alt=''></img>
                <p className='CreditCard__expires'>{props.expiryDate}</p>
            </div>
            <div className='CreditCard__row'>
                <p className='CreditCard__number'>{props.cardNumber}</p>
            </div>
            <div className='CreditCard__row'>
                <img src={EMVIcon} alt=''></img>
                <img src={MasterCardIcon} alt=''></img>
            </div>
        </div>
    );
};

CreditCard.propTypes = {
    expiryDate: PropTypes.string,
    cardNumber: PropTypes.string,
};

export default CreditCard;
