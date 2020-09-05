import { useState } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import * as actions from '../redux/actions/index';
type PropType = any;
const Input = styled.textarea<PropType>`
    width: 100%;
    height: auto;
    max-height: 100px;
    margin-bottom: 16px;
    padding: 16px 16px 8px 16px;
    box-sizing: border-box;
    background-color: #f3f3f340;

    display: block;
    overflow-x: hidden;
    overflow-y: scroll;

    outline: none;
    resize: none;

    border-radius: 3px;
    border: 1px solid #f3f3f3;

    font-family: inherit;
    font-size: 16px;
    font-weight: 200;
    color: #333333;

    &::placeholder {
        opacity: 0.9;
        font-weight: 200;
        font-size: 14px;
    }
`;

const AddComment = () => {
    const router = useRouter();
    const id = parseInt(Array.isArray(router.query.id) ? router.query.id[0] : router.query.id);

    const dispatch = useDispatch();

    const [value, setValue] = useState({
        body: '',
    });

    const inputHandler = (event: any) => {
        setValue({ ...value, body: event.target.value });
    };

    const sendCommentHandler = () => {
        dispatch(actions.addComment(id, value));
        setValue({ ...value, body: '' });
    };

    return (
        <div>
            <Input type="text" placeholder="Your coment here" name="body" value={value.body} onChange={inputHandler} />
            <Button text="Send" click={sendCommentHandler} />
        </div>
    );
};

export default AddComment;
