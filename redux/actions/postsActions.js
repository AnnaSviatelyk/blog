import * as actionTypes from './actionTypes';
import axios from 'axios';

//GET POSTS
export const getPostsStart = () => {
    return {
        type: actionTypes.GET_POSTS_START,
    };
};

export const getPostsSuccess = (posts) => {
    return {
        type: actionTypes.GET_POSTS_SUCCESS,
        posts,
    };
};

export const getPostsFail = (error) => {
    return {
        type: actionTypes.GET_POSTS_FAIL,
        error,
    };
};

export const getPosts = () => {
    return async (dispatch) => {
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
export const retrievePostSuccess = (post) => {
    return {
        type: actionTypes.RETRIEVE_POST_SUCCESS,
        post,
    };
};

export const retrievePostFail = (error) => {
    return {
        type: actionTypes.RETRIEVE_POST_FAIL,
        error,
    };
};

export const retrievePost = (id) => {
    return async (dispatch) => {
        try {
            console.log('djdkl;dlk');
            const response = await axios.get(`https://simple-blog-api.crew.red/posts/${id}?_embed=comments`);
            console.log(response.data);
            dispatch(retrievePostSuccess(response.data));
        } catch (error) {
            dispatch(retrievePostFail(error.message));
        }
    };
};
