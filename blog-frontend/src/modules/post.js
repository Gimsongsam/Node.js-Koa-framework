import { createAction, handleActions } from "redux-actions";
import { takeEvery, takeLatest } from "@redux-saga/core/effects";
import requestSaga from "../lib/requestSaga";
import * as api from '../lib/api';

// 액션 타입 설정하기
const CHANGE_FIELD = 'post/CHANGE_FIELD';
const ONINSERT = 'post/ONINSERT';

const POSTLIST = 'post/POSTLIST';
const POSTLIST_SUCCESS = 'post/POSTLIST_SUCCESS';
// const POSTLIST_FAILURE = 'post/POSTLIST_FAILURE';

const POSTREAD = 'post/POSTREAD';
const POSTREAD_SUCCESS = 'post/POSTREAD_SUCCESS';

const POST = 'post/POST';

// 액션 생성자 함수 설정하기
export const changeField = createAction(CHANGE_FIELD, ({name, value}) => ({
    name,
    value
}));

export const createInsert = createAction(ONINSERT, tag => tag);

export const createPostListSaga = createAction(POSTLIST, (username, tag) => ({
    username,
    tag
}));
const requestPostListSaga = requestSaga(POSTLIST, api.getPost);

export const createPostSaga = createAction(POST, post => post);
const requestPostSaga = requestSaga(POST, api.requestPost);

export const createPostRead = createAction(POSTREAD, id => id);
const postReadSaga = requestSaga(POSTREAD, api.getPostRead);

export function* postSaga(){
    console.log('postSaga 실행');
    yield takeLatest(POSTLIST, requestPostListSaga);
    yield takeLatest(POSTREAD, postReadSaga);
    // yield takeEvery(POST, requestPostSaga);
}


// state 설정하기
const initialState = {
    title: '',
    body: '',
    tags: [],
    postList: [],
    postContent: {
            title: '',
            user: {username:''},
            publishedDate: '',
            tags: [],
            body: ''
        }
}

// 리듀서
const post = handleActions({
    [CHANGE_FIELD]: (state, {payload: {name, value}}) => ({
        ...state,
        [name]: value
    }),
    [ONINSERT]: (state, action) => ({
        ...state,
        tags: action.payload
    }),
    [POSTLIST_SUCCESS]: (state, action) => ({
        ...state,
        postList: action.payload
    }),
    // [POSTLIST_FAILURE]: (state, action) => ({
    //     ...state,
    //     test: action.payload
    // })
    [POSTREAD_SUCCESS]: (state, action) => ({
        ...state,
        postContent: action.payload
    })
},
    initialState
)

export default post;