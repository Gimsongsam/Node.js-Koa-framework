import React , {useEffect, useCallback} from 'react';
import Editor from '../../components/write/Editor';
import {useSelector, useDispatch} from 'react-redux';
import {changeField, initialize} from '../../modules/wirte';

const EditorContainer = () => {
    const dispatch = useDispatch();
    const {title, body} = useSelector(({write}) => ({
        title: write.title,
        body: write.body,
    }));

    // Editor 컴포넌트에서 사용할 useEffect가 한번만 실행되도록 useCallback 사용
    // 따라서 state값이 바뀌어도 rendering이 처음만 실행이 된다.
    const onChangeField = useCallback(payload => {
        dispatch(changeField(payload));
        // console.log(dispatch);
        console.log('1');
    }, [dispatch,]);

    // 디스패치될 때 마다 렌더링이 된다.
    // const onChangeField = payload => {
    //     dispatch(changeField(payload));
    //     console.log(dispatch);
    // }

    console.log(typeof onChangeField)
        


    // 언마운트될 때 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    return <Editor onChangeField={onChangeField} title={title} body={body} />
};

export default EditorContainer;