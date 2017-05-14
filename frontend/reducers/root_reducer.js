import { combineReducers } from 'redux';
import PostReducer from './post_reducer';

const RootReducer = combineReducers({
  posts: PostReducer
});

export default RootReducer;
