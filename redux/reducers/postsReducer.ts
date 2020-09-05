import * as actionTypes from '../actions/actionTypes';
import { HYDRATE } from 'next-redux-wrapper';
import { updateObj } from '../../utils/utility';
import { PostsState, PostInner } from '../../interfaces';
import {
    Hydrate,
    GetPostsSuccess,
    AddCommentSuccess,
    RetrievePostSuccess,
    AddCommentFail,
    AddPostFail,
    GetPostsFail,
    RetrievePostFail,
    ActionTypes,
} from '../actions/types';

const initialState: PostsState = {
    items: [],
    item: null,
    error: null,
    isModalShown: false,
};

const hydrate = (state: PostsState, action: Hydrate) => {
    return updateObj(state, {
        ...action.payload.posts,
    });
};

const backDropClick = (state: PostsState) => {
    return updateObj(state, {
        isModalShown: false,
        postSuccess: false,
        error: null,
    });
};

const getPostsStart = (state: PostsState) => {
    return updateObj(state, {
        items: [],
        error: null,
    });
};

const getPostsSuccess = (state: PostsState, action: GetPostsSuccess) => {
    return updateObj(state, {
        items: action.posts,
    });
};

const retrievePostSuccess = (state: PostsState, action: RetrievePostSuccess) => {
    return updateObj(state, {
        item: action.post,
    });
};

const addPostSuccess = (state: PostsState) => {
    return updateObj(state, {
        isModalShown: true,
    });
};

const addCommentSuccess = (state: PostsState, action: AddCommentSuccess) => {
    if (!state.item) {
        return;
    }
    const updatedItem: PostInner = { ...state.item };
    updatedItem.comments.push(action.comment);

    return updateObj(state, { item: updatedItem });
};
const requestFail = (state: PostsState, action: AddCommentFail | AddPostFail | RetrievePostFail | GetPostsFail) => {
    return updateObj(state, {
        error: action.error,
        isModalShown: true,
    });
};

const reducer = (state = initialState, action: ActionTypes) => {
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
