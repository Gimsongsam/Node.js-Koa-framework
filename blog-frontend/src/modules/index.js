import { all } from 'redux-saga/effects';
import {combineReducers} from 'redux';
import auth, { requestSaga } from './auth';

const rootReducer = combineReducers({
    auth,
});

export function* rootSaga(){
    // 여러 사가를 합쳐주기
    yield all([requestSaga()])
}

export default rootReducer;