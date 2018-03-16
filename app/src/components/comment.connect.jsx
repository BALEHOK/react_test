import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './comment';
import { loadReplies } from '../actions/creators';

function mapStateToProps(state, ownProps) {
  const articleId = state.selectedArticleId;
  if (articleId === null) {
    return { replies: null };
  }

  const commentId = ownProps.comment.id;
  const replies = Object.values(state.comments[articleId]).filter(c => c.parentCommentId === commentId);

  return { replies };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    loadReplies,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
