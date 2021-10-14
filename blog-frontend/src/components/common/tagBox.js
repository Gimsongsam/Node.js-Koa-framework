import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import Button from './button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons'

const TagInput = styled.div`
    /* padding-bottom: 30px; */

    p{
        font-weight: 400;
        font-size: 1rem;
        padding-bottom: 5px;
    }

    input{
        width: 13rem;
        height: 2rem;
        border: 1px solid #333;
        border-radius: 5px 0 0 5px;
        padding-left: 13px;
        outline: none;
    }

    .input_wrap{
        display: flex;
    }
`;

const TagCont = styled.div`
    ul{
        padding: 20px 0;
        display: flex;
    }
    li{
        /* width: 1rem; */
        background-color: #ddd;
        margin-right: 12px;
        padding: 5px;
        border-radius: 3px;
        color: #555;

        .backspace{
            margin-left: 5px;
            cursor: pointer;
            font-size: 0.88em;
        }
    }
`;

const TagBtn = styled(Button)`
    width: 3rem;
    height: 2rem;
    background-color: #333;
    color: #fff;
    border-radius: 0 5px 5px 0;
    line-height: 2rem;
    &:hover{
        background-color: #333;
    }
`;

const TagBox = ({tags, onInsertTag}) => {
    const [tagInput, setTagInput] = useState('');
    const [tagCont, setContTag] = useState(tags);

    const onChange = (e) => {
        // console.log(e.target.value)
        setTagInput(e.target.value)
    }

    const onInsert = () => {
        const tag = [tagInput];
        setContTag(tagCont.concat(tag));
        console.log(tagCont);
        setTagInput('');
        onInsertTag(tagCont);
    }

    const onDelete = (key) => {
        setContTag(tagCont.filter((tag, index) => index !== key));
        console.log(key);
        onInsertTag(tagCont);
    }

    

    return(
        <>
            <TagInput>
                <p>태그</p>
                <div className="input_wrap">
                    <input
                        placeholder="태그를 입력하세요" 
                        onChange={onChange}
                        name='tag'
                        // value={value}
                    />
                    <TagBtn onClick={onInsert}>추가</TagBtn>
                </div>
            </TagInput>
            <TagCont>
                <ul>
                    {tagCont.map((tag, index) => (
                        <li key={index}>{tag}
                            <FontAwesomeIcon
                                className="backspace"
                                icon={faTimesCircle}
                                onClick={() => onDelete(index)}
                                // key={index}
                            />
                        </li>
                    ))}
                </ul>
            </TagCont>
        </>
    )
}

export default TagBox;