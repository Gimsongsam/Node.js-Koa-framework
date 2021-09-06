// import {createAction, handleAction} from 'redux-actions';
// import * as api from '../lib/api';

// // 액션 타입 선언
// const SUBMIT_DATA = 'auth/SUBMIT_DATA'; // insert 값
// // const CHANGE_INPUT = 'auth/CHANGE_INPUT'; // 인풋값 변경하기
// // const POST_USER_DATA = 'auth/POST_USER_DATA';
// // const GET_USER_DATA = 'auth/GET_USER_DATA';



// // 액션생성자 함수 생성
// // export const changeInput = createAction(CHANGE_INPUT, input => ({
// //     id: input.id,
// //     password: input.password
// // }));

// export const submitData = createAction(SUBMIT_DATA, input => input);


// // input => ({
// //     type: INSERT,
// //     input: {
// //         id: input.id,
// //         password: input.password
// //     }
// // })

// // export const postUserData = createAction(POST_USER_DATA);
// // export const getUserData = createAction(GET_USER_DATA);

// // function* checkUserData(){
// //     try{
// //         const userData = call(api.checkUserData);
// //     }
// // } 

// // function* registerUserData(){
// //     try{
// //         const userdata = call(api.registerUserData)
// //     }
// // } 

// // export const loginUserData = () => {

// // } 


// // 초기 데이터 설정
// const initialState = {
//     id : null,
//     password: null,
//     password_confirm: null,
// }

// const auth = handleAction(
//     {
//         // [CHANGE_INPUT]: (state, action) => ({})

//         // [POST_USER_DATA]: (state, action) => ({
//         //     ...state,
//         //     id: action.payload,
//         //     password: action.payload,
//         //     password_confirm: action.payload
//         // }),
//         // [GET_USER_DATA]: (state, action) => ({
//         //     ...state,
//         //     id: action.payload,
//         //     password: action.payload,
//         // })
//     },
//     initialState
// )

// export default auth;