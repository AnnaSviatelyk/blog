import Link from 'next/link';
import List from '../components/List';
import Layout from '../components/Layout';
import * as actions from '../redux/actions/index';
import styled from 'styled-components';
import { Heading1 } from '../utils/common-styles';

const IndexPage = () => {
    return (
        <Layout title="My blog">
            <Heading1>Latest from our blog</Heading1>
            <List />
        </Layout>
    );
};

IndexPage.getInitialProps = async ({ store }) => {
    await store.dispatch(actions.getPosts());
};

export default IndexPage;
