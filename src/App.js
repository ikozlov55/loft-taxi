import React from 'react';
import MainPage from './main/MainPage';
import PublicPage from './public/PublicPage';
import { Router } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from './redux/modules/auth';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import history from './history';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#828282',
        },
    },
});

const App = () => {
    const isLoggedIn = useSelector(authSelectors.selectIsLoggedIn);

    return (
        <Router history={history}>
            <ThemeProvider theme={theme}>
                {isLoggedIn ? <MainPage /> : <PublicPage />}
            </ThemeProvider>
        </Router>
    );
};

export default App;
