import { connect } from 'react-redux';
import Component from './commentsList';

function mapStateToProps(state, ownProps) {
  const comments = ownProps.parentMeta.children.map(id => state.comments[id]);
  return {
    comments
  };
}

export default connect(mapStateToProps)(Component);
