import Layout from '../../../components/Layout';
import styled from 'styled-components';
import { Heading1 } from '../../../utils/common-styles';
const InputsContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Label = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    font-family: sans-serif;
`;
const Input = styled.textarea`
    width: 400px;
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

    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    line-height: 1.5;

    transition: border 0.3s;
`;

const Button = styled.button`
    width: 88px;
    height: 32px;
    border: none;
    background-color: #333;
    border-radius: 3px;
    font-size: 12px;
    color: #fff;
    text-transform: uppercase;
    outline: none;
    transition: all 0.3s;
    &:hover {
        opacity: 0.9;
    }
`;
const IndexPage = () => (
    <Layout title="Create New Post">
        <Heading1>Share your thoughts...</Heading1>
        <InputsContainer>
            <Label>Title</Label>
            <Input type="text" placeholder="Post title here"></Input>
            <Label>Description</Label>
            <Input type="text" placeholder="Post description"></Input>
        </InputsContainer>
        <Button>Submit</Button>
    </Layout>
);

export default IndexPage;
