import React from 'react';
import MainPage from './main/MainPage';
import PublicPage from './public/PublicPage';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from './redux/modules/selectors';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#828282',
        },
    },
});

const App = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                {isLoggedIn ? <MainPage /> : <PublicPage />}
            </ThemeProvider>
        </BrowserRouter>
    );
};

export default App;
