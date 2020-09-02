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
        <p>You are currently on: /users</p>
        <List items={items} />
        <p>
            <Link href="/">
                <a>Go home</a>
            </Link>
        </p>
    </Layout>
);

export const getStaticProps: GetStaticProps = async () => {
    // Example for including static props in a Next.js function component page.
    // Don't forget to include the respective types for any props passed into
    // the component.
    const items: Post[] = sampleUserData;
    return { props: { items } };
};

export default WithStaticProps;
