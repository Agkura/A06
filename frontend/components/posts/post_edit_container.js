import { connect } from 'react-redux';
import { updatePost, fetchPost } from '../../actions/post_actions';
import PostEdit from './post_edit';


const mapStateToProps = ( state, { match} ) => {
  return ({
    postId: match.params.postId
  });
}
const dispatchStateToProps = ( dispatch ) => ({
  updatePost: ( post ) => dispatch(updatePost(post)),
  fetchPost: ( id ) => dispatch(fetchPost(id))
})

export default connect(
  mapStateToProps,
  dispatchStateToProps
)(PostEdit);
