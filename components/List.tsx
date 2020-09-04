import React from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const PostItemContainer = styled.div`
    display: flex;
    width: 100%;
    max-width: 680px;
`;

const PostIllustration = styled.div`
    width: 145px;
    height: 117px;
    background-image: url('/illustration.jpg');
    background-size: cover;
`;

const StyledLi = styled.li`
    width: 400px;
    height: 117px;
    margin-bottom: 24px;
    padding: 16px;
    background-color: #fdfdfd;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    list-style: none;
    text-decoration: none;
`;

const List = () => {
    const items = useSelector((state) => {
        return state.posts.items;
    });

    return (
        <ul>
            {items.map((item) => (
                <PostItemContainer key={item.id}>
                    <StyledLi>
                        <PostItem data={item} />
                    </StyledLi>
                    <PostIllustration></PostIllustration>
                </PostItemContainer>
            ))}
        </ul>
    );
};

export default List;
