import { GetStaticProps, GetStaticPaths } from 'next';

import { Post } from '../../interfaces';
import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';
import * as actions from '../../redux/actions/index';
import { useSelector } from 'react-redux';
import Comments from '../../components/Comments';

type Props = {
    item?: Post;
    errors?: string;
};

const StaticPropsDetail = ({ errors }: Props) => {
    const item = useSelector((state) => {
        return state.posts.item;
    });

    const comments = item.comments;

    console.log(comments);

    return (
        <Layout title={`${item ? item.title : 'User Detail'} | Next.js + TypeScript Example`}>
            {item && <PostDetail item={item} />}
            <h2>Comments ({comments.length})</h2>
            <Comments items={comments} />
        </Layout>
    );
};

export default StaticPropsDetail;

StaticPropsDetail.getInitialProps = async ({ store, pathname, query }) => {
    const id = query.id;

    await store.dispatch(actions.retrievePost(id));
};

// export const getStaticPaths: GetStaticPaths = async () => {
//     // Get the paths we want to pre-render based on users
//     const paths = sampleUserData.map((user) => ({
//         params: { id: user.id.toString() },
//     }));

//     // We'll pre-render only these paths at build time.
//     // { fallback: false } means other routes should 404.
//     return { paths, fallback: false };
// };

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export const getStaticProps: GetStaticProps = async ({ params }) => {
//     try {
//         const id = params?.id;
//         const item = sampleUserData.find((data) => data.id === Number(id));
//         // By returning { props: item }, the StaticPropsDetail component
//         // will receive `item` as a prop at build time
//         return { props: { item } };
//     } catch (err) {
//         return { props: { errors: err.message } };
//     }
// };
