import { connect } from 'react-redux';
import PostShow from './post_show';

const mapStateToProps = ( state, { match } ) => {
  return ({
    postId: match.params.postId
  })
}

export default connect(
  mapStateToProps,
  null
)(PostShow);
