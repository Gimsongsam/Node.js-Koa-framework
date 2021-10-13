import {createAction, handleActions} from 'redux-actions';

const CHECK = 'user/CHECK';
const LOGOUT = 'user/LOGOUT'

export const check = createAction(CHECK, (userId, userState) => ({
    userId,
    userState
}));

export const createlogout = createAction(LOGOUT)

const initialState = {
    userId: '',
    userState: false
}

const user = handleActions(
    {
        [CHECK] : (state, action) => ({
            ...state,
            userId: action.payload.userId,
            userState: action.payload.userState
        }),
        [LOGOUT]: (state) => initialState
    
    },
    initialState
);
    

export default user;