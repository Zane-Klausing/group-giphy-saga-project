import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App/App.js';
// import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import {put, takeEvery} from 'redux-saga/effects';
import logger from 'redux-logger';
import axios from 'axios'
import createSagaMiddleware from 'redux-saga';

function* fetchGif (action){
    try{
        const response = yield axios({
            method: 'GET',
            url: '/api/search'
        })
        yield put({
            type: 'SET_GIF',
            payload: response.data
        });
    }
    catch(error){
        console.error(error);
    }
}

// Reducers
const sagaMiddleware = createSagaMiddleware();

const gifReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIF':
            return action.payload;
        default:
            return state;
    }
}

// STORE
const storeInstance = createStore(
    combineReducers({
        gifReducer,
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

function* rootSaga() {
    yield takeEvery ('FETCH_GIF', fetchGif);
    // yield takeEvery ('ADD_FRUIT', newFruit);
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
