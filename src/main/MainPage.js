import React from 'react';
import OrderForm from './order/OrderForm';
import ProfileForm from './profile/ProfileForm';
import Header from './header/Header';
import Map from './map/Map';
import { Switch, Redirect } from 'react-router-dom';
import PrivateRoute from '../PrivateRoute';
import './MainPage.css';

class MainPage extends React.Component {
    constructor(props) {
        super(props);
        this.mapRef = React.createRef();
    }

    componentDidMount() {
        this.mapRef.current.onClick = (point) => {
            this.mapRef.current.addMarker(point);
        };
    }

    render() {
        return (
            <div className='MainPage' data-testid='MainPage:container'>
                <Header />
                <Map ref={this.mapRef}></Map>
                <Switch>
                    <PrivateRoute path='/main/order'>
                        <OrderForm />
                    </PrivateRoute>
                    <PrivateRoute path='/main/profile'>
                        <ProfileForm />
                    </PrivateRoute>
                    <PrivateRoute path='/'>
                        <Redirect to='/main/profile' />
                    </PrivateRoute>
                </Switch>
            </div>
        );
    }
}

export default MainPage;
