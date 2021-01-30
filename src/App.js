import React from 'react';
import MainPage from './main/MainPage';
import { withAuth } from './AuthContext';
import PublicPage from './public/PublicPage';
import PropTypes from 'prop-types';

const App = (props) => {
    if (props.isLoggedIn) {
        return <MainPage />;
    } else {
        return <PublicPage />;
    }
};

App.propTypes = {
    isLoggedIn: PropTypes.bool,
};

export default withAuth(App);
