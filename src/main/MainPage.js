import React, { useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Switch, Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { routeSelectors } from '../redux/modules/route';
import { authOperations } from '../redux/modules/auth';
import OrderForm from './order/OrderForm';
import ProfileForm from './profile/ProfileForm';
import Header from './header/Header';
import Map from './map/Map';
import PrivateRoute from '../PrivateRoute';

import './MainPage.css';

const MainPage = (props) => {
    const mapRef = useRef(null);
    const coordinates = useSelector(routeSelectors.selectCoordinates);
    const dispatch = useDispatch();

    useEffect(() => {
        mapRef.current.drawRoute(coordinates);
    }, [coordinates]);

    function onLogout() {
        dispatch(authOperations.logout());
    }

    return (
        <div className='MainPage' data-testid='MainPage:container'>
            <Header onLogout={onLogout} />
            <Map ref={mapRef} />
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
