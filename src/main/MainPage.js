import React from 'react';
import OrderForm from './order/OrderForm';
import ProfileForm from './profile/ProfileForm';
import Header from './header/Header';
import Map from './map/Map';
import './MainPage.css';

class MapPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: 'order',
        };
        this.mapRef = React.createRef();
        this.renderForm = this.renderForm.bind(this);
        this.onHeaderButtonClick = this.onHeaderButtonClick.bind(this);
    }

    componentDidMount() {
        this.mapRef.current.onClick = (point) => {
            this.mapRef.current.addMarker(point);
        };
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
            <div className='MainPage' data-testid='MainPage:container'>
                <Header
                    onButtonClick={this.onHeaderButtonClick}
                    activeButton={this.state.form}
                ></Header>
                {this.renderForm(this.state.form)}
                <Map ref={this.mapRef}></Map>
            </div>
        );
    }
}

export default MapPage;
