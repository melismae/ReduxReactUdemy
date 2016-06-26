import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  //state books equals the outcome of bookReducer
  posts: PostsReducer
});

export default rootReducer;
