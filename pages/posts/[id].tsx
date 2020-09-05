import Layout from '../../components/Layout';
import PostDetail from '../../components/PostDetail';
import * as actions from '../../redux/actions/index';
import { useSelector } from 'react-redux';
import Comments from '../../components/Comments';
import styled from 'styled-components';
import { Comment } from '../../interfaces/index';
import { Heading2 } from '../../utils/common-styles';
import { RootState } from '../../redux/reducers/rootReducer';

const CommentsContainer = styled.div`
    width: 50%;
    margin-top: 16px;
    padding: 24px;
    background-color: #fff;
`;

const StaticPropsDetail = () => {
    const item = useSelector((state: RootState) => {
        return state.posts.item;
    });

    const comments: Comment[] | [] = item ? item.comments : [];

    return (
        <Layout title={`${item ? item.title : 'User Detail'} | Next.js + TypeScript Example`}>
            {item && <PostDetail item={item} />}
            <CommentsContainer>
                <Heading2>Comments ({comments.length})</Heading2>
                <Comments items={comments} />
            </CommentsContainer>
        </Layout>
    );
};

export default StaticPropsDetail;

StaticPropsDetail.getInitialProps = async ({ store, query }: { store: any; query: any }) => {
    const id = query.id;

    await store.dispatch(actions.retrievePost(id));
};
