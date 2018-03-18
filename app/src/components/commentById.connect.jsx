import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './comment';
import { loadReplies, toggleExpandReplies, addComment } from '../actions/creators';

function mapStateToProps(state, ownProps) {
  const commentId = ownProps.commentId;

  return {
    comment: state.comments[commentId],
    commentMeta: state.commentsMeta[commentId] || {
      children: []
    }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadReplies,
      toggleExpand: toggleExpandReplies,
      addReply: addComment
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
