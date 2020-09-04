import * as React from 'react';
import Comment from './Comment';
import AddComment from './AddComment';

const Comments = ({ items }) => {
    const allComments = items.map((item: object) => <Comment body={item.body} id={item.id} key={item.id} />);
    return (
        <div>
            {allComments}
            <AddComment />
        </div>
    );
};

export default Comments;
