import React from 'react';
import { NavLink, Link } from 'react-router-dom';
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
          <li><Link to={"/posts/" + post.id }><p>{post.title}</p></Link></li>
          <li><button className="index-button" onClick={this.handleDelete}>Delete</button></li>
          <li>
            <NavLink to={"/posts/" + post.id + "/edit"} activeClassName="modal-active">
              <button className="index-button">Edit</button>
            </NavLink>
          </li>
        </ul>
      </li>
    );
  }
}

export default PostItem;
