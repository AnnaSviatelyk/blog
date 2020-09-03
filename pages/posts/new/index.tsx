import Layout from '../../../components/Layout';

const IndexPage = () => (
    <Layout title="Create New Post">
        <h1>Here you can add new post</h1>
        <div>
            <input type="text" placeholder="Post title here"></input>
            <input type="text" placeholder="Post description"></input>
        </div>
        <button>Submit</button>
        <button>Cancel</button>
    </Layout>
);

export default IndexPage;
