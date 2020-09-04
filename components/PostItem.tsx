import React from 'react';
import Link from 'next/link';
import { Post } from '../interfaces';
import styled from 'styled-components';

type Props = {
    data: Post;
};

const StyledA = styled.a`
    text-decoration: none;
    cursor: pointer;
`;
const ListItem = ({ data }: Props) => {
    let text = data.body;

    if (text && text.length > 50) {
        text = text.substring(0, 50) + '...';
    }

    return (
        <>
            <Link href="posts/[id]" as={`posts/${data.id}`}>
                <StyledA>{data.title}</StyledA>
            </Link>
            <p>{text}</p>
        </>
    );
};

export default ListItem;
