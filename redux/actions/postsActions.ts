import * as actionTypes from './actionTypes';
import axios from 'axios';

export const backDropClick = () => {
    return {
        type: actionTypes.BACKDROP_CLICK,
    };
};

//GET POSTS
export const getPostsStart = () => {
    return {
        type: actionTypes.GET_POSTS_START,
    };
};

export const getPostsSuccess = (posts: object[]) => {
    return {
        type: actionTypes.GET_POSTS_SUCCESS,
        posts,
    };
};

export const getPostsFail = (error: string) => {
    return {
        type: actionTypes.GET_POSTS_FAIL,
        error,
    };
};

export const getPosts = () => {
    return async (dispatch: Function) => {
        dispatch(getPostsStart());
        try {
            const response = await axios.get('https://simple-blog-api.crew.red/posts');
            const fetchedPosts = response.data;
            dispatch(getPostsSuccess(fetchedPosts));
        } catch (error) {
            dispatch(getPostsFail(error.message));
        }
    };
};

//RETRIEVE POST
export const retrievePostSuccess = (post: object) => {
    return {
        type: actionTypes.RETRIEVE_POST_SUCCESS,
        post,
    };
};

export const retrievePostFail = (error: string) => {
    return {
        type: actionTypes.RETRIEVE_POST_FAIL,
        error,
    };
};

export const retrievePost = (id: number) => {
    return async (dispatch: Function) => {
        try {
            const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
            console.log(response.data);
            dispatch(retrievePostSuccess(response.data));
        } catch (error) {
            dispatch(retrievePostFail(error.message));
        }
    };
};

//ADD POST
export const addPostSuccess = () => {
    return {
        type: actionTypes.ADD_POST_SUCCESS,
    };
};

export const addPostFail = (error: string) => {
    return {
        type: actionTypes.ADD_POST_FAIL,
        error,
    };
};

export const addPost = (values: object) => {
    return async (dispatch: Function) => {
        try {
            await axios.post(`https://simple-blog-api.crew.red/posts`, { ...values });
            dispatch(addPostSuccess());
        } catch (error) {
            dispatch(addPostFail(error.message));
        }
    };
};

//ADD COMMENT
export const addCommentSuccess = (comment) => {
    return {
        type: actionTypes.ADD_COMMENT_SUCCESS,
        comment,
    };
};
export const addCommentFail = (error: string) => {
    return {
        type: actionTypes.ADD_COMMENT_FAIL,
        error,
    };
};

export const addComment = (id, value) => {
    return async (dispatch: Function) => {
        try {
            const response = await axios.post(`https://simple-blog-api.crew.red/comments`, { postId: id, ...value });

            dispatch(addCommentSuccess(response.data));
        } catch (error) {
            dispatch(addCommentFail(error.message));
        }
    };
};
