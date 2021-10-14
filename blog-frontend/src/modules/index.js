import { all } from 'redux-saga/effects';
import {combineReducers} from 'redux';
import auth, {createSaga} from './auth';
import user from './user';
import loading from './loading';
import post from './post';
import {persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    // localStorage에 저장합니다.
    storage,
    // user reducer만 localstorage에 저장합니다.
    whitelist: ["user"]
    // blacklist -> 그것만 제외합니다.
}


const rootReducer = combineReducers({
    auth,
    loading,
    user,
    post
});

export function* rootSaga(){
    console.log('rootSaga 실행');
    // 여러 사가를 합쳐주기
    yield all([createSaga()]);
}

export default persistReducer(persistConfig, rootReducer);