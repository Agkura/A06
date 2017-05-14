import merge from 'lodash/merge';
import { REMOVE_POST, RECEIVE_POSTS, RECEIVE_POST } from '../actions/post_actions';

const PostReducer = ( state = {}, action ) =>{
  let newState = merge({}, state);
  switch(action.type){
    case RECEIVE_POSTS:
      merge(newState, action.posts);
      return newState;
    case RECEIVE_POST:
      merge(newState, {[action.post.id]: action.post});
      return newState;
    case REMOVE_POST:
      delete newState[action.post.id];
      return newState;
    default:
      return state;
  };
}

export default PostReducer;
