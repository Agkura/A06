import React from 'react';

class PostForm extends React.Component{
  constructor(props){
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      title: "",
      body: ""
    };
  }

  update(property){
    return (e) => this.setState({[property]: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.createNewPost(this.state).then( () => (
      this.setState({
        title: "",
        body: ""
      })
    ));
  }

  render(){
    return(
      <div className="right">
        <form className="post-form" onSubmit={this.handleSubmit}>
          <h3>Add New Post</h3>
          <input type="text" placeholder="Title" value={this.state.title} onChange={this.update("title")}></input>
          <textarea placeholder="Body" value={this.state.body} onChange={this.update("body")}></textarea>
          <input className="submit-post" type="submit" value="Create Post"></input>
        </form>
      </div>
    )
  }
}

export default PostForm;
