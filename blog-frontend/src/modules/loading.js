import { createAction, handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';

export const startLoading = createAction(
    START_LOADING,
    requestType => requestType
);

const initialState = {}

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => ({
            ...state,
            [action.payload] : true
        }),
    },
    initialState
);

export default loading;