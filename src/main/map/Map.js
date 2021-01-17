import React from 'react';
import OrderForm from '../order/OrderForm';
import ProfileForm from '../profile/ProfileForm';
import Header from './header/Header';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'order',
        };
        this.renderForm = this.renderForm.bind(this);
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

    render() {
        return (
            <div>
                <Header
                    onOrderButtonClicked={() => {
                        this.setState({ form: 'order' });
                    }}
                    onProfileButtonClicked={() => {
                        this.setState({ form: 'profile' });
                    }}
                    onLogutButtonClicked={this.props.onLogoutClick}
                ></Header>
                {this.renderForm(this.state.form)}
            </div>
        );
    }
}

export default Map;
