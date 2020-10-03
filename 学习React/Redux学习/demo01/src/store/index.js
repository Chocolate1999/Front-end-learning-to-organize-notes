import { createStore, applyMiddleware, compose } from 'redux'; //  引入createStore方法
import reducer from './reducer';
import thunk from 'redux-thunk';

// 利用compose创造一个增强函数，就相当于建立了一个链式函数
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore( reducer, enhancer) // 创建数据存储仓库
export default store   //暴露出去