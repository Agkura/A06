import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener("DOMContentLoaded", ()=>{
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});

import { fetchPost, fetchAllPosts, createNewPost, updatePost, deletePost } from './actions/post_actions';

window.fetchPost = fetchPost;
window.fetchAllPosts = fetchAllPosts;
window.createNewPost = createNewPost;
window.updatePost = updatePost;
window.deletePost = deletePost;
