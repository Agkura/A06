import React from 'react';
import { Link } from 'react-router-dom';
import PostEditContainer from './post_edit_container';

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
        <Link to={"/posts/" + post.id}>
          <button>Edit</button>
        </Link>
      </li>
    );
  }
}

export default PostItem;
