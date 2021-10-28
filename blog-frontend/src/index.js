import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import { persistStore } from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {CookiesProvider} from 'react-cookie';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom';
import rootReducer, {rootSaga} from './modules';
import createSagaMiddleware from 'redux-saga';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { checkuser } from './modules/auth';

const customHistory = createBrowserHistory({forceRefresh: true});
const sagaMiddleware = createSagaMiddleware({
  context: {
    history: customHistory
  }
});

const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      ReduxThunk.withExtraArgument({history: customHistory}),
      sagaMiddleware)),
);
const persistor = persistStore(store);

// function loadUser(){
//   try {
//     const user = localStorage.getItem('user');
//     if(!user) return; // 로그인 상태가 아니라면 아무것도 안함
//     store.dispatch(tempSetUser(JSON.parse(user)));
//     store.dispatch(checkuser(true));
//   } catch(e){
//     console.log('localStorage is not working');
//   }
// }

sagaMiddleware.run(rootSaga);
// loadUser();


ReactDOM.render(
  <Router history={customHistory}>
    <CookiesProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </CookiesProvider>,
   </Router>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
