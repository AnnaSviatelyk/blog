import * as React from 'react';

// type Props = {
//     data: Post;
// };

const CommentItem = ({ body, id }: { body: string; id: number }) => (
    <div>
        <p>Comment: {id}</p>
        <p>{body}</p>
    </div>
);

export default CommentItem;
