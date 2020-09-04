import * as actionTypes from '../actions/actionTypes';
import { HYDRATE } from 'next-redux-wrapper';
import { updateObj } from '../../utils/utility';
import { PostsState } from '../../interfaces';

const initialState: PostsState = {
    items: [],
    item: null,
    error: null,
    isModalShown: false,
};

const hydrate = (state, action) => {
    return updateObj(state, {
        ...action.payload.posts,
    });
};

const backDropClick = (state) => {
    return updateObj(state, {
        isModalShown: false,
        postSuccess: false,
        error: null,
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

const addPostSuccess = (state) => {
    return updateObj(state, {
        isModalShown: true,
    });
};

const addCommentSuccess = (state, action) => {
    const updatedItem = { ...state.item };
    updatedItem.comments.push(action.comment);

    return updateObj(state, { item: updatedItem });
};
const requestFail = (state, action) => {
    return updateObj(state, {
        error: action.error,
        isModalShown: true,
    });
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case HYDRATE:
            return hydrate(state, action);
        case actionTypes.BACKDROP_CLICK:
            return backDropClick(state);
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
        case actionTypes.ADD_POST_FAIL:
            return requestFail(state, action);
        case actionTypes.ADD_POST_SUCCESS:
            return addPostSuccess(state);
        case actionTypes.ADD_COMMENT_SUCCESS:
            return addCommentSuccess(state, action);
        case actionTypes.ADD_COMMENT_FAIL: {
            return requestFail(state, action);
        }
        default:
            return state;
    }
};

export default reducer;
