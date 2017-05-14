import React from 'react';
import { Route, Link } from 'react-router-dom';

class PostItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e){
    this.props.deletePost(this.props.post.id);
  }


  render(){
    const { post } = this.props
    return(
      <li>
        <p>{post.title}</p>
        <button onClick={this.handleDelete}>Delete</button>
        <Route path={"/posts/" + this.props.post.id} />
      </li>
    );
  }
}

export default PostItem;
