import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../AuthContext';
import './Header.css';
import logo from './header_logo.png';

const Header = (props) => {
    const context = useContext(AuthContext);

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
                    >
                        Карта
                    </button>
                </li>
                <li className='Header__menu-item'>
                    <button
                        className={setButtonClassname('profile')}
                        onClick={() => props.onButtonClick('profile')}
                    >
                        Профиль
                    </button>
                </li>
                <li className='Header__menu-item'>
                    <button
                        className='Header__menu-button'
                        onClick={context.logout}
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
};

export default Header;
