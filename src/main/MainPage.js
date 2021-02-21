import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import OrderForm from './order/OrderForm';
import ProfileForm from './profile/ProfileForm';
import Header from './header/Header';
import Map from './map/Map';
import PrivateRoute from '../PrivateRoute';
import { routeSelectors } from '../redux/modules/route';
import './MainPage.css';

const MainPage = (props) => {
    const mapRef = useRef(null);
    const coordinates = useSelector(routeSelectors.selectCoordinates);

    useEffect(() => {
        mapRef.current.drawRoute(coordinates);
    }, [coordinates]);

    return (
        <div className='MainPage' data-testid='MainPage:container'>
            <Header />
            <Map ref={mapRef}></Map>
            <Switch>
                <PrivateRoute path='/main/order'>
                    <OrderForm />
                </PrivateRoute>
                <PrivateRoute path='/main/profile'>
                    <ProfileForm />
                </PrivateRoute>
                <PrivateRoute path='/'>
                    <Redirect to='/main/order' />
                </PrivateRoute>
            </Switch>
        </div>
    );
};

export default MainPage;
