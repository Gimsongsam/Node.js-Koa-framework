import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api';
import {takeLatest} from 'redux-saga/effects'
import produce from 'immer';
import requestSaga from '../lib/requestSaga';

//액션 타입 설정하기
// 인풋값 설정 액션

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE = 'auth/INITIALIZE';

// 액션 생성자 함수
// export const login = createAction(LOGIN, input => input);
// export const register = createAction(REGISTER, input => input);

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
export const createRegister = createAction(REGISTER, form => form);

const loginSaga = requestSaga(LOGIN, api.requestLogin);
const registerSaga = requestSaga(REGISTER, api.requestRegister);
// console.log(api.requestLogin);

export function* createSaga(){
    console.log('createSaga 실행'); 
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(REGISTER, registerSaga);
}

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