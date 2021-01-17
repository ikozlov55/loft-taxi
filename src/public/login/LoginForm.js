import React from 'react';
import Input from '../../common/input/Input';
import Button from '../../common/button/Button';
import './LoginForm.css';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
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
            <div className='LoginForm form-container '>
                <h2 className='form__header'>Войти</h2>
                <form onSubmit={this.handleSubmit}>
                    <Input
                        type='email'
                        id='email'
                        placeholder='mail@mail.ru'
                        label='Email'
                        onChange={this.handleChange}
                    ></Input>
                    <Input
                        type='password'
                        id='password'
                        placeholder='*************'
                        label='Пароль'
                        onChange={this.handleChange}
                    ></Input>
                    <a className='form__link--gray'>Забыли пароль?</a>
                    <Button text='Войти'></Button>
                </form>
                <div className='form__text-block'>
                    Новый пользователь?
                    <a
                        className='form__link'
                        onClick={this.props.onRegisterClick}
                    >
                        Регистрация
                    </a>
                </div>
            </div>
        );
    }
}

export default LoginForm;
