import { call, put, getContext } from "redux-saga/effects";
import {creategotohome} from "../modules/auth";

// function* gotohomeSaga(action){
//     console.log('gotohome');
//     const history = yield getContext('history');
//     // yield customHistory.push('/');
//     history.push(`/@:${action.payload}`);
// }

export default function requestSaga(type, request){
    const SUCEESS = `${type}_SUCEESS`;
    // const FAILURE = `${type}_FAILURE`;

    console.log('requestSaga 실행');
    return function*(action){
        try{
            const response = yield call(request, action.payload);
            yield put({
                type: SUCEESS,
                payload: response.data
            });
            console.log('response.data: ',response.data.username);
            console.log('성공!');
            yield put(creategotohome(response.data.username));
        }catch(e){
            console.log(e)
        }
    }
};

// export default requestSaga;