import * as actionTypes from './actionTypes';

//FETCH POSTS
export const fetchPostsStart = () => {
    return {
        type: actionTypes.FETCH_POSTS_START,
    };
};

export const fetchPostsSuccess = (posts) => {
    return {
        type: actionTypes.FETCH_POSTS_SUCCESS,
        posts,
    };
};

export const fetchPostsFail = (error) => {
    return {
        type: actionTypes.FETCH_POSTS_FAIL,
        error,
    };
};
