import React from 'react';
import PostsContainer from './posts/posts_container';
import PostFormContainer from './posts/post_form_container';

const App = () => (
  <div className="main">
    <PostsContainer />
    <PostFormContainer />
  </div>
)

export default App;
