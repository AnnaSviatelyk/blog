import { GetStaticProps } from 'next';
import Link from 'next/link';
import { Post } from '../../interfaces';
import { sampleUserData } from '../../utils/sample-data';
import Layout from '../../components/Layout';
import List from '../../components/List';

type Props = {
    items: Post[];
};

const WithStaticProps = ({ items }: Props) => (
    <Layout title="Posts List">
        <h1>Posts List</h1>
        <p>
            Example fetching data from inside <code>getStaticProps()</code>.
        </p>
        <p>You are currently on: /posts</p>
        <List />
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    const items: Post[] = sampleUserData;
    return { props: { items } };
};

export default WithStaticProps;
