import { connect } from 'react-redux';
import { createNewPost } from '../../actions/post_actions';
import PostForm from './post_form';

const mapDispatchToProps = ( dispatch ) => ({
  createNewPost: ( post ) => dispatch(createNewPost(post))
})

export default connect(
  null,
  mapDispatchToProps
)(PostForm);
