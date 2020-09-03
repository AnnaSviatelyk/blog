import * as React from 'react';

import { Post } from '../interfaces';

type PostDetailProps = {
    item: Post;
};

const ListDetail = ({ item: post }: PostDetailProps) => (
    <div>
        <h1> {post.title}</h1>
        <p>{post.body}</p>
    </div>
);

// export const getStaticProps: GetStaticProps = async () => {
//     const items: Post[] = sampleUserData;
//     return { props: { items } };
// };

export default ListDetail;
