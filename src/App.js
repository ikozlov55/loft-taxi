import React from 'react';
import MainPage from './main/MainPage';
import PublicPage from './public/PublicPage';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/modules/auth';

const App = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <BrowserRouter>
            {isLoggedIn ? <MainPage /> : <PublicPage />}
        </BrowserRouter>
    );
};

export default App;
