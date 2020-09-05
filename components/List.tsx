import React, { useState } from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';
import Button from './Button';
import styled from 'styled-components';
import { Post } from '../interfaces';
import { RootState } from '../redux/reducers/rootReducer';

const AllContentContainer = styled.div`
    margin-bottom: 40px;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 680px;
    align-items: center;
`;
const PostItemContainer = styled.div`
    display: flex;
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
const limit = 5;

const List = () => {
    const items = useSelector((state: RootState) => state.posts.items);
    const [page, setPage] = useState(1);
    const offset = page * limit;
    const postsCount = items.length;
    const showingPostsCount = offset <= postsCount ? offset : postsCount;
    const isButtonShown = offset <= postsCount;

    const loadMoreButtonClickHandler = () => {
        setPage(page + 1);
    };
    return (
        <AllContentContainer>
            <ul>
                {items.slice(0, showingPostsCount).map((item: Post) => (
                    <PostItemContainer key={item.id}>
                        <StyledLi>
                            <PostItem data={item} />
                        </StyledLi>
                        <PostIllustration></PostIllustration>
                    </PostItemContainer>
                ))}
            </ul>
            {isButtonShown && <Button text="Load more" click={loadMoreButtonClickHandler} />}
        </AllContentContainer>
    );
};

export default List;
