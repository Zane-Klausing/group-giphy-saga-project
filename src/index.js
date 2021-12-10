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

// function* searchGif (action){
//     try{
//         const response = yield axios({
//             method: 'POST',
//             url: '/api/search',
//             data: {newSearch: action.payload}
//         }).then( axios({
//             method: 'GET',
//             url: '/api/search'
//         })).then( put({
//             type: 'SET_GIF',
//             payload: response.data
//         }));
//     }
//     catch(error){
//         console.error(error);
//     }
// }

function* searchGif (action){
    try{
        const response = yield axios({
            method: 'POST',
            url: '/api/search',
            data: {newSearch: action.payload}
        })
        yield put({
            type: 'FETCH_GIF'
        })
    }
    catch(error){
        console.error(error);
    }
}

function* fetchGif(action){
    try{
    const response = yield axios({
        method: 'GET',
        url: '/api/search'
    })
      // b. Update Reducer
    yield put({
        type: 'SET_GIF',
        payload: response.data
    });
    } catch(err) {
    console.log(err);
    }
}

// function getFavorites () {
//      console.log('in getFavorites')
//  axios try {
//      let response = yield axios.get('/api/favorite')
//  yield put ({
//          type: SET_FAVORITES
//          payload: response.data
//      });
//  }
//      catch (error) {
//      console.log ('getFavorites error)
//  }
//
// }



// function addFavorite(action) {
//  console.log('testing addFavorite function')
// post favorite to database
//  try {
//      yield axios.post(`/api/favorite/`, action.payload) // when a user clicks the favorite btn - this is the url
//  yield put ({
//      type: 'FETCH_FAVORITES'
//     })
//        } 
//          catch (error) {
//      console.log ('addFavorites error', error);
//      }
//  }


const sagaMiddleware = createSagaMiddleware();

// Reducers
const gifReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_GIF':
            return action.payload;
        default:
            return state;
    }
}

// const favoriteReducer = (state = [], action) => {
//     switch (action.type) {
//     case 'SET_FAVORITES':
//         return action.payload;
//     default:
//         return state;
// }   
//


// STORE
const storeInstance = createStore(
    combineReducers({
        gifReducer,
//      favoriteReducer        
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

function* rootSaga() {
    yield takeEvery ('SEARCH_GIF', searchGif);
    yield takeEvery ('FETCH_GIF', fetchGif);
//  yield takeEvery ('FETCH_FAVORITES', getFavorites);
}

sagaMiddleware.run(rootSaga);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
