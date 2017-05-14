import React from 'react';
import * as APIUtil from '../../util/post_util';
import { Link } from 'react-router-dom';

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
        <div className="edit-post">
          <input type="text" value={title} onChange={this.update("title")}></input>
          <input type="text" value={body} onChange={this.update("body")}></input>

            <button onClick={this.handleSubmit}>
              <Link to="/">Update Post</Link>
            </button>
            <Link to="/">
            <button>Cancel</button>
          </Link>
        </div>
      </div>
    )
  }
}

export default PostEdit;
