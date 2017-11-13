import React from 'react';
import {render} from 'react-dom';
import {HashRouter, Route} from 'react-router-dom';
// import {Router, Route, hashHistory, IndexRoute} from 'react-router';

import {combineReducers} from 'redux'
import {Provider} from 'react-redux' // 利用Provider可以使我们的 store 能为下面的组件所用
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
//
import rootData from './module/$redux/rootReducers';
import finalCreateStore from "./module/$redux/rootStore";

import Test from './test/test.jsx';
import Test_1 from './test/test_1.jsx';
import Index from './page/component/index.jsx'
import 'antd/dist/antd.css';
//
const reducer = combineReducers({rootData, routing: routerReducer});
const store = finalCreateStore(reducer);
render(
    <Provider store={store}>
        <HashRouter >
            <div>
                <Route path='/' component={Test}/>
                <div>
                    <Route path='/Test' component={Test_1}/>
                </div>
                <Route path='/' component={Index}/>
            </div>
        </HashRouter>
    </Provider>, document.getElementById("app"));
