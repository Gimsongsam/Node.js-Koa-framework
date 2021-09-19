import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootReducer, {rootSaga} from './modules';
import {tempSetUser, check} from './modules/user';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
  );

function loadUser(){
  try{
    const user = localStorage.getItem('user');
    if(!user) return; // 로그인 상태가 아니라면 아무것도 안 함
    store.dispatch(tempSetUser(JSON.parse(user)));
    // CHECK 액션이 디스패치되면 사가를 통해 /api/check API를 호출
    store.dispatch(check());
  } catch(e){
    console.log('localStorage is not working');
  }
}

sagaMiddleware.run(rootSaga);
// 먼저 호출하면 rootSaga가 실행되기 전에 먼저 호출되기 때문에 saga에서 제대로 이를 처리하지 않는다.
loadUser()

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
