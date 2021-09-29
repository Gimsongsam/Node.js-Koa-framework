import { call, put } from "@redux-saga/core/effects";

export const requestSaga = (type, request) => {
    const SUCEESS = `${type}_SUCEESS`;
    const FAILURE = `${type}_FAILURE`;

    return(
        function* (action){
            yield put()
            try{
                yield call();
            }catch(e){
        
            }
        }
    );
};

// api 요청 사가함수
// function* loginSaga(action){
//     console.log('loginSaga 함수실행');

//     // 파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있다.
//     // api 요청 액션 디스패치
//     try{
//         yield call(api.login, action.payload);
//         console.log('로그인 성공!')
//     }catch(e){
//         console.log(e)
//     }
// }

// function* registerSaga(action){
//     console.log('registerSaga 함수실행');
//     // 인풋값 검사 액션 디스패치
    
//     // 파라미터로 action을 받아 오면 액션의 정보를 조회할 수 있다.
//     // api 요청 액션 디스패치
//     try{
//         yield call(api.register, action.payload);
//         console.log('회원가입 성공!')
//     }catch(e){
//         // 인풋값 검사 실패 액션 디스패치
//         console.log(e)
//     }
// }

// export function* requestSaga(){
//     // 들어오는 LOGIN 액션에 대해 login 함수 실행
//     yield takeEvery(LOGIN, loginSaga);
//     yield takeEvery(REGISTER, registerSaga);
// }