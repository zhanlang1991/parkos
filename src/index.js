import React from 'react';
import {render} from 'react-dom';
import { Router, Route, IndexRoute} from 'react-router';
import { Provider } from 'react-redux';
import 'es5-shim';
import 'es5-shim/es5-sham';
import 'console-polyfill';
import 'fetch-ie8';
import 'babel-polyfill';

import App from './components/App';
import Wrapper from './components/headerleftBar/Wrapper';
import MyOwnPage from './components/mainPage/MyOwnPage';
import ParkingLaundry from './components/orderForm/trading/ParkingLaundry';
import ParkingQuery from './components/orderForm/trading/ParkingQuery';
import SystemPage from './components/system/SystemPage';
import PasswordPage from './components/system/PasswordPage';
import FlowAnalysis from './components/dataAnalysis/FlowAnalysis';
import IncomeAnalysis from './components/dataAnalysis/IncomeAnalysis';
import Monitoring from './components/monitoring/Monitoring';
import OperationManagement from './components/propertyManagement/OperationManagement';
import PaySearch from './components/memberManagement/PaySearch';
import MemberCard from './components/memberCard/MemberCard';
import CheckingIn from './components/headerleftBar/CheckingIn';
import LoginPage from './components/login/LoginPage';

import store, { history } from './stores/store';
import 'bootstrap/dist/js/bootstrap.min.js';
import './js/FlyingPark.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/menuhead.css';
import './styles/base.css';
import './styles/style.css';

const router = (
    <Provider store={store}>
        <Router history={history}>
            <Route component={App}>
                <Route path='/' component={LoginPage}/>
                <Route path="/home" component={Wrapper}>
                    <IndexRoute component={MyOwnPage}/>
                    <Route path="/parkingLaundry" component={ParkingLaundry}/>
                    <Route path="/parkingQuery" component={ParkingQuery}/>
                    <Route path="/SystemPage" component={SystemPage}/>
                    <Route path="/PasswordPage" component={PasswordPage}/>
                    <Route path="/OperationManagement" component={OperationManagement}/>
                    <Route path="/PaySearch" component={PaySearch}/>
                    <Route path="/MemberCard" component={MemberCard}/>
                    <Route path="/flowAnalysis" component={FlowAnalysis}/>
                    <Route path="/incomeAnalysis" component={IncomeAnalysis}/>
                    <Route path="/CheckingIn" component={CheckingIn}/>
                </Route>
                <Route path="/monitor" component={Monitoring}/>
            </Route>
        </Router>
    </Provider>
)

render(router, document.getElementById('root'));
