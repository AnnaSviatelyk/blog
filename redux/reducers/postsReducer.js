import * as actionTypes from '../actions/actionTypes';
import { HYDRATE } from 'next-redux-wrapper';
import { updateObj } from './utility';

const initialState = {
    items: [],
    item: null,
    error: null,
};

const hydrate = (state, action) => {
    return updateObj(state, {
        ...action.payload.posts,
    });
};
const getPostsStart = (state) => {
    return updateObj(state, {
        items: [],
        error: null,
    });
};

const getPostsSuccess = (state, action) => {
    return updateObj(state, {
        items: action.posts,
    });
};

const retrievePostSuccess = (state, action) => {
    return updateObj(state, {
        item: action.post,
    });
};

const requestFail = (state, action) => {
    return updateObj(state, {
        error: action.error,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return hydrate(state, action);
        case actionTypes.GET_POSTS_START:
            return getPostsStart(state);
        case actionTypes.GET_POSTS_SUCCESS:
            return getPostsSuccess(state, action);
        case actionTypes.GET_POSTS_FAIL:
            return requestFail(state, action);
        case actionTypes.RETRIEVE_POST_FAIL:
            return requestFail(state, action);
        case actionTypes.RETRIEVE_POST_SUCCESS:
            return retrievePostSuccess(state, action);
        default:
            return state;
    }
};

export default reducer;
