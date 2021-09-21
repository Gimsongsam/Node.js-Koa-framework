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