import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './commentsList';

function mapStateToProps(state, ownProps) {
  const comments = ownProps.parentMeta.children.map(id => state.comments[id]);
  return {
    comments
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Component);
