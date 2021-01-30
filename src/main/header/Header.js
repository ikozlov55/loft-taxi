import React from 'react';
import PropTypes from 'prop-types';
import { withAuth } from '../../AuthContext';
import './Header.css';
import logo from './header_logo.png';

const Header = (props) => {
    function setButtonClassname(button) {
        return `Header__menu-button ${
            props.activeButton === button ? 'Header__menu-button--active' : ''
        }`;
    }

    return (
        <header className='Header'>
            <img src={logo} alt='Loft Taxi' className='Header__logo' />
            <ul className='Header__menu'>
                <li className='Header__menu-item'>
                    <button
                        className={setButtonClassname('order')}
                        onClick={() => props.onButtonClick('order')}
                        data-testid='Header:order-button'
                    >
                        Карта
                    </button>
                </li>
                <li className='Header__menu-item'>
                    <button
                        className={setButtonClassname('profile')}
                        onClick={() => props.onButtonClick('profile')}
                        data-testid='Header:profile-button'
                    >
                        Профиль
                    </button>
                </li>
                <li className='Header__menu-item'>
                    <button
                        className='Header__menu-button'
                        onClick={props.logout}
                        data-testid='Header:logout-button'
                    >
                        Выйти
                    </button>
                    )
                </li>
            </ul>
        </header>
    );
};

Header.propTypes = {
    activeButton: PropTypes.string,
    onButtonClick: PropTypes.func,
    logout: PropTypes.func,
};

export default withAuth(Header);
