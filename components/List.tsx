import React from 'react';
import PostItem from './PostItem';
import { useSelector } from 'react-redux';

const List = () => {
    const items = useSelector((state) => {
        return state.posts.items;
    });

    return (
        <ul>
            {items.map((item) => (
                <li key={item.id}>
                    <PostItem data={item} />
                </li>
            ))}
        </ul>
    );
};

export default List;
