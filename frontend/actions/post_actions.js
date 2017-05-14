import * as APIUtil from '../util/post_util';
export const RECEIVE_POSTS = "RECIEVE_POSTS";
export const RECEIVE_POST = "RECEIVE_POST";
export const REMOVE_POST = "REMOVE_POST";

// sync
export const receiveAllPosts = posts => ({
  type: RECEIVE_POSTS,
  posts
});

export const receivePost = post => ({
  type: RECEIVE_POST,
  post
});

export const removePost = post => ({
  type: REMOVE_POST,
  post
});

//async

export const fetchPost = ( id ) => ( dispatch ) => {
  return APIUtil.requestPost( id )
  .then( post => dispatch(receivePost(post)));
}

export const fetchAllPosts = () => ( dispatch )=> {
  return APIUtil.requestAllPosts()
  .then( posts => dispatch(receiveAllPosts(posts)));
}

export const createNewPost = ( post ) => ( dispatch )=> {
  return APIUtil.createPost( post )
  .then( newPost => dispatch(receivePost(newPost)));
}

export const updatePost = ( post ) => ( dispatch )=> {
  return APIUtil.editPost( post )
  .then( newPost => dispatch(receivePost(newPost)));
}

export const deletePost = ( id ) => ( dispatch ) => {
  return APIUtil.deletePost( id )
  .then( post => dispatch(removePost(post)));
}
