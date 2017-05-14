import React from 'react';
import * as APIUtil from '../../util/post_util';

class PostEdit extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: "",
      body: "",
      id: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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

  update(property){
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.updatePost(this.state);
  }

  render(){
    const { id, title, body } = this.state;
    return(
      <div className="modal">
        <form className="edit-post" onSubmit={this.handleSubmit}>
          <input type="text" value={title} onChange={this.update("title")}></input>
          <input type="text" value={body} onChange={this.update("body")}></input>
          <input type="submit" value="Update Post"></input>
        </form>
      </div>
    )
  }
}

export default PostEdit;
