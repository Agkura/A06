import React from 'react';
import * as APIUtil from '../../util/post_util';
import { Link } from 'react-router-dom';

class PostShow extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      id: 0
    }
  }

  componentWillMount(){
    APIUtil.requestPost(this.props.postId).then( post => (
      this.setState({
        title: post.title,
        body: post.body,
        id: post.id
      })
    ))
  }

  render(){
    return(
      <div className="show">
        <h3>{this.state.title}</h3>
        <h5>{this.state.body}</h5>
        <Link to="/">All Posts</Link>
      </div>
    )
  }
}

export default PostShow;
