import react, { useState } from 'react';
import styled from 'styled-components';

const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 12px;
    font-size: 16px;
    font-weight: 200;
    font-family: sans-serif;
`;
const Input = styled.textarea`
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

const Button = styled.button`
    width: 88px;
    height: 32px;
    border: none;
    background-color: #333;
    border-radius: 3px;
    font-family: sans-serif;
    font-size: 12px;
    font-weight: 100;
    color: #fff;
    text-transform: uppercase;
    outline: none;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
        opacity: 0.9;
    }

    &:disabled {
        background-color: #d3d3d3;
        cursor: not-allowed;
    }
`;

const Inputs = () => {
    const [values, setValues] = useState({
        title: '',
        body: '',
    });

    const inputHandler = (event) => {
        if (event.target.name === 'title') {
            setValues({ ...values, title: event.target.value });
        }

        if (event.target.name === 'body') {
            setValues({ ...values, body: event.target.value });
        }
    };

    return (
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
    );
};
