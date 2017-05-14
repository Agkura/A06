import React from 'react';
import PostsContainer from './posts/posts_container';
import PostFormContainer from './posts/post_form_container';
import PostEditContainer from './posts/post_edit_container';
import PostShowContainer from './posts/post_show_container';
import { Route } from 'react-router-dom';

const App = () => (
  <div className="main">
    <Route exact path="/" component={PostsContainer}/>
    <Route exact path="/" component={PostFormContainer}/>
    <Route exact path="/posts/:postId" component={PostShowContainer} />
    <Route path="/posts/:postId/edit" render={ ({match}) =>
      <PostEditContainer match={match}/>
    }/>
  </div>
)

export default App;
