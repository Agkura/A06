import React from 'react';

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPosts();
  }

  render(){
    debugger;
    let allPosts = Object.keys(this.props.posts).map( key => (
      <li>
        <p>{this.props.posts[key].title}</p>
      </li>
    ))
    return(
      <ul>
        {allPosts}
      </ul>
    );
  }
}

export default Posts;
