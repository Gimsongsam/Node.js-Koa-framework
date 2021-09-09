import {createAction, handleActions} from 'redux-actions';
import * as api from '../lib/api';
import {call, put, takeEvery} from 'redux-saga/effects'
import produce from 'immer';

//액션 타입 설정하기
// 인풋값 설정 액션
// const SETINPUT = 'auth/SETINPUT';
const CHANGE_USERNAME = 'auth/CHANGE_USERNAME';
const CHANGE_PASSWORD = 'auth/CHANGE_PASSWORD';
const CHANGE_PASSWORD_CONFIRM = 'auth/CHANGE_PASSWORD_CONFIRM';

const LOGIN = 'auth/LOGIN';
const REGISTER = 'auth/REGISTER';

// 액션 생성자 함수
export const username = createAction(CHANGE_USERNAME, input => input);
export const password = createAction(CHANGE_PASSWORD, input => input);
export const password_confirm = createAction(CHANGE_PASSWORD, input => input);

export const login = createAction(LOGIN, input => input);
export const register = createAction(REGISTER, input => input);

// 사가 실행함수
// export const loginSaga = createRequestSaga();
// export const registerSaga = createRequestSaga(REGISTER, api.register);

// api 요청 사가함수
function* loginSaga(action){
    console.log('loginSaga 함수실행');

    // 파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있다.
    // api 요청 액션 디스패치
    try{
        yield call(api.login, action.payload);
        console.log('로그인 성공!')
    }catch(e){
        console.log(e)
    }
}

function* registerSaga(action){
    console.log('registerSaga 함수실행');
    // 인풋값 검사 액션 디스패치
    
    // 파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있다.
    // api 요청 액션 디스패치
    try{
        yield call(api.register, action.payload);
        console.log('회원가입 성공!')
    }catch(e){
        // 인풋값 검사 실패 액션 디스패치
        console.log(e)
    }
}

export function* requestSaga(){
    // 들어오는 LOGIN 액션에 대해 login 함수 실행
    yield takeEvery(LOGIN, loginSaga);
    yield takeEvery(REGISTER, registerSaga);
}


const initialState = {
    input:
        {
            username: '',
            password: '',
            password_confirm: ''
        }
}

const auth = handleActions(
    {
        [CHANGE_USERNAME] : (state, {payload: username}) =>
            produce(state, draft => {
                draft.input.username = username;
            }),
        [CHANGE_PASSWORD] : (state, {payload: password}) =>
            produce(state, draft => {
                draft.input.password = password;
        }),
        [CHANGE_PASSWORD_CONFIRM] : (state, {payload: passwordConfirm}) =>
            produce(state, draft => {
                draft.input.password = passwordConfirm;
        }),
    },
    initialState
);

export default auth;