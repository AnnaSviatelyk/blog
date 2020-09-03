import React from 'react';
import Link from 'next/link';
import { Post } from '../interfaces';

type Props = {
    data: Post;
};

const ListItem = ({ data }: Props) => (
    <Link href="posts/[id]" as={`posts/${data.id}`}>
        <a>{data.title}</a>
    </Link>
);

export default ListItem;
