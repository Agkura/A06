import React from 'react';
import PostItem from './post_item';

class Posts extends React.Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllPosts();
  }

  render(){
    let allPosts = Object.keys(this.props.posts).map( (key, idx) => (
      <PostItem key={idx} deletePost={this.props.deletePost}
                post={this.props.posts[key]}
                updatePost={this.props.updatePost}/>
            ));

    return(
      <ul className="post-list">
        {allPosts}
      </ul>
    );
  }
}

export default Posts;
