import React from 'react';
import OrderForm from './order/OrderForm';
import ProfileForm from './profile/ProfileForm';
import Header from './header/Header';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'order',
        };
        this.renderForm = this.renderForm.bind(this);
        this.onHeaderButtonClick = this.onHeaderButtonClick.bind(this);
    }

    renderForm(type) {
        switch (type) {
            case 'order':
                return <OrderForm></OrderForm>;
            case 'profile':
                return <ProfileForm></ProfileForm>;
            default:
                return <OrderForm></OrderForm>;
        }
    }

    onHeaderButtonClick(buttonName) {
        this.setState({ form: buttonName });
    }

    render() {
        return (
            <div>
                <Header
                    onButtonClick={this.onHeaderButtonClick}
                    onLogutButtonClicked={this.props.onLogoutClick}
                ></Header>
                {this.renderForm(this.state.form)}
            </div>
        );
    }
}

export default MapPage;
