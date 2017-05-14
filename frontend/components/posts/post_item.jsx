import React from 'react';

class PostItem extends React.Component{
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(event){
    this.props.deletePost(this.props.post.id);
  }

  render(){
    return(
      <li>
        <p>{this.props.post.title}</p>
        <button onClick={this.handleDelete}>Delete</button>
      </li>
    );
  }
}

export default PostItem;
