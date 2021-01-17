import React from 'react';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import './RegistrationForm.css';

class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.onSubmit(...Object.values(this.state));
    }

    handleChange(event) {
        const target = event.target;
        this.setState({ [target.id]: target.value });
        console.log(this.state);
    }

    render() {
        return (
            <div className='RegistrationForm form-container '>
                <h2 className='form__header'>Регистрация</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type='text'
                        id='email'
                        placeholder='mail@mail.ru'
                        label='Email*'
                        onChange={this.handleChange}
                    ></Input>
                    <Input
                        type='text'
                        id='name'
                        placeholder='Петр Александрович'
                        label='Как вас зовут?*'
                        onChange={this.handleChange}
                    ></Input>
                    <Input
                        type='password'
                        id='password'
                        placeholder='*************'
                        label='Придумайте пароль*'
                        onChange={this.handleChange}
                    ></Input>
                    <Button text='Зарегистрироваться'></Button>
                </form>
                <div className='form__text-block'>
                    Уже зарегистрированны?
                    <a className='form__link' onClick={this.props.onLoginClick}>
                        Войти
                    </a>
                </div>
            </div>
        );
    }
}

export default RegistrationForm;
