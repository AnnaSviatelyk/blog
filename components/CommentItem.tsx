import * as React from 'react';
import styled from 'styled-components';

const CommentContainer = styled.div`
    width: 100%;
    padding: 16px;
    margin: 0 0 16px 0;
    border-radius: 5px;
    background-color: #fafafa;
    color: #333;
`;

const CommentUser = styled.p`
    margin: 0 0 8px 0;
    font-size: 12px;
    font-weight: 300;
    opacity: 0.9;
`;

const CommentBody = styled.p`
    margin: 0;
`;
const CommentItem = ({ body }: { body: string }) => (
    <CommentContainer>
        <CommentUser>Comment by: User</CommentUser>
        <CommentBody>{body}</CommentBody>
    </CommentContainer>
);

export default CommentItem;
