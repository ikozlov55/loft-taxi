import React from 'react';
import PropTypes from 'prop-types';
import './TariffCard.css';

const TariffCard = (props) => {
    return (
        <li
            className={`TariffCard ${
                props.isSelected ? 'TariffCard--active' : ''
            }`}
            data-id={props.id}
            data-testid='TariffCard'
            onClick={props.onClick}
        >
            <p className='TariffCard__name'>{props.name}</p>
            <p className='TariffCard__price-header'>Стоимость</p>
            <p className='TariffCard__price'>{props.price} ₽</p>
            <img
                className='TariffCard__logo'
                src={props.logo}
                alt={props.name}
            />
        </li>
    );
};

TariffCard.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    logo: PropTypes.string,
    isSelected: PropTypes.bool,
    onClick: PropTypes.func,
};

export default TariffCard;
