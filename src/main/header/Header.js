import React from 'react';
import './Header.css';
import logo from './logo.png';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeButton: 'order',
        };
        this.setButtonClassname = this.setButtonClassname.bind(this);
    }

    setButtonClassname(buttonName) {
        return `Header__menu-button ${
            this.state.activeButton === buttonName
                ? 'Header__menu-button--active'
                : ''
        }`;
    }

    render() {
        return (
            <header className='Header'>
                <img src={logo} alt='Loft Taxi' className='Header__logo' />
                <ul className='Header__menu'>
                    <li className='Header__menu-item'>
                        <button
                            className={this.setButtonClassname('order')}
                            onClick={() => this.props.onButtonClick('order')}
                        >
                            Карта
                        </button>
                    </li>
                    <li className='Header__menu-item'>
                        <button
                            className={this.setButtonClassname('profile')}
                            onClick={() => this.props.onButtonClick('profile')}
                        >
                            Профиль
                        </button>
                    </li>
                    <li className='Header__menu-item'>
                        <button
                            className='Header__menu-button'
                            onClick={this.props.onLogutButtonClicked}
                        >
                            Выйти
                        </button>
                    </li>
                </ul>
            </header>
        );
    }
}

export default Header;
