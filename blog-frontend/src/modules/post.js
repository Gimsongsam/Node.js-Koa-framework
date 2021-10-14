import { createAction, handleActions } from "redux-actions";
// import produce from "immer";

// 액션 타입 설정하기
const CHANGE_FIELD = 'post/CHANGE_FIELD';
const ONINSERT = 'post/ONINSERT';

// 액션 생성자 함수 설정하기
export const changeField = createAction(CHANGE_FIELD, ({name, value}) => ({
    name,
    value
}))

export const createInsert = createAction(ONINSERT, tag => tag)


// state 설정하기
const initialState = {
    title: '',
    content: '',
    tags: ['태그1', '태그2'],
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
    })
},
    initialState
)

export default post;