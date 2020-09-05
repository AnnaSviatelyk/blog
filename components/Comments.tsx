import * as React from 'react';
import CommentItem from './CommentItem';
import AddComment from './AddComment';
import { Comment } from '../interfaces';

const Comments = ({ items }: { items: Comment[] }) => {
    const allComments = items.map((item: Comment) => <CommentItem body={item.body} key={item.id} />);
    return (
        <div>
            {allComments}
            <AddComment />
        </div>
    );
};

export default Comments;
