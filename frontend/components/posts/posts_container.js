import { connect } from 'react-redux';
import { fetchAllPosts, deletePost } from '../../actions/post_actions';
import Posts from './posts';

const mapStateToProps = (state) => {
  return ({
    posts: state.posts
  });
}

const mapDispatchToProps = ( dispatch ) => {
  return ({
    fetchAllPosts: () => dispatch(fetchAllPosts()),
    deletePost: ( id ) => dispatch(deletePost(id))
  });
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
