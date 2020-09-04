import * as actionTypes from './actionTypes';
import axios from 'axios';

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
            const postsToRender = fetchedPosts.slice(0, 5);
            dispatch(getPostsSuccess(postsToRender));
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
const addPostSuccess = () => {
    return {
        type: actionTypes.ADD_POST_SUCCESS,
    };
};

const addPostFail = (error) => {
    return {
        type: actionTypes.ADD_POST_FAIL,
        error,
    };
};

export const addPost = (values) => {
    return async (dispatch: Function) => {
        try {
            await axios.post(`https://simple-blog-api.crew.red/posts`, { ...values });
            dispatch(addPostSuccess());
        } catch (error) {
            dispatch(addPostFail(error.message));
        }
    };
};
