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
        this.handleButtonClick = this.handleButtonClick.bind(this);
    }

    setButtonClassname(buttonName) {
        return `Header__menu-button ${
            this.state.activeButton === buttonName
                ? 'Header__menu-button--active'
                : ''
        }`;
    }

    handleButtonClick(event) {
        const name = event.target.dataset.route;
        this.setState({ activeButton: name });
        const nameCapitalized = name.charAt(0).toUpperCase() + name.slice(1);
        this.props[`on${nameCapitalized}ButtonClicked`]();
    }

    render() {
        return (
            <header className='Header'>
                <img src={logo} alt='Loft Taxi' className='Header__logo' />
                <ul className='Header__menu'>
                    <li className='Header__menu-item'>
                        <button
                            data-route='order'
                            className={this.setButtonClassname('order')}
                            onClick={this.handleButtonClick}
                        >
                            Карта
                        </button>
                    </li>
                    <li className='Header__menu-item'>
                        <button
                            data-route='profile'
                            className={this.setButtonClassname('profile')}
                            onClick={this.handleButtonClick}
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
