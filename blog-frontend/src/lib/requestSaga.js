import { call, put } from "redux-saga/effects";
import { finishLoading, startLoading } from "../modules/loading";
import { checkuser } from "../modules/auth";

export default function requestSaga(type, request){
    console.log(type);
    
    const SUCEESS = `${type}_SUCEESS`;
    const FAILURE = `${type}_FAILURE`;

    return function*(action){
        // yield put(startLoading(type)); // 로딩 시작
        // console.log(action.payload);
        try{
            console.log('try')
            const response = yield call(request, action.payload);
            yield put({
                type: SUCEESS,
                payload: response.data
            });
            // console.log('response.data: ',response.data.username);
            console.log('성공!');
            // yield put(creategotohome(response.data.username));
            yield put(checkuser(true));
        }catch(e){
            // console.log(e.response.status)
            // yield put({
            //     type: FAILURE,
            //     payload: e.response.status,
            //     // error: true
            // });
        }
        // yield put(finishLoading(type));
    }
};