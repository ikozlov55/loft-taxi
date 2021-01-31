import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/modules/auth';

const PrivateRoute = (props) => {
    const { children, ...restProps } = props;
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <Route
            {...restProps}
            render={() => {
                if (isLoggedIn) {
                    return children;
                } else {
                    return <Redirect to='/registration' />;
                }
            }}
        />
    );
};

export default PrivateRoute;
