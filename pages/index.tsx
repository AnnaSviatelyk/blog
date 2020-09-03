import Link from 'next/link';
import List from '../components/List';
import Layout from '../components/Layout';
import * as actions from '../redux/actions/index';
import styled from 'styled-components';

const Heading1 = styled.h1`
    font-size: 32px;
    font-family: sans-serif;
    font-weight: 100;
`;

const IndexPage = () => {
    return (
        <Layout title="My blog">
            <Heading1>Latest from our blog</Heading1>
            <List />
            <p>
                Have something to say?
                <br />
                <Link href="/posts/new">
                    <a>Create New Post</a>
                </Link>
            </p>
        </Layout>
    );
};

IndexPage.getInitialProps = async ({ store }) => {
    await store.dispatch(actions.getPosts());
};

export default IndexPage;
