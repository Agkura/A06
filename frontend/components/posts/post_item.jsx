import React from 'react';
import { NavLink } from 'react-router-dom';
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
        <NavLink to={"/posts/" + post.id} activeClassName="modal-active">
          <button>Edit</button>
        </NavLink>
      </li>
    );
  }
}

export default PostItem;
