import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api';
import {takeEvery, takeLatest, getContext} from 'redux-saga/effects'
import produce from 'immer';
import requestSaga from '../lib/requestSaga';
// import { createBrowserHistory } from 'history';

//액션 타입 설정하기
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE = 'auth/INITIALIZE';

const GOTO_HOME = 'auth/GOTO_HOME';

// 액션 생성자 함수
export const changeField = createAction(
    CHANGE_FIELD, 
    ({form, value, key}) => ({
        form,
        key,
        value,
    }),
);

export const initialize = createAction(INITIALIZE);
export const createlogin = createAction(LOGIN, form => form);
export const createregister = createAction(REGISTER, form => form);

export const creategotohome = createAction(GOTO_HOME);

// 사가 함수
const loginSaga = requestSaga(LOGIN, api.requestLogin);
const registerSaga = requestSaga(REGISTER, api.requestRegister);

// const customHistory = createBrowserHistory({ forceRefresh: true });
// const customHistory = createBrowserHistory();
function* gotohomeSaga(action){
    console.log('gotohome');
    const history = yield getContext('history');
    // yield customHistory.push('/');
    history.push(`/@:${action.payload}`);
}

export function* createSaga(){
    console.log('createSaga 실행'); 
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(REGISTER, registerSaga);
    yield takeEvery(GOTO_HOME, gotohomeSaga);
}


// 초기값 설정
const initialState = {
    register: {
        username: '',
        password: '',
        password_confirm: '',
    },
    login: {
        username: '',
        password: '',
    }
}


// 액션 디스패치
const auth = handleActions(
    {
        [CHANGE_FIELD]: (state, {payload: {form, value, key}}) => {
            return(
                produce(state, draft => {
                    draft[form][key] = value;
                })
            )
        },
        [INITIALIZE]: (state) => initialState,
        [LOGIN_SUCCESS]: (state, action) => ({
            ...state,
            login: console.log('action.payload', action.payload)
        }),
        [REGISTER_SUCCESS]: (state, action) => ({
            ...state,
            register: console.log('action.payload', action.payload)
        }),
    },
    initialState
);

export default auth;