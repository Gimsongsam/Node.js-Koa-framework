import {createAction, handleActions} from 'redux-actions';
// import * as api from '../lib/api';
// import {call, put, takeEvery} from 'redux-saga/effects'
import produce from 'immer';

//액션 타입 설정하기
// 인풋값 설정 액션

const LOGIN = 'auth/LOGIN';
// const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
// const REGISTER = 'auth/REGISTER';
// const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
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
export const login = createAction(LOGIN);

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
        [INITIALIZE]: (state) => initialState
    },
    initialState
);

export default auth;