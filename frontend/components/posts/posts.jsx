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
    const { posts, deletePost, updatePost } = this.props

    let allPosts = Object.keys(posts).map( (key, idx) => (
      <PostItem key={idx}
                deletePost={deletePost}
                post={posts[key]}
                updatePost={updatePost}/>
            ));

    return(
        <div className="left">
          <h3>All Posts</h3>
          <ul className="post-list">
            {allPosts}
          </ul>
        </div>


    );
  }
}

export default Posts;
