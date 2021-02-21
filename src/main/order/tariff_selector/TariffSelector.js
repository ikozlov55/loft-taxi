import React from 'react';
import TariffCard from './TariffCard';
import PropTypes from 'prop-types';
import './TariffSelector.css';

const TariffSelector = (props) => {
    return (
        <ul className='TariffSelector'>
            {props.tariffs.map((tariff) => (
                <TariffCard
                    id={tariff.id}
                    key={tariff.id}
                    name={tariff.name}
                    price={tariff.price}
                    logo={tariff.logo}
                    isSelected={tariff.id === props.selectedTariffId}
                    onClick={props.handleCardClick}
                />
            ))}
        </ul>
    );
};

TariffCard.propTypes = {
    tariffs: PropTypes.array,
    selectedTariffId: PropTypes.string,
    handleCardClick: PropTypes.func,
};

export default TariffSelector;
