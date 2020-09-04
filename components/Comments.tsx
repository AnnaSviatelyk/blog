import * as React from 'react';
import Comment from './Comment';

const Comments = ({ items }) => {
    const allComments = items.map((item: object) => <Comment body={item.body} id={item.id} key={item.id} />);
    return <div>{allComments}</div>;
};

export default Comments;
