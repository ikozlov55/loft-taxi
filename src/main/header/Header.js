import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import './Header.css';
import logo from './header_logo.png';

const Header = (props) => {
    return (
        <header className='Header'>
            <img src={logo} alt='Loft Taxi' className='Header__logo' />
            <ul className='Header__menu'>
                <li className='Header__menu-item'>
                    <NavLink
                        to='/main/order'
                        className='Header__menu-button'
                        activeClassName='Header__menu-button--active'
                        data-testid='Header:order-button'
                    >
                        Карта
                    </NavLink>
                </li>
                <li className='Header__menu-item'>
                    <NavLink
                        to='/main/profile'
                        className='Header__menu-button'
                        activeClassName='Header__menu-button--active'
                        data-testid='Header:profile-button'
                    >
                        Профиль
                    </NavLink>
                </li>
                <li className='Header__menu-item'>
                    <NavLink
                        to='/'
                        className='Header__menu-button'
                        onClick={props.onLogout}
                        data-testid='Header:logout-button'
                    >
                        Выйти
                    </NavLink>
                </li>
            </ul>
        </header>
    );
};

Header.propTypes = {
    onLogout: PropTypes.func,
};

export default Header;
