import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api';
import {call, put} from 'redux-saga/effects'

//액션 타입 설정하기
// 인풋값 설정 액션
// const SETINPUT = 'auth/SETINPUT';
const CHANGE_USERNAME = 'auth/CHANGE_USERNAME';
const CHANGE_PASSWORD = 'auth/CHANGE_PASSWORD';
// const CHANGE_PASSWORD_CONFIRM = 'auth/CHANGE_PASSWORD_CONFIRM';

const LOGIN = 'auth/LOGIN';
const REGISTER = 'auth/REGISTER';

// 액션 생성자 함수 / 사가 함수 만들기
// export const setInput = createAction(CHANGE_USERNAME, (username, password) => ({
//         username,
//         password
//     }));
export const username = createAction(CHANGE_USERNAME, input => input)
export const password = createAction(CHANGE_PASSWORD, input => input)

// api 요청 액션
export function* loginSaga(action){
    // yield put({
    //     type: LOGIN,
    //     payload: 
    // });
    try{
        const login = yield call(api.login, action.payload);
        console.log(login);
        
    }catch(e){

    }
}

const initialState = {
    username: '',
    password: '',
    password_confirm: ''
}

const auth = handleActions(
    {
        [CHANGE_USERNAME] : (state, action) => ({
            ...state,
            username: action.payload,
        }),
        [CHANGE_PASSWORD] : (state, action) => ({
            ...state,
            password: action.payload,
        }),
    },
    initialState
);

export default auth;