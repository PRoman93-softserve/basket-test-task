import React from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";
import {BASKET_PAGE, ERROR_PAGE, MAIN_PAGE} from "../accets/constants";
import {BasketPageContainer} from "./basketPage/basketPageContainer";
import {ErrorPage} from "./errorPage/errorPage";
import {MainPageContainer} from './mainPage/mainPageContainer';

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path={'/'} component={MainPageContainer}/>
                <Route path={MAIN_PAGE} component={MainPageContainer}/>
                <Route path={BASKET_PAGE} component={BasketPageContainer}/>
                <Route path={ERROR_PAGE} component={ErrorPage}/>
            </Switch>
        </div>
    );
}

export default App;
