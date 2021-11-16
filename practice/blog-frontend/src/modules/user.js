import { takeLatest } from 'redux-saga/effects';
import {createAction, handleActions} from 'redux-actions';
import * as authApi from '../lib/api/authApi';
import requestSaga from '../lib/requestSaga';

// const TEMP_SET_USER = 'user/TEMSET_USER'; // 새로고침 이후 임시 로그인 처리
const CHECK = 'user/CHECK';
const CHECK_SUCEESS = 'user/CHECK_SUCEESS';
const CHECK_FAILURE = 'user/CHECK_FAILURE';

export const check = createAction(CHECK);
// export const tempSetUser = createAction(TEMP_SET_USER, user => user);


const initialState = {
    user: null,
    checkError: null,
}

const checkUser = requestSaga(CHECK, authApi.checkuser)

export function* userSaga(){
    yield takeLatest(CHECK, checkUser)
}

const user = handleActions(
    {
        // [TEMP_SET_USER] : (state, action) => ({
        //     ...state,
        //     user,
        // }),
        [CHECK_SUCEESS] : (state, action) => ({
            ...state,
            user,
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