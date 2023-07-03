

import {createStore, applyMiddleware,compose} from 'redux';
import createSagaMiddleware from 'redux-saga'
//rootReducer esta importando todos os reducers para que o createStore permita o acesso a eles por toda a aplicacao
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';
const sagaMonitor=process.env.NODE_ENV==="development" ? console.tron.createSagaMonitor():null;
const sagaMiddleware=createSagaMiddleware({sagaMonitor,})
const enhancer=process.env.NODE_ENV==='development'?
compose(console.tron.createEnhancer(),applyMiddleware(sagaMiddleware))
:applyMiddleware(sagaMiddleware);
//createStore permite que toda a aplicação tenha acesso aos reducers
const store=createStore(rootReducer, enhancer);
sagaMiddleware.run(rootSaga);


export default store;