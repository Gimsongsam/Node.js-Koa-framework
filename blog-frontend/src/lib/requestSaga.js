import { call, put } from "redux-saga/effects";
// import startLoading from "../modules/loading";

export default function requestSaga(type, request){
    const SUCEESS = `${type}_SUCEESS`;
    // const FAILURE = `${type}_FAILURE`;
    console.log('requestSaga 실행');
    return function*(action){
        // yield put(startLoading(type));
        // console.log(type);
        // console.log(action);
        // console.log('return');
        try{
            const response = yield call(request, action.payload);
            yield put({
                type: SUCEESS,
                payload: response.data
            });
            console.log('response.data: ',response.data)
            console.log('성공!')
        }catch(e){
            console.log(e)
        }
    }
};