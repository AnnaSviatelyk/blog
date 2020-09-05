import postsReducer from './postsReducer';
import { combineReducers } from 'redux';
import { PostsState } from '../../interfaces';

export interface RootState {
    posts: PostsState;
}

const rootReducer = combineReducers({
    posts: postsReducer,
});

export default rootReducer;
