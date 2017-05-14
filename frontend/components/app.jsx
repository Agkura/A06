import React from 'react';
import PostsContainer from './posts/posts_container';
import PostFormContainer from './posts/post_form_container';
import PostEditContainer from './posts/post_edit_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="main">
    <PostsContainer />
    <PostFormContainer />
    <Route path="/posts/:postId" render={ ({match}) =>
        <PostEditContainer match={match}/>
        }/>
  </div>
)

export default App;
