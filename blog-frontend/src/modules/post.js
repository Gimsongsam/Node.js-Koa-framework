import { createAction, handleActions } from "redux-actions";
import { takeEvery, takeLatest } from "@redux-saga/core/effects";
import requestSaga from "../lib/requestSaga";
import * as api from '../lib/api';

// 액션 타입 설정하기
const CHANGE_FIELD = 'post/CHANGE_FIELD';
const ONINSERT = 'post/ONINSERT';

const POSTLIST = 'post/POSTLIST';
const POSTLIST_SUCEESS = 'post/POSTLIST_SUCEESS';
const POSTLIST_FAILURE = 'post/POSTLIST_FAILURE';

const POST = 'post/POST';

// 액션 생성자 함수 설정하기
export const changeField = createAction(CHANGE_FIELD, ({name, value}) => ({
    name,
    value
}));

export const createInsert = createAction(ONINSERT, tag => tag);

// export const createpostsaga = createAction(POST_SUCCESS, form => form);
export const createPostSaga = createAction(POST, post => post);
export const createPostListSaga = createAction(POSTLIST, (username, tag) => ({
    username,
    tag
}));

const requestPostSaga = requestSaga(POST, api.requestPost);
const requestPostListSaga = requestSaga(POSTLIST, api.getPost);

export function* postSaga(){
    console.log('postSaga 실행');
    yield takeEvery(POSTLIST, requestPostListSaga);
    // yield takeEvery(POST, requestPostSaga);
}


// state 설정하기
const initialState = {
    title: '',
    body: '',
    tags: [],
    postlist: '',
    test: null,
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
    [POSTLIST_SUCEESS]: (state, action) => ({
        ...state,
        postlist: action.payload
    }),
    [POSTLIST_FAILURE]: (state, action) => ({
        ...state,
        test: action.payload
    })
},
    initialState
)

export default post;