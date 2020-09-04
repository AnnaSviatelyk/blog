import * as React from 'react';
import { Post } from '../interfaces';
import styled from 'styled-components';
import { Heading1 } from '../utils/common-styles';
type PostDetailProps = {
    item: Post;
};

const PostContainer = styled.div`
    width: 50%;
`;

const PostContentContainer = styled.div`
    padding: 24px;
    background-color: #fff;
`;
const PostIllustration = styled.div`
    width: 100%;
    height: 300px;
    background-image: url('/post-detail-ill.jpg');
    background-size: cover;
    background-position: center;
`;

const ListDetail = ({ item: post }: PostDetailProps) => (
    <PostContainer>
        <PostIllustration></PostIllustration>
        <PostContentContainer>
            <Heading1> {post.title}</Heading1>
            <p>{post.body}</p>
        </PostContentContainer>
    </PostContainer>
);

// export const getStaticProps: GetStaticProps = async () => {
//     const items: Post[] = sampleUserData;
//     return { props: { items } };
// };

export default ListDetail;
