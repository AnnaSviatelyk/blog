import * as actionTypes from '../actions/actionTypes';

const initialState = {
    posts: null,
    error: null,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_POSTS_START:
            return {
                error: null,
            };
        case actionTypes.FETCH_POSTS_SUCCESS:
            return {
                posts: action.posts,
            };
        case actionTypes.FETCH_POSTS_FAIL:
            return {
                error: action.error,
            };
        default:
            return state;
    }
};

export default reducer;
