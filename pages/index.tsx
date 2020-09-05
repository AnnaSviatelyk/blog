import List from '../components/List';
import Layout from '../components/Layout';
import * as actions from '../redux/actions/index';
import { Heading1 } from '../utils/common-styles';

const IndexPage = () => {
    return (
        <Layout title="My blog">
            <Heading1>Latest from our blog</Heading1>
            <List />
        </Layout>
    );
};

IndexPage.getInitialProps = async ({ store }: { store: any }) => {
    await store.dispatch(actions.getPosts());
};

export default IndexPage;
