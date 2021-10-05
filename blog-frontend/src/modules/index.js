import { all } from 'redux-saga/effects';
import {combineReducers} from 'redux';
import auth, {createSaga} from './auth';

const rootReducer = combineReducers({
    auth,
});

export function* rootSaga(){
    console.log('rootSaga 실행');
    // 여러 사가를 합쳐주기
    yield all([createSaga()]);
}

export default rootReducer;