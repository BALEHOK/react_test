import { connect } from 'react-redux';
import Component from './articleComments';

function mapStateToProps(state, ownProps) {
  const articleMeta = state.articlesMeta[ownProps.article.id] || {
    children: []
  };
  return { articleMeta };
}

export default connect(mapStateToProps)(Component);
