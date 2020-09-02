import Link from 'next/link';
import Layout from '../components/Layout';

const IndexPage = () => (
    <Layout title="My blog">
        <h1>Hello, It's me</h1>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </Layout>
);

export default IndexPage;
