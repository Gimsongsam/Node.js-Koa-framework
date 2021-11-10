import {createAction, handleActions} from 'redux-actions';
// import createReuestSaga, 

const TEMP_SET_USER = 'user/TEMSET_USER';
// const [CHECK, CHECK_SUCEESS, CHECK_FAILURE] = 

export const check = createAction(CHECK);
export const tempSetUser = createAction(TEMP_SET_USER, user => user);


const initialState = {
    user: null,
    checkError: null,
}

const user = handleActions(
    {
        [TEMP_SET_USER] : (state, action) => ({
            ...state,
            user,
        }),
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