import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './comment';
import { loadReplies, toggleExpandReplies } from '../actions/creators';

function mapStateToProps(state, ownProps) {
  const commentId = ownProps.comment.id;

  return {
    commentMeta: state.commentsMeta[commentId] || {
      children: []
    }
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      loadReplies,
      toggleExpand: toggleExpandReplies
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
