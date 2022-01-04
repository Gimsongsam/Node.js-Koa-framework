import { takeLatest } from 'redux-saga/effects';
import {createAction, handleActions} from 'redux-actions';
import * as authApi from '../lib/api/authApi';
import requestSaga from '../lib/requestSaga';

const TEMP_SET_USER = 'user/TEMSET_USER'; // 새로고침 이후 임시 로그인 처리
const CHECK = 'user/CHECK';
const CHECK_SUCCESS = 'user/CHECK_SUCCESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';

export const checkUser = createAction(CHECK);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);


const initialState = {
    user: null,
    checkError: null,
}

const check = requestSaga(CHECK, authApi.checkUser);

export function* userSaga(){
    yield takeLatest(CHECK, check);
}

const user = handleActions(
    {
        [TEMP_SET_USER] : (state, action) => ({
            ...state,
            user,
        }),
        // [CHECK]: (state, action) => ({
        //     user: true,
        //     checkError: null,
        // }),
        [CHECK_SUCCESS] : (state, {payload:username}) => ({
            ...state,
            user: username,
            checkError: null,
        }),
        [CHECK_FAILURE] : (state, {payload: error}) => ({
            ...state,
            user: null,
            checkError: error,
        })
    },
    initialState
);

export default user;