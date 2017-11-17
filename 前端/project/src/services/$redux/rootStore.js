import ReduxThunk  from 'redux-thunk' // redux-thunk 支持 dispatch function，并且可以异步调用它
import { createLogger } from 'redux-logger' // 利用redux-logger打印日志
import { createStore, applyMiddleware, compose } from 'redux' // 引入redux createStore、中间件及compose
import { composeWithDevTools } from 'remote-redux-devtools';
// 调用日志打印方法
const loggerMiddleware = createLogger()

// 创建一个中间件集合
const middleware = [ReduxThunk,loggerMiddleware]
const composeEnhancers = composeWithDevTools({ realtime: true, port: 8000 });
const finalCreateStore = composeEnhancers(
    applyMiddleware(...middleware)
)(createStore)

export default finalCreateStore


