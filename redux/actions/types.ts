import * as actionTypes from './actionTypes';
import { Post, PostInner, Comment } from '../../interfaces';

export interface Hydrate {
    type: '__NEXT_REDUX_WRAPPER_HYDRATE__';
    payload: {
        posts: Post[];
    };
}

export interface BackDropClickInterface {
    type: typeof actionTypes.BACKDROP_CLICK;
}

export interface GetPostsStart {
    type: typeof actionTypes.GET_POSTS_START;
}

export interface GetPostsSuccess {
    type: typeof actionTypes.GET_POSTS_SUCCESS;
    posts: Post[];
}

export interface GetPostsFail {
    type: typeof actionTypes.GET_POSTS_FAIL;
    error: string;
}

export type GetPostsActionTypes = BackDropClickInterface | GetPostsStart | GetPostsSuccess | GetPostsFail;

export interface RetrievePostSuccess {
    type: typeof actionTypes.RETRIEVE_POST_SUCCESS;
    post: PostInner;
}

export interface RetrievePostFail {
    type: typeof actionTypes.RETRIEVE_POST_FAIL;
    error: string;
}

export type RetrievePostActionTypes = RetrievePostSuccess | RetrievePostFail;

export interface AddPostSuccess {
    type: typeof actionTypes.ADD_POST_SUCCESS;
}

export interface AddPostFail {
    type: typeof actionTypes.ADD_POST_FAIL;
    error: string;
}

export type AddPostActionTypes = AddPostSuccess | AddPostFail;

export interface AddCommentSuccess {
    type: typeof actionTypes.ADD_COMMENT_SUCCESS;
    comment: Comment;
}

export interface AddCommentFail {
    type: typeof actionTypes.ADD_COMMENT_FAIL;
    error: string;
}

export type AddCommentActionTypes = AddCommentSuccess | AddCommentFail | AddPostFail;

export type ActionTypes =
    | Hydrate
    | BackDropClickInterface
    | GetPostsSuccess
    | AddCommentSuccess
    | GetPostsStart
    | RetrievePostSuccess
    | AddCommentFail
    | AddPostFail
    | GetPostsFail
    | RetrievePostFail
    | AddPostActionTypes
    | AddCommentActionTypes;
