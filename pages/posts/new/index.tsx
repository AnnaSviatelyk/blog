import { useState } from 'react';
import Layout from '../../../components/Layout';
import Button from '../../../components/Button';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { Heading1, Label } from '../../../utils/common-styles';
import * as actions from '../../../redux/actions/index';

type PropType = any;
const InputsContainer = styled.div<PropType>`
    display: flex;
    flex-direction: column;
`;

const Input = styled.textarea<PropType>`
    width: 500px;
    height: auto;
    max-height: 200px;
    margin-bottom: 16px;
    padding: 8px 10px 8px 8px;
    box-sizing: border-box;
    background-color: #f3f3f340;

    display: block;
    overflow-x: hidden;
    overflow-y: scroll;

    outline: none;
    resize: none;

    border-radius: 3px;
    border: 1px solid #f3f3f3;

    font-family: sans-serif;
    font-size: 14px;
    font-weight: 100;

    &::placeholder {
        opacity: 0.9;
        font-weight: 200;
    }

    &:last-of-type {
        height: 250px;
        max-height: 400px;
    }
`;

const IndexPage = () => {
    const [values, setValues] = useState({
        title: '',
        body: '',
    });

    const dispatch = useDispatch();

    const inputHandler = (event: any) => {
        if (event.target.name === 'title') {
            setValues({ ...values, title: event.target.value });
        }

        if (event.target.name === 'body') {
            setValues({ ...values, body: event.target.value });
        }
    };

    const submitClickHandler = () => {
        dispatch(actions.addPost(values));
        setValues({ ...values, title: '', body: '' });
    };

    return (
        <Layout title="Create New Post">
            <Heading1>Share your thoughts...</Heading1>
            <InputsContainer>
                <Label>Title</Label>
                <Input
                    type="text"
                    placeholder="Post title here"
                    name="title"
                    value={values.title}
                    onChange={inputHandler}
                ></Input>
                <Label>Description</Label>
                <Input
                    type="text"
                    placeholder="Post description here"
                    name="body"
                    value={values.body}
                    onChange={inputHandler}
                ></Input>
            </InputsContainer>
            <Button
                text="Submit"
                disabled={values.title.length && values.body.length ? false : true}
                click={submitClickHandler}
            />
        </Layout>
    );
};

export default IndexPage;
