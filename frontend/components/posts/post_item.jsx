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
        <ul className="post-items">
          <li><p>{post.title}</p></li>
          <li><button onClick={this.handleDelete}>Delete</button></li>
          <li>
            <NavLink to={"/posts/" + post.id + "/edit"} activeClassName="modal-active">
              <button>Edit</button>
            </NavLink>
          </li>
        </ul>
      </li>
    );
  }
}

export default PostItem;
