import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api/authApi';
import {takeLatest} from 'redux-saga/effects'
import produce from 'immer';
import requestSaga from '../lib/requestSaga';

//액션 타입 설정하기
const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

const REGISTER = 'auth/REGISTER';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const INITIALIZE = 'auth/INITIALIZE';

const LOGOUT = 'auth/LOGOUT';
// const CHECK_USER = 'auth/CHECK_USER';

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
export const createlogout = createAction(LOGOUT);

// export const checkuser = createAction(CHECK_USER, state => state);


// 사가 함수
const loginSaga = requestSaga(LOGIN, api.requestLogin);
const registerSaga = requestSaga(REGISTER, api.requestRegister);
const logoutSaga = requestSaga(LOGOUT, api.requestLogout)
// const checksaga = requestSaga(CHECK_USER, api.checkuser)

export function* createSaga(){
    console.log('createSaga 실행'); 
    yield takeLatest(LOGIN, loginSaga);
    yield takeLatest(REGISTER, registerSaga);
    yield takeLatest(LOGOUT, logoutSaga);
    // yield takeLatest(CHECK_USER, checksaga);
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
    },
    auth: false,
    authError: null
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
            auth: true,
        }),
        [REGISTER_SUCCESS]: (state, action) => ({
            ...state,
            auth: true,
        }),
        [LOGIN_FAILURE]: (state, action) => ({
            ...state,
            authError: action.payload,
        }),
        [REGISTER_FAILURE]: (state, action) => ({
            ...state,
            authError: action.payload,
        }),
        
        // [CHECK_USER] : (state, action) => ({
        //     ...state,
        //     auth: true,
        // })
    },
    initialState
);

export default auth;