import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Component from './articleComments';
import { articleSelected, loadArticles } from '../actions/creators';

function mapStateToProps(state) {
  if (state.selectedArticleId === null) {
    return { comments: null };
  }

  return { comments: state.comments[state.selectedArticleId] };
}

export default connect(mapStateToProps)(Component);
