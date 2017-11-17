import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
import {Router, hashHistory, browserHistory,IndexRoute} from 'react-router';

import {combineReducers} from 'redux'
import {Provider} from 'react-redux' // 利用Provider可以使我们的 store 能为下面的组件所用
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
//
import rootData from './services/$redux/rootReducers';
import finalCreateStore from "./services/$redux/rootStore";
import devToolsEnhancer from 'remote-redux-devtools';

import Title from './component/title'
import OrderInfo from './Router/OrderInfo'
import FoodInfo from './Router/FoodInfo'
import OrderPage from './Router/OrderPage'
import 'antd/dist/antd.css';

const reducer = combineReducers({rootData, routing: routerReducer});
const store = finalCreateStore(reducer, devToolsEnhancer({ realtime: true }));
import './style/index.less'
render(
    <Provider store={store}>
        <HashRouter history={hashHistory} store={store}>
            <div className='container'>
                <Route  path='/' component={Title}/>
                <Route  path='/OrderInfo' component={OrderInfo}/>
                <Route  path='/FoodInfo' component={FoodInfo}/>
                <Route  path='/OrderPage' component={OrderPage}/>
            </div>
        </HashRouter>
    </Provider>, document.getElementById("app"));
